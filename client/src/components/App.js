import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import CreateStream from './streams/CreateStream';
import DeleteStream from './streams/DeleteStream';
import EditStream from './streams/EditStream';
import ViewStream from './streams/ViewStream';
import NavBar from './NavBar';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={CreateStream} />
            <Route path="/streams/edit/:id" exact component={EditStream} />
            <Route path="/streams/delete/:id" exact component={DeleteStream} />
            <Route path="/streams/:id" exact component={ViewStream} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
