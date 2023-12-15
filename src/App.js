import React, { useState } from 'react';
import TodoInput from './TodoInput';
import Todos from './Todos';
import { ShoppingListContext, Wrapper } from './ShoppingContext';
import Stats from './Stats';
import './style.css';
import './App.css';

export default function App() {
  // const [count, setCount] = useState(0);
  return (
    <main className="main-container">
      <Wrapper>
        <div className="sub-container">
          <h1 className="title">Shopping List App 🛍️</h1>
          <TodoInput />
          <Stats />
        </div>
        <Todos />
      </Wrapper>
    </main>
  );
}
