import React from "react";
import "./Joke.css";
import counter from "./hooks/counter"
/** A single joke, along with vote up/down buttons. */

function Joke({ id,  text }) {
  
    const {count,increment,decrement} = counter()
    const handleIncrementVote = () =>{
      increment()
      //vote(id,+1)
    }
    const handleDecrementVote = () =>{
      decrement()
     ///vote(id,-1)
    }
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={handleIncrementVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={handleDecrementVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          <p>{count}</p>
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }


export default Joke;
