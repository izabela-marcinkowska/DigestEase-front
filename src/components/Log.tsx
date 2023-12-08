import { useState } from "react";

function Log() {
  const [isChecked, setIsChecked] = useState(false);
  const handleRadioChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };
  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input
        type="radio"
        name="my-accordion-2"
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <div className="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}

export default Log;
