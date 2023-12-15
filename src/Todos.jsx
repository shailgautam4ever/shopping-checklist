import React from 'react';
import Item from './Item';
import { useContext } from 'react';
import { ShoppingListContext } from './ShoppingContext';

export default function Todos({}) {
  const { list: todos } = useContext(ShoppingListContext);

  return (
    <section>
      {todos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      {/* {count} */}
    </section>
  );
}
