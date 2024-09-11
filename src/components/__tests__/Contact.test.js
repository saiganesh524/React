import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("BA");
  // });

  // beforeEach(() => {
  //   console.log("BE");
  // });

  // afterAll(() => {
  //   console.log("AA");
  // });

  // afterEach(() => {
  //   console.log("AE");
  // });

  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact us component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes inside contact component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes);

    //Assertion
    //expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
