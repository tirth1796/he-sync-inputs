import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SliderInput } from "./SliderInput";

const renderSliderInput = () => {
  const submitFn = jest.fn();
  render(<SliderInput min={0} max={100} onSubmit={submitFn} />);
  const rangeInput = screen.getByRole("slider");
  const numberInput = screen.getByRole("number");
  const submitButton = screen.getByRole("button");

  return {
    rangeInput,
    numberInput,
    submitButton,
    submitFn,
  };
};

test("should allow the number input value to be removed", async () => {
  const { rangeInput, numberInput } = renderSliderInput();
  await userEvent.type(numberInput, "10");
  expect(+numberInput.value).toBe(10);
  expect(+rangeInput.value).toBe(10);
  await userEvent.type(numberInput, "{backspace}{backspace}");
  expect(numberInput.value).toBe("");
});

test("should sync number input value when slider value is changed", async () => {
  const { rangeInput, numberInput } = renderSliderInput();
  fireEvent.change(rangeInput, { target: { value: "10" } });
  expect(+numberInput.value).toBe(10);
  expect(+rangeInput.value).toBe(10);
});

test("should sync slider value when number input value is changed", async () => {
  const { rangeInput, numberInput } = renderSliderInput();
  await userEvent.type(numberInput, "10");
  expect(+numberInput.value).toBe(10);
  expect(+rangeInput.value).toBe(10);
});

test("should disable submit button if input value is out of range", async () => {
  const { rangeInput, numberInput, submitButton } = renderSliderInput();
  await userEvent.type(numberInput, "5000");
  expect(+numberInput.value).toBe(5000);
  expect(+rangeInput.value).toBe(50);
  expect(submitButton.disabled).toBe(true);
});

test("should correctly handle form submission", async () => {
  const { rangeInput, numberInput, submitButton, submitFn } =
    renderSliderInput();
  await userEvent.type(numberInput, "5000");
  expect(+numberInput.value).toBe(5000);
  expect(+rangeInput.value).toBe(50);

  await userEvent.type(numberInput, "{backspace}{backspace}");

  await fireEvent.click(submitButton);
  expect(submitFn).toHaveBeenCalledWith(50);
});

