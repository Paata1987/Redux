import { stat } from 'fs';
import React from 'react';
import { useAppSelector } from '../hooks/redux';

const FavouritesPages = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items</p>;

  return (
    <ul className="list-none  ">
      {favourites.map((f) => (
        <li className="" key={f}>
          <a href={f} target="_blank">
            {f}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FavouritesPages;
