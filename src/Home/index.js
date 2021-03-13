import React, { useState, useEffect } from "react";
import "../App.css";
import QueryResult from "./QueryResult";
import InputBox from "./InputBox";
import Modal from "./History";
import useModal from "./utils/useModal.js";
import image from "../easter-eggs/PinClipart.com_easter-religious-images-clipart_33596.png";

const Home = (props) => {
  const {
    isShowing: isHistoryFormShowed,
    toggle: toggleHistoryModal,
  } = useModal();

  const [results, setResults] = useState("Query Result");
  const [pending, setPending] = useState(false);
  const [showEasterEggs, setShowEasterEggs] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) {
      const random = Math.random();
      if (random < 0.5) {
        setShowEasterEggs(true);
        setTimeout(() => {
          setShowEasterEggs(false);
        }, 2000);
      }
    } else {
      setFirstRender(false);
    }
  }, [results]);

  return (
    <div>
      <h1 className="App">Magic 8-Ball</h1>

      <QueryResult results={results} pending={pending} />
      <InputBox setResults={setResults} setPending={setPending} />
      <div className="button-container App">
        <button className="history-btn" onClick={toggleHistoryModal}>
          show history button
        </button>
      </div>
      {showEasterEggs && <img src={image} />}
      <Modal isShowing={isHistoryFormShowed} hide={toggleHistoryModal} />
    </div>
  );
};

export default Home;
