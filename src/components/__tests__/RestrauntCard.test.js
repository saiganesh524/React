import { render, screen } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import MOCK_DATA from "../mocks/RestrauntCardMock.json";
import "@testing-library/jest-dom"

it("Should render RestrauntCard Component with props Data", () => {
  render(<RestrauntCard resData={MOCK_DATA}/>);

  const name = screen.getByText("Namaste");

  expect(name).toBeInTheDocument();

});

it("Should render RestrauntCard Component with promoted Label", () => {
  // Home Work - test HOC: withPromotedLabel()
  render();

});
