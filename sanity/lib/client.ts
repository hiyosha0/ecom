import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skjJJfMCllS7zLI4DbAjem0dCw149VkLffnqCiHvsXTwfjR9jNfrdsjiemohPd54a4w0tlzSn6j1lj1hkxNCkb2Fd9apRUnxofmkr09hNrKeVOueKqwavxWvLMlAesWndjd7A7BbvHyBLsnM9vRPBbDMASIJgZiXE17Mihw1NlcUd5jl5sPt"
})
