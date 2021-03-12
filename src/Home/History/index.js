import React, { useState, useEffect } from "react";

const HistoryModal = ({ isShowing, hide }) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (window.localStorage.getItem("history")) {
      let history = window.localStorage.getItem("history").split(",,,");
      history.pop();
      setHistory(history);
    }
  }, [isShowing]);
  return (
    isShowing && (
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                onClick={hide}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>History</p>
              <table className="history-table">
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
                {history.map((item, i) => {
                  let temp = item.split(":");
                  return (
                    <tr key={i}>
                      <td>
                        {i + 1}. {temp[0]}
                      </td>
                      <td>{temp[1]}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HistoryModal;
