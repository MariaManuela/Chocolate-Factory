import React, { useEffect, useState } from "react";
import * as Constans from "../constants/Constants.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setBannerBackgroundImage } from "../redux/actions/movieActions";

export default function MoviePicture(props) {
  const [img, setImg] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://image.tmdb.org/t/p/w500${props.posterPath}?api_key=${Constans.API_KEY}`;
    const fetchImage = async () => {
      const res = await fetch(url);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
      dispatch(setBannerBackgroundImage(imageObjectURL));
    };

    fetchImage();
  }, []);

  return (
    <div>
      <img src={img} className={props.className}></img>
    </div>
  );
}
