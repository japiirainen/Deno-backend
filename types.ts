//interface for csgo match
export interface Match {
  id: string
  category: string
  tournament: string
  team1: string
  team2: string
  odds: {
    team1Win: number
    team2Win: number
  }
}
