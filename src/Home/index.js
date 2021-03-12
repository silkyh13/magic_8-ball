import React, { useState, useEffect } from "react";
import "../App.css";
import QueryResult from "./QueryResult";
import InputBox from "./InputBox";
import Modal from "./History";
import useModal from "./utils/useModal.js";

const Home = (props) => {
  const {
    isShowing: isHistoryFormShowed,
    toggle: toggleHistoryModal,
  } = useModal();
  const [results, setResults] = useState("Query Result");
  return (
    <div>
      <h1 className="App">Magic 8-Ball</h1>

      <QueryResult results={results} />
      <InputBox setResults={setResults} />
      <div className="button-container App">
        <button className="history-btn" onClick={toggleHistoryModal}>
          show history button
        </button>
      </div>
      <Modal isShowing={isHistoryFormShowed} hide={toggleHistoryModal} />
    </div>
  );
};

export default Home;
