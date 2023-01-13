import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFavor, setIsFavor] = useState(favourites.includes(repo.html_url));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFavor(true);
  };
  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFavor(false);
  };

  return (
    <div className=" border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all ">
      <a href={repo.html_url} target="_blank">
        <h2 className=" text-lg font-bold ">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold ">{repo.forks}</span>
          Watchers: <span className="font-bold ">{repo.watchers}</span>
        </p>
        <p className=" text-sm font-thin ">{repo?.description} </p>

        {!isFavor && (
          <button
            className="py-2 px-4 bg bg-yellow-300 rounded hover:shadow transition-all mr-2 "
            onClick={addToFavourite}
          >
            Add
          </button>
        )}

        {isFavor && (
          <button
            className="py-2 px-4 bg bg-red-300 rounded hover:shadow transition-all "
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;