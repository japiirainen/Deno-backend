import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts'
import { Match } from '../types.ts'

const client = new MongoClient()
client.connectWithUri('mongodb://localhost:27017')

const db = client.database('Bettingsite')
const csgomatches = db.collection('csgomatches')

const formatMatch = ({ _id, ...rest }: { _id: { $oid: string } }): Match => {
  return {
    id: _id.$oid,
    ...rest,
  } as Match
}

const getMatches = async () => {
  const response = await csgomatches.find({})
  return response.map(formatMatch)
  // return response.map((match: { _id: { $oid: string } }) => formatMatch(match))
}

const findById = async (id: string) => {
  const response = await csgomatches.findOne({ _id: { $oid: id } })
  return formatMatch(response)
}

const findByTeamName = (team: string) => {
  return csgomatches.findOne({ $or: [{ team1: team }, { team2: team }] })
}

const addMatch = async (match: Match) => {
  const response = await csgomatches.insertOne(match)
  return {
    id: response.$oid,
    ...match,
  }
}

export { addMatch, getMatches, findById, findByTeamName }
