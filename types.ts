export interface Match {
  id: number
  category: string
  tournament: string
  team1: string
  team2: string
  odds: {
    team1Win: number
    team2Win: number
  }
}
