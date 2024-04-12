import React, { useEffect, useState } from "react";
import { FormControl, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <FormControl
        sx={{
          broderRadius: "30px",
          width: "80%",
        }}
      >
        <OutlinedInput
          id="search-bar"
          onChange={handleChange}
          value={search}
          sx={{
            borderRadius: "30px",
            height: "35px",
            backgroundColor: "white",
            width: "100%",
          }}
        />
      </FormControl>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{
          borderRadius: "30px",
          background: "linear-gradient(to right, #ad5389, #3c1053) !important",
          marginLeft: "-4pc",
          height: "40px",
          marginTop: "-3px",
        }}
      >
        Search
      </Button>
    </>
  );
}
