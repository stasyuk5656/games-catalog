import { EsrbRating } from "./EsrbRating";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: { }
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: { }
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating[];
  platforms: { } //TO DO
}
