import { useState } from "react";
import type { Rapport as RapportType } from "../Rapports";

type RapportProps = {
  rapport: RapportType;
};

function Rapport({ rapport }: RapportProps) {
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
        <p>{rapport.date}</p>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <div className="log-entry">
            <div>{rapport.result}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rapport;
