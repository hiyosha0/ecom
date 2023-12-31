import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { seedSanityData } from "@/lib/seed"
import { setDefaultResultOrder } from "dns"
import Home from "@/components/Home"

interface Props {
  searchParams:{
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    search?:string
  }
}

export default async function Page({searchParams}: Props) {
  const{ date = "dec", price, color, category, size, search}= searchParams
  const priceOrder = price? `| order(price ${searchParams.price})`: ""
  const dateOrder =  date? `| order(_createdAt${searchParams.date})`: ""
  const order = `${priceOrder}${dateOrder}`

  const ProductFilter =`_type == "product" `
  const colorFilter = color? `&& "${color}" in colors` :''
  const categoryFilter= category ? `&& ${category} in categories` :''
  const sizeFilter = size ? `&& ${size} in sizes` :''
  const searchFilter = search?`&& name match "${search}"`:""
  const filter =`*[${ProductFilter}${colorFilter}${sizeFilter}${categoryFilter}${searchFilter}]`

  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"] ${order}{
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`
    
    )
  
  return (
    <div>
      <div className="px-4 pt-20 text-center">
        
        <Home/>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1? "": "s"}
            </h1>
            <ProductSort/>
            {/* Product Sort */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 ", products.length > 0 ?'lg:grid-cols-4': "lg:grid-cols-[1fr_3fr]")}>
              <div className="hidden lg:block">{/* Product filters */}
              <ProductFilters/>
              </div>
              {/* Product grid */}
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
