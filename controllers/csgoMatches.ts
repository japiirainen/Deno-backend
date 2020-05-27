import { Match } from '../types.ts'
import { addMatch, getMatches, findById } from '../database/csgoMatches.ts'

//Mock data

let csgoMatches: Match[] = [
  {
    id: '1',
    category: 'Counter-Strike',
    tournament: 'Helsinki 2020',
    team1: 'Joonan teami',
    team2: 'Joku teami',
    odds: {
      team1Win: 1.01,
      team2Win: 600,
    },
  },
  {
    id: '2',
    category: 'Counter-Strike',
    tournament: 'soukka open 2020',
    team1: 'team1',
    team2: 'team2',
    odds: {
      team1Win: 2.0,
      team2Win: 2.0,
    },
  },
  {
    id: '3',
    category: 'Counter-Strike',
    tournament: 'IEM Katowice 2020',
    team1: 'Astralis',
    team2: 'Ence',
    odds: {
      team1Win: 2.0,
      team2Win: 2.0,
    },
  },
]
//description: Get all csgoMatches
//route: GET /api/v1/csgomatches
const getCsgoMatches = async ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: await getMatches(),
  }
}

//description: Get a csgoMatch
//route: GET /api/v1/csgomatches/:id
const getCsgoMatch = async ({
  response,
  params,
}: {
  params: { id: string }
  response: any
}) => {
  const match: Match | undefined = await findById(params.id)

  if (match) {
    response.status = 200
    response.body = {
      success: true,
      data: match,
    }
  } else {
    response.status = 404
    response.body = {
      success: false,
      data: 'not found',
    }
  }
}
//description: Add a csgoMatch
//route: Post /api/v1/csgomatches
const addCsgoMatch = async ({
  request,
  response,
}: {
  request: any
  response: any
}) => {
  const body = await request.body()
  if (!request.hasBody) {
    response.status = 400
    response.body = {
      success: false,
      data: 'no data',
    }
  } else {
    const match: Match = body.value
    csgoMatches.push(match)
    response.status = 201
    response.body = {
      success: true,
      data: await addMatch(match),
    }
  }
}

//description: Update csgoMatch
//route: PUT /api/v1/csgomatches/:id
const updateCsgoMatch = ({ response }: { response: any }) => {}

//description: Delete csgoMatch
//route: DELETE /api/v1/csgomatches/:id
const deleteCsgoMatch = ({ response }: { response: any }) => {}

export {
  getCsgoMatches,
  getCsgoMatch,
  addCsgoMatch,
  updateCsgoMatch,
  deleteCsgoMatch,
}
