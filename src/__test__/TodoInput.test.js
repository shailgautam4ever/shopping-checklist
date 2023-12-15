import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoInput from "../TodoInput";
import { Wrapper } from "../ShoppingContext";

const TodoInputWrapper = () => {
  return (
    <Wrapper>
      <TodoInput />
    </Wrapper>
  );
};

describe("Checked present element on screen", () => {
  test("should input element present", async () => {
    render(<TodoInputWrapper />);

    const inputElement = screen.getByPlaceholderText(
      /Enter Shopping item here/i
    );

    expect(inputElement).toBeInTheDocument();
  });

  test("Total options should be 3", () => {
    render(<TodoInputWrapper />);
    const opts = screen.getAllByRole("option");
    expect(opts.length).toBe(3);
  });

  test("Required options should be present", async () => {
    render(<TodoInputWrapper />);

    const highElement = screen.getByRole("option", { name: "High" });
    const mediumElement = screen.getByRole("option", { name: "Medium" });
    const lowElement = screen.getByRole("option", { name: "Low" });

    //   expect(selectElement).toBeInTheDocument();
    // expect(highElement).toBeInTheDocument();
    // expect(mediumElement).toBeInTheDocument();
    // expect(lowElement).toBeInTheDocument();
    expect(highElement).toBeVisible();
    expect(mediumElement).toBeVisible();
    expect(lowElement).toBeVisible();
  });

  test("High option should selcted by default", async () => {
    render(<TodoInputWrapper />);

    const highElement = screen.getByRole("option", {
      name: "High",
      selected: true,
    });

    expect(highElement).toBeInTheDocument();
  });

  test("Add Button should present", () => {
    render(<TodoInputWrapper />);

    const buttonElement = screen.getByRole("button", { name: "Add" });
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("Fire Events of Todo Form", () => {
  test("input on change event", () => {
    render(<TodoInputWrapper />);
    const inputElement = screen.getByPlaceholderText(
      /Enter Shopping item here/i
    );
    fireEvent.change(inputElement, { target: { value: "Wash Clothes" } });
    expect(inputElement).toHaveDisplayValue("Wash Clothes");
  });

  test("Select low Option", () => {
    render(<TodoInputWrapper />);
    const low = screen.getByRole("option", {
      name: "Low",
    });
    const select = screen.getByTestId("selector");
    console.log("SECLECT", select);
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: "Low" } });
    expect(select.value).toBe("Low");
  });

  test("Add button functionality", () => {
    render(<TodoInputWrapper />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const inputElement = screen.getByPlaceholderText(
      /Enter Shopping item here/i
    );
    const select = screen.getByTestId("selector");

    expect(select.value).toBe("High");
    expect(inputElement.value).toBe("");
  });
});
