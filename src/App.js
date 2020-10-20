import React, { useEffect, useState, createContext  } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoListEntry from './components/TodoListEntry';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // NavLink,
} from 'react-router-dom';


// export const TodoListContext = createContext();

function App() {

  const [todoListItems, setTodoListItems] = useState([]);


  useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            const result = await Axios('/todoListData.json');
            console.log(result.data);
            if(!ignore) setTodoListItems(result.data.items)
        }
        fetchData();
        return () => { ignore = true; }
  }, []);

  const onItemChosen = (itemChosen) => {
    console.log(itemChosen);
  }
  
  // <TodoListContext.Provider value={todoListItems}>
  return (
    <Router>
      <div>
      <Switch>
      <Route className="App" path="/" render={(props) => (<TodoList {...props} todoListItems={todoListItems} onClick={onItemChosen}/>)} exact />
      <Route path="/:name" render={(props) => (<TodoListEntry {...props} todoListItems={todoListItems}/>)} />
      </Switch>
      </div>
      </Router>
      );
    }
    // </TodoListContext.Provider>

export default App;
