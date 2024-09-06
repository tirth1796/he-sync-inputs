import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SliderInput } from "../SliderInput";

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

  test("test #1", async () => {
    const { rangeInput, numberInput } = renderSliderInput();
    await userEvent.type(numberInput, "12");
    expect(+numberInput.value).toBe(12);
    expect(+rangeInput.value).toBe(12);
    await userEvent.type(numberInput, "{backspace}{backspace}");
    expect(numberInput.value).toBe("");
  });

  test("test #2", async () => {
    const { rangeInput, numberInput } = renderSliderInput();
    fireEvent.change(rangeInput, { target: { value: "12" } });
    expect(+numberInput.value).toBe(12);
    expect(+rangeInput.value).toBe(12);
  });

  test("test #3", async () => {
    const { rangeInput, numberInput } = renderSliderInput();
    await userEvent.type(numberInput, "12");
    expect(+numberInput.value).toBe(12);
    expect(+rangeInput.value).toBe(12);
  });
  test("test #4", async () => {
    const { rangeInput, numberInput, submitButton, submitFn } =
      renderSliderInput();
    await userEvent.type(numberInput, "6000");
    expect(+numberInput.value).toBe(6000);
    expect(+rangeInput.value).toBe(60);
    expect(submitButton.disabled).toBe(true);

    await userEvent.type(numberInput, "{backspace}{backspace}");

    await fireEvent.click(submitButton);
    expect(submitFn).toHaveBeenCalledWith(60);
  });