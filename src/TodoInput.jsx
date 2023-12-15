import React, { useContext, useEffect } from "react";
import { ShoppingListContext, Wrapper } from "./ShoppingContext";
import { getUniqueId } from "./utils";

export default function TodoInput() {
  const { list, setList, error, setError } = useContext(ShoppingListContext);

  useEffect(() => {
    window.localStorage.setItem("ShoppingList", JSON.stringify(list));
    console.log("Effect");
  }, [list]);

  const handleAddItem = (e) => {
    try {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      console.log("FORM", e.target);
      e.target.reset();

      const { listItem, priority } = Object.fromEntries(form.entries());
      console.log(Object.fromEntries(form.entries()));

      const newListItem = {
        id: getUniqueId(list),
        item: listItem,
        priority,
      };

      setList((prev) => [...prev, newListItem]);
      // window.localStorage.setItem('ShoppingList', JSON.stringify(list));
      // console.log('Yooo', window.localStorage.getItem('ShoppingList'));
    } catch (e) {
      setError(true);
    }
  };
  console.log(list);
  return (
    <>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="listItem"
          placeholder="Enter Shopping Item here"
          required
        />
        <select name="priority" data-testid="selector">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {error ? (
        <p className="error">Limit Exceeded! Please purchase subscription :)</p>
      ) : null}
    </>
  );
}
