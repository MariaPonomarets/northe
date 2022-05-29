import {useCallback, useEffect, useState} from 'react';
import {VenueDTO} from '../../api/coins/types';
import useFetch from '../../hooks/useFetch';
import {getVenues} from '../../api/coins';
import {LIMIT} from '../../api/constants';

const useList = () => {
  const [listDTO, setListDTO] = useState<VenueDTO[]>([]);
  const [{data, isLoading}, fetchVenuesList, page] = useFetch(getVenues);

  useEffect(() => {
    fetchVenuesList({limit: LIMIT, offset: 0});
  }, [fetchVenuesList]);

  useEffect(() => {
    if (data?.length) {
      setListDTO(prevState => [...prevState, ...data]);
    }
  }, [data]);

  const onEndReached = useCallback(() => {
    if (!isLoading) {
      fetchVenuesList({limit: LIMIT, offset: page * LIMIT});
    }
  }, [fetchVenuesList, isLoading, page]);

  return {
    listDTO,
    isLoading,
    onEndReached,
  };
};

export default useList;
