import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomButton from "./index";

describe("CustomButton", () => {
  test("renders button with provided text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<CustomButton>{buttonText}</CustomButton>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <CustomButton onClick={handleClick}>Click me</CustomButton>
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  test("applies custom color to the button", () => {
    const { getByText } = render(
      <CustomButton color="red">Click me</CustomButton>
    );
    const buttonElement = getByText("Click me");
    expect(buttonElement).toHaveStyle("background-color: red");
  });

  
});
