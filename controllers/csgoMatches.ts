import { Match } from '../types.ts'

let csgoMatches: Match[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
//route: GET /api/v1/matches

const getCsgoMatches = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: csgoMatches,
  }
}

export { getCsgoMatches }
