interface ISession {
  docId: string
  name: string
  sessionUsers: ISessionUser[]
  sessionRolls: ISessionRoll[]
}

interface ISessionUser {
  docId: string
  playerId: string
  name: string
  role: SessionRole
}

enum SessionRole {
  Player = 'PLAYER',
  Host = 'HOST',
}

interface ISessionRoll {
  docId: string
  roll: IRoll
  roller: string
}

interface IRoll {
  ability: number[]
  boost: number[]
  challenge: number[]
  difficulty: number[]
  proficiency: number[]
  setback: number[]
}

export type { ISession }
