import React from "react";
import youtubeApi from "../api/youtube";

const handleSearch = async (keyword) => {
  const response = await youtubeApi.get("/search", {
    params: {
      q: keyword,
    },
  });
};

export default handleSearch;
