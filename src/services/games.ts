import { Game } from '@/types';
import base from './base';

type GetGameParams = {
  page_size: number;
};

type GameResponse = {
  count: number;
  results: Game[];
};

export const DEFAULT_PAGE_SIZE = 40;

export async function getGames(
  params: GetGameParams = { page_size: DEFAULT_PAGE_SIZE }
): Promise<GameResponse> {
  const { data } = await base.get('games', { params });
  return data as GameResponse;
}
