import React, { useEffect, useState } from "react";
import * as Constans from "../constants/Constants.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setBannerBackgroundImage } from "../redux/actions/movieActions";
import SearchBar from "./SearchBar.jsx";

export default function BannerPicture(props) {
  const [img, setImg] = useState();

  useEffect(() => {
    //const url = `https://image.tmdb.org/t/p/w500/${props.posterPath}?api_key=${Constans.API_KEY}`;
    const url = `https://image.tmdb.org/t/p/original${props.posterPath}`;
    const fetchImage = async () => {
      const res = await fetch(url);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };

    fetchImage();
  }, []);

  return (
    <div>
      <div className="blur-front "></div>

      <img src={img} className={props.className}></img>
    </div>
  );
}