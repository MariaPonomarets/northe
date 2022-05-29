import apiClient from '../apiClient';
import {LIMIT, urls} from '../constants';
import {VenueDTO} from './types';

export const getVenues = async ({
  limit = LIMIT,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) => {
  const {data} = await apiClient.get<{venues: VenueDTO[]}>(`${urls.venues}`, {
    params: {
      limit,
      offset,
    },
  });
  return data.venues;
};
