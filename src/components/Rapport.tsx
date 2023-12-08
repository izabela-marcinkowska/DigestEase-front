import { useState } from "react";
import type { Rapport as RapportType } from "../Rapports";

type RapportProps = {
  rapport: RapportType;
};

function Rapport({ rapport }: RapportProps) {
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
        <p>{rapport.date}</p>
      </div>
      <div className="collapse-content">
        <div className="log-entry">
          <div>{rapport.result}</div>
        </div>
      </div>
    </div>
  );
}

export default Rapport;
