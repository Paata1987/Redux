import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('vsvs');
  console.log(data);

  return <div>HomePage</div>;
};

export default HomePage;
