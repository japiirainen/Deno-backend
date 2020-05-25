import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getCsgoMatches } from '../controllers/csgoMatches.ts'
const router = new Router()

router.get('/api/v1/csgomatches', getCsgoMatches)

export default router
