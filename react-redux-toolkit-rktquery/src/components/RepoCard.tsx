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
    <div className="flex border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all ">
      <a
        className=" grid grid-cols-6 w-full justify-between items-center"
        href={repo.html_url}
        target="_blank"
      >
        <img
          src={repo.owner.avatar_url}
          alt="img-blur-shadow"
          className="col-start-0 col-end-2 rounded-md h-20"
        />
        <div className="col-start-2 col-end-6 mr-3 ml-3 items-center">
          <h2 className="text-lg w-11/12 font-bold  overflow-x-scroll ">
            {repo.full_name}
          </h2>
          <p className="text-sm ">
            Description:{' '}
            <span className="font-bold w-3">{repo.description}</span>
          </p>
        </div>
        <div className=" col-start-6 items-center justify-end  ">
          {!isFavor && (
            <button
              className="bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
              onClick={addToFavourite}
            >
              Add
            </button>
          )}

          {isFavor && (
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-full"
              onClick={removeFromFavourite}
            >
              Remove
            </button>
          )}
        </div>
        {/* <span>
          <h2 className="text-lg font-bold col-span-1">{repo.full_name}</h2>
          <p className="text-sm col-span-1">
            Forks: <span className="font-bold ">{repo.forks}</span>
          </p>

          {!isFavor && (
            <button
              className="bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
              onClick={addToFavourite}
            >
              Add
            </button>
          )}

          {isFavor && (
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded "
              onClick={removeFromFavourite}
            >
              Remove
            </button>
          )}
        </span> */}
      </a>
    </div>
  );
};

export default RepoCard;
