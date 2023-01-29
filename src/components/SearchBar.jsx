import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Movies from "./Movies.jsx";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <FormControl className="search-bar-form">
      <OutlinedInput
        className="search-bar"
        id="search-bar"
        onChange={handleChange}
        value={search}
      />
    </FormControl>
  );
}
