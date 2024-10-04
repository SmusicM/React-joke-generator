import React, { useState, useEffect } from "react";
import useAxios from "./hooks/useAxios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */
//COULD OF DONE THIS WITH MAPING MULTIPLE REQUEST TO "https://icanhazdadjoke.com/search" BY 5 TIMES IN SAME REQUEST TO GET 5 RANDOM AND NOT 5 OFF EACH PAGE
function JokeList() {
  const baseUrl = "https://icanhazdadjoke.com/search";
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  //const [url, setUrl] = useState(`${baseUrl}?limit=5&page=${page}`);
  //const [url, setUrl] = useState(`${baseUrl}?limit=5`);
  const options = {
    headers: { Accept: "application/json" },
  };

  const { response, error, isLoading } = useAxios(
    `${baseUrl}?limit=5&page=${page}`,
    options
  );
  useEffect(() => {
    if (response) {
      console.log(response);
      setJokes(response.data.results);
      //max page on api is 30 and there is no set method to read length of pages
      if (page >= 30) {
        setHasMorePages(false);
      }
    }
  }, [response, page]);

  //const generateNewJokes =()  => {
  //  console.log("clicked botton")
  //  console.log("response at new jokes",response.data)
  // setJokes([])
  // //setUrl(null)
  // //   setUrl(`${baseUrl}?limit=5`);
  // //   //useAxios(url)
  // useAxios(`${baseUrl}?limit=5`,options)
  //    console.log("response at new jokes after useAxios",response.data)
  //
  //
  // };

  //const generateNewJokes = async()  => {
  // console.log("clicked botton")
  // console.log("response at new jokes",response.data)
  //setJokes([])
  //setUrl(null)
  //setUrl(`${baseUrl}?limit=5`);
  //woks with numkber bigger than 5
  //setUrl(`${baseUrl}?limit=10`);
  ////   //useAxios(url)
  //useAxios(`${baseUrl}?limit=5`,options)
  //   console.log("response at new jokes after useAxios",response.data)
  //
  //
  //};

  //const generateNewJokes = async()  => {
  //
  //  setJokes([])
  //  setUrl(`${baseUrl}?limit=5&page=2`)
  //  //setUrl(`${baseUrl}?limit=10`)
  //}
  console.log(jokes);
  const generateNewJokes = async () => {
    if (hasMorePages) {
      setJokes([]);
      setPage((page) => page + 1);
    }
  };
  //if (!hasMorePages) {
  //  return (
  //    <div className="JokeList">
  //      <i className="" />
  //      <p>Error fetching jokes: No more pages sorry!</p>
  //    </div>
  //  );
  //}

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <i className="" />
        <p>Error fetching jokes: {error}</p>
      </div>
    );
  }

  //return (
  //  <div className="JokeList">
  //
  //    <button className="JokeList-getmore" onClick={generateNewJokes}>
  //      Get New Jokes
  //    </button>
  //
  //
  //    {jokes.map((j) => (
  //      <Joke text={j.joke} key={j.id} id={j.id}  />
  //
  //    ))}
  //    
  //
  //  </div>
  //);

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>
      {!hasMorePages&&<p>No more joke pages to show,sorry!</p>}
      <div>
        {jokes.map((j) => (
          <Joke text={j.joke} key={j.id} id={j.id} />
        ))}
      </div>
     
    </div>
  );

  //return (
  //  <div className="JokeList">
  //     <button className="JokeList-getmore" onClick={generateNewJokes}>
  //        Get New Jokes
  //      </button>
  //    {jokes.length>0?(
  //      <>
  //      <div className="">
  //
  //
  //      {jokes.map((j) => (
  //        <Joke text={j.joke} key={j.id} id={j.id} />
  //      ))}
  //      </div>
  //      {!hasMorePages&&<div>No more pages to show sorry joke-ster!</div>}
  //        </>
  //      ):(
  //        <p>No more pages sorry!</p>
  //      )}
  //
  //  </div>
  //);
}

export default JokeList;
