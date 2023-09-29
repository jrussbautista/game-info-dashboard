import { Game } from '@/types';
import base from './base';

type GetGameParams = {
  page_size?: number;
  search?: string;
};

type GameResponse = {
  count: number;
  results: Game[];
};

export const DEFAULT_PAGE_SIZE = 20;

export async function getGames(params: GetGameParams): Promise<GameResponse> {
  const { data } = await base.get('games', { params });
  return data as GameResponse;
}
