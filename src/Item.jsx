import React from "react";
import { useContext, useState } from "react";
import { ShoppingListContext } from "./ShoppingContext";

export default function Item({ item, id, completed = false, priority }) {
  const { list, setList } = useContext(ShoppingListContext);
  const [toggle, setToggle] = useState(false);
  const [newItem, setNewItem] = useState(item);
  const [newPriority, setNewPriority] = useState(priority);

  const handleOnCheck = (e) => {
    const index = list.findIndex((v) => v.id === id);

    list[index].completed = e.target.checked;

    setList(() => [...list]);
  };

  const handleOnDelete = () => {
    const index = list.findIndex((v) => v.id === id);
    list.splice(index, 1);
    setList([...list]);
    console.log("btn");
  };

  const handleOnToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const newItem = e.target.value;
    setNewItem(newItem);
  };

  const handleOnSelect = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    setNewPriority(value);
  };

  const handleOnEdit = (e) => {
    console.log("Say Cheese!");
    e.preventDefault();
    const listItem = list.find((v) => v.id === id);
    listItem.item = newItem;
    listItem.priority = newPriority;
    setList([...list]);
    handleOnToggle();
  };

  return (
    <div className={`shopping-item`}>
      {!toggle ? (
        <div className={`list-item ${priority.toLowerCase()}`}>
          <div className="item-section">
            <input
              id={id}
              type="checkbox"
              onChange={handleOnCheck}
              checked={completed}
            />
            <label htmlFor={id}>{item}</label>
          </div>
          <div className="item-section">
            <button onClick={handleOnDelete}>-</button>
            <span onClick={handleOnToggle}>✏️</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleOnEdit}>
          <input
            type="text"
            value={newItem}
            required
            onChange={handleOnChange}
          />
          <select name="priority" value={newPriority} onChange={handleOnSelect}>
            <option selected={newPriority == "high"} value="high">
              High
            </option>
            <option selected={newPriority == "medium"} value="medium">
              Medium
            </option>
            <option selected={newPriority == "low"} value="low">
              Low
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}
