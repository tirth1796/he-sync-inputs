import { useState } from "react";

export const SliderInput = ({ min, max, onSubmit }) => {
  const [value, setValue] = useState();

  const onChange = (event) => {
  };

  const onSubmitClick = () => {
    onSubmit(value);
  };

  return (
    <div>
      <div className="flex">
        <input
          role="slider"
          type="range"
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
        <input
          role="number"
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
      <button disabled role="button" onClick={onSubmitClick}>
        Submit
      </button>
    </div>
  );
};
