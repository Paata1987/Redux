import Iframe from 'react-iframe';
import { useAppSelector } from '../hooks/redux';

const FavouritesPages = () => {
  const { favourites, avatar } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items</p>;
  console.log('fav: ', favourites);
  console.log('ava: ', avatar);

  const delAll = () => {
    window.location.reload();
    localStorage.clear();
  };

  return (
    <>
      {/* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        {avatar.map((a, i) => {
          return <img key={i} className="h-[50px] rounded-full " src={a} />;
        })}
      </nav> */}
      <ul className=" ">
        {favourites.map((f, index) => (
          <li className="" key={index}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
        onClick={delAll}
      >
        Remove
      </button>
    </>
  );
};

export default FavouritesPages;
