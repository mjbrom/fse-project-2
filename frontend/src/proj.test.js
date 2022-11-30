import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Label Exists", () => {
  render(<App />); 
  const email = screen.getByText(/email/i);
  const pass = screen.getByText(/password/i);
  expect(email).toBeInTheDocument();
  expect(pass).toBeInTheDocument();
});
