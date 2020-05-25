import { Router } from 'https://deno.land/x/oak/mod.ts'
import {
  getCsgoMatches,
  getCsgoMatch,
  addCsgoMatch,
  updateCsgoMatch,
  deleteCsgoMatch,
} from '../controllers/csgoMatches.ts'
const router = new Router()

router
  .get('/api/v1/csgomatches', getCsgoMatches)
  .get('/api/v1/csgomatches/:id', getCsgoMatch)
  .post('/api/v1/csgomatches', addCsgoMatch)
  .put('/api/v1/csgomatches/:id', updateCsgoMatch)
  .delete('/api/v1/csgomatches/:id', deleteCsgoMatch)

export default router
