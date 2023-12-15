import React, { useContext } from 'react';
import { ShoppingListContext, useShoppingContext } from './ShoppingContext';

export default function Stats() {
  const bee = 1;
  const { list } = useShoppingContext();
  const stats = list.reduce(
    (acc, curr) => {
      const key = curr.completed ? 'completed' : 'pending';
      acc[key] += 1;
      return acc;
    },
    {
      completed: 0,
      pending: 0,
    }
  );
  return (
    <div className="shopping-item">
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
    </div>
  );
}
