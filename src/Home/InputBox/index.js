import React, { useState, useEffect } from "react";

const InputBox = ({ setResults, setPending }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  //checks to see if the query is a question
  function checkQuery() {
    if (query.slice(-1) === "?") {
      console.log("its true");
      setError(false);

      return true;
    } else {
      console.log("false");
      setError(true);
      return false;
    }
  }
  //checks to see if the history has more than 10 queries
  function checkIfMoreThan10(results, history) {
    let temp = results.split(",,,");
    //history contains more than 10, delete first one
    if (temp.length > 10) {
      //remove first one
      temp.shift();
    }
    temp = temp.join(",,,");
    window.localStorage.setItem("history", `${temp}${history}`);
  }
  //submits the question to the magic 8-ball
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = checkQuery();
    if (result) {
      //spinner starts spinning
      setPending(true);
      let uri = "https://8ball.delegator.com/magic/JSON/" + query;
      fetch(uri)
        .then((response) => response.json())
        .then((json) => {
          //extra spinner spinning time
          setTimeout(() => {
            setPending(false);
            setResults(json.magic.answer);
            setQuery("");
          }, Math.random() * 2000);
          let currentResult = `${query}:${json.magic.answer},,,`;
          //if local storage has some results
          if (window.localStorage.getItem("history")) {
            let prevResults = window.localStorage.getItem("history");
            checkIfMoreThan10(prevResults, currentResult);
          } else {
            //add a key in local storage to store the history of queries
            window.localStorage.setItem("history", `${currentResult}`);
          }
        });
    }
  };
  return (
    <div className="App">
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          className={error ? "error" : "Name"}
          name="name"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Input Box"
          value={query}
        />
        <div className="button-container">
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default InputBox;
