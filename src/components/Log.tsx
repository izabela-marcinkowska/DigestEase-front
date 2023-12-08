import { useState } from "react";
import type { Log as LogType } from "../Logs";

type LogProps = {
  log: LogType;
};

function Log({ log }: LogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`collapse collapse-arrow bg-base-200 mb-2 ${
        isOpen ? "collapse-open" : ""
      }`}
    >
      <div
        className="collapse-title text-xl font-medium cursor-pointer"
        onClick={toggleOpen}
      >
        <p>{log.date}</p>
      </div>
      {isOpen && (
        <div className="collapse-content ml-2">
          <div className="log-entry">
            <div>Date: {log.date}</div>
            <div>Food Input: {log.foodInput.join(", ")}</div>
            <div>Alcohol: {log.alcohol ? "Yes" : "No"}</div>
            <div>Bowel Movements: {log.bowelMovements}</div>
            <div>Stress Level: {log.stress}</div>
            <div>Pain: {log.pain ? "Yes" : "No"}</div>
            <div>Nausea: {log.nausea ? "Yes" : "No"}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Log;
