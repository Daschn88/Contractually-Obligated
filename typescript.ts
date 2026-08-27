export interface SleeperLeague {
  league_id: string;
  name: string;
  avatar: string | null;
  season: string;
  status: string;
  settings: {
    max_keepers?: number;
    waiver_budget?: number;
    [key: string]: any;
  };
  total_rosters: number;
}

export interface SleeperUser {
  user_id: string;
  username: string;
  display_name: string;
  avatar: string | null;
  metadata: {
    team_name?: string;
    avatar?: string;
    [key: string]: any;
  };
}

export interface SleeperRoster {
  roster_id: number;
  owner_id: string;
  league_id: string;
  players: string[] | null;
  starters: string[] | null;
  reserve: string[] | null;
  settings: {
    wins: number;
    losses: number;
    ties: number;
    fpts: number;
    waiver_budget_used?: number;
    [key: string]: any;
  };
}

export interface SleeperPlayer {
  player_id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  position: 'QB' | 'RB' | 'WR' | 'TE' | 'K' | 'DEF' | string;
  team: string | null;
  status: string;
}

export interface SleeperTransaction {
  transaction_id: string;
  type: 'waiver' | 'free_agent' | 'trade';
  status: 'complete' | 'in_progress' | 'failed';
  created: number;
  roster_ids: number[];
  adds: { [playerId: string]: number } | null;
  drops: { [playerId: string]: number } | null;
  settings: {
    waiver_bid?: number;
    [key: string]: any;
  } | null;
}

export interface PlayerContract {
  playerId: string;
  player: SleeperPlayer;
  salary: number;
  acquiredVia: 'Draft' | 'Waiver' | 'Free Agency' | 'Manual Override';
  status: 'Active' | 'Reserve' | 'Taxi';
}

export interface TeamCapSummary {
  rosterId: number;
  ownerId: string;
  teamName: string;
  managerName: string;
  avatarUrl: string;
  rosterCount: number;
  capSpent: number;
  capRemaining: number;
  capUtilization: number;
  contracts: PlayerContract[];
}
