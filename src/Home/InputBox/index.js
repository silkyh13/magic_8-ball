import React, { useState, useEffect } from "react";

const InputBox = ({ setResults }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
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
  function checkIfMoreThan10(results, history) {
    let temp = results.split(",,,");
    if (temp.length > 10) {
      //remove first one
      temp.shift();
    }
    temp = temp.join(",,,");
    window.localStorage.setItem("history", `${temp}${history}`);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = checkQuery();
    if (result) {
      let uri = "https://8ball.delegator.com/magic/JSON/" + query;
      fetch(uri)
        .then((response) => response.json())
        .then((json) => {
          setResults(json.magic.answer);
          setQuery("");
          let currentResult = `${query}:${json.magic.answer},,,`;
          if (window.localStorage.getItem("history")) {
            let prevResults = window.localStorage.getItem("history");
            checkIfMoreThan10(prevResults, currentResult);
          } else {
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
