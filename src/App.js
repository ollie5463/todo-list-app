import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoListEntry from './components/TodoListEntry';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { TodoListProvider } from './providers/TodoListContext';

function App() {

  return (
    <Router>
      <TodoListProvider>
        <div>
          <Switch>
            <Route className="App" path="/" render={(props) => (<TodoList {...props} />)} exact />
            <Route path="/:name" render={(props) => (<TodoListEntry {...props} />)} />
          </Switch>
        </div>
      </TodoListProvider>
    </Router>
      );
    }

export default App;
