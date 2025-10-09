import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  const element = screen.getByText(/todo/i);
  expect(element).toBeInTheDocument();
});