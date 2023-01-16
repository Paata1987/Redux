import Iframe from 'react-iframe';
import { useAppSelector } from '../hooks/redux';

const FavouritesPages = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items</p>;

  const delAll = () => {
    window.location.reload();
    localStorage.clear();
  };

  return (
    <>
      <ul className="list-none  ">
        {favourites.map((f) => (
          <li className="" key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
          onClick={delAll}
        >
          Remove
        </button>
      </ul>

      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
    </>
  );
};

export default FavouritesPages;
