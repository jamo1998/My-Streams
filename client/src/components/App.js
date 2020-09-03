import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import CreateStream from './streams/CreateStream';
import DeleteStream from './streams/DeleteStream';
import EditStream from './streams/EditStream';
import ViewStream from './streams/ViewStream';
import NavBar from './NavBar';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/streams/new" exact component={CreateStream} />
          <Route path="/streams/edit" exact component={EditStream} />
          <Route path="/streams/delete" exact component={DeleteStream} />
          <Route path="/streams/view" exact component={ViewStream} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;