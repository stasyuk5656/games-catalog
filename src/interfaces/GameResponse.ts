import { Game } from "./Game";

export interface GameResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
  }