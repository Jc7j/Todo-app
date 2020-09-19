import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="Content"></div>
      </BrowserRouter>
    </div>
  );
};

export default App;
