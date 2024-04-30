import React, { useState } from "react";
import Spinner from './Spinner';
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className=" w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[40px]">
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif}
          className=""
          alt="GifImage" width="450" />)
      }

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        className="w-10/12  bg-yellow-400 text-lg py-2 rounded-lg mb-[15px]"
        onClick={() => fetchData(tag)}>
        Generate
      </button>

    </div>
  )
}
export default Tag