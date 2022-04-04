import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); // images, news, videos, 

  if (isLoading) return <Loading />

  switch (location.pathname){
    case '/search':
      return 'SEARCH';
    default:
      return 'ERROR!';
  }
}
