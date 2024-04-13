import React, { useEffect, useState } from "react";
import * as Constans from "../constants/Constants.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setBannerBackgroundImage } from "../redux/actions/movieActions";
import standardPicture from "../public/images/standard_profile_picture.jpeg";
import { width } from "@mui/system";
import { Box } from "@mui/joy";

export default function ActorPicture(props) {
  const [img, setImg] = useState();

  useEffect(() => {
    const url = `https://image.tmdb.org/t/p/w500${props.profilePath}?api_key=${Constans.API_KEY}`;
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
      {props.profilePath !== null ? (
        <Box component="img" src={img} sx={props.sx} />
      ) : (
        // <img
        //   src={standardPicture}
        //   className={props.className}
        //   style={{ height: "191px", width: "130px" }}
        // ></img>
        <Box component="img" src={standardPicture} sx={props.sx} />
      )}
    </div>
  );
}
