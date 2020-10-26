import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Recordlist from './components/Recordlist';
import Landing from './screens/Landing';
import Register from './screens/Register';
import Login from './screens/Login';
import Account from './screens/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Cookies, withCookies } from 'react-cookie';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      username: null,
      collection_id: null
    }
  }

  setUser = (user) => {
    console.log('setting this user' +user.user_id)
    console.log(user)
    this.setState({
      user_id: user.user_id,
      username: user.username,
      collection_id: user.collection_id
    })
  }

  // setAccount = () => {

  // }

  render() {

    //const account = this.state.user_id ? (<Account user_id={this.state.user_id} />) : (<Login setUser={this.setUser} />)

    // const clearUndefinedToken = () => {
    //   if (localStorage.token === undefined) {
    //     console.log("clearUndefinedToken is running")
    //     //localStorage.clear()
    //     //localStorage.removeItem('token')
    //     //localStorage.removeItem(localStorage.token)
    //     // const { cookies } = this.props;
    //     // cookies.remove('Token');
    //     // window.location.href = '/';
    //   }
    // }
      console.log("rendering top of App.js")
      if (localStorage.token === 'undefined' || undefined ) {
        console.log("TOKEN IS UNDEFINED")
        if (localStorage.token === 'undefined') {
          console.log("TOKEN IS A STRING")
        } else if (localStorage.token === undefined) {
          console.log("TOKEN IS ACTUALLY UNDEFINED DATA TYPE")
        }
        //localStorage.clear()
        localStorage.removeItem('token')
        //localStorage.removeItem(localStorage.token)
        // const { cookies } = this.props;
        // cookies.remove('Token');
        // window.location.href = '/';
      }
    

    const account = localStorage.getItem('token') == null ? (< Login setUser={this.setUser} />) : (<Account user_id={this.state.user_id} collection_id={this.state.collection_id}/>)

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              {/*<Login setUser={this.setUser} />*/}
              {/*clearUndefinedToken*/}
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
