import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recordlist from './components/Recordlist';
import Landing from './screens/Landing';
import Register from './screens/Register';
import Login from './screens/Login';
import Account from './screens/Account';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      username: null
    }
  }

  setUser = (user) => {
    console.log('setting this user' +user.id)
    this.setState({
      user_id: user.id,
      username: user.name
    })
  }

  // setAccount = () => {

  // }

  render() {

    //const account = this.state.user_id ? (<Account user_id={this.state.user_id} />) : (<Login setUser={this.setUser} />)

    const account = localStorage.getItem('token') == null ? (< Login setUser={this.setUser} />) : (<Account user_id={this.state.user_id} />)

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              {/*<Login setUser={this.setUser} />*/}
              {account}
            </Route>
            <Route path="/register">
              <Register setUser={this.setUser} />
            </Route>
            <Route path="/account">
              { account }
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
        {/*<Recordlist/>*/}
      </div>
    );
  }
}

export default App;
