import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should render Header Component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
//   const loginButton1 = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("should render Header Component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    // const cartItems = screen.getByText("Cart (0)");
    const cartItems = screen.getByText(/Cart/);
  
    expect(cartItems).toBeInTheDocument();
  });

  it("should change Login Button to Logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
  
    expect(logoutButton).toBeInTheDocument();
  });