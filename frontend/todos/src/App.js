import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/v1',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setTodos(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="App">
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
