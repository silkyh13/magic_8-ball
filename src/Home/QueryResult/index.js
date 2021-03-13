import React, { useState, useEffect } from "react";

const QueryResult = ({ results, pending }) => {
  return (
    <div className="App">
      <div className="ball-container">
        <div className="eight-ball">
          <div className="inner-circle">
            <div className={`up ${pending ? "spin" : ""}`}>
              <div>{results}</div>
            </div>
          </div>
        </div>
      </div>
      <p>{results}</p>
    </div>
  );
};
export default QueryResult;
