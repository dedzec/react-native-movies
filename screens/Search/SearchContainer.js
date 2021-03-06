import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showsError: null
  })
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResult({
      movies,
      shows,
      movieError,
      showsError,
    })
  }
  return (
    <SearchPresenter 
      {...result}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
}