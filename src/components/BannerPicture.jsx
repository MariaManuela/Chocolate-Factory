import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function BannerPicture(props) {
  const [img, setImg] = useState();

  useEffect(() => {
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
    <Grid>
      <img src={img} className={props.className}></img>
    </Grid>
  );
}
