import { useState } from 'react';

export const SliderInput = ({ min, max, onSubmit }) => {
  const [value, setValue] = useState();

  const onChange = (event) => {};

  const onSubmitClick = () => {
    onSubmit(value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4">
        <input
          role="slider"
          type="range"
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          className=""
        />
        <input
          placeholder="Enter a Number"
          role="number"
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          className="border rounded border-solid border-gray-600 w-[140px]"
        />
      </div>
      <button
        role="button"
        onClick={onSubmitClick}
        className="bg-blue-600 rounded p-2 text-white"
      >
        Submit
      </button>
    </div>
  );
};
