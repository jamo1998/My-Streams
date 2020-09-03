import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreateStream from './streams/CreateStream';
import DeleteStream from './streams/DeleteStream';
import EditStream from './streams/EditStream';
import ViewStream from './streams/ViewStream';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
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