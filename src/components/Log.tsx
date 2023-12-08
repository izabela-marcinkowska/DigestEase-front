import { useState } from "react";
import type { Log as LogType } from "../Logs";

type LogProps = {
  log: LogType;
};

function Log({ log }: LogProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleRadioChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };
  return (
    <div className="collapse collapse-arrow bg-base-200 mb-2">
      <input
        type="radio"
        name="my-accordion-2"
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <div className="collapse-title text-xl font-medium">
        <p>{log.date}</p>
      </div>
      <div className="collapse-content">
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
    </div>
  );
}

export default Log;
