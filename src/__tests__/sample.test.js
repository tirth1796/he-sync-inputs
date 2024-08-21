import App from "../App";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";


test("Should render Hello World", async () => {
  render(<App />);

  screen.getByText("Hello World");
});
