import React, { useState, useEffect } from "react";

const QueryResult = ({ results }) => {
  return (
    <div className="App">
      <div className="ball-container">
        <div className="eight-ball">
          <div className="inner-circle">
            <div class="up">
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
