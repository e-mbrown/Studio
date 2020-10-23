import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './screens/Register';
import Login from './screens/Login';
import Account from './screens/Account';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Register
//         </a>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Login
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userName: null
    }
  }

  setUser = (user) => {
    this.setState({
      userId: user.id,
      userName: user.name
    })
  }

  setAccount = () => {

  }

  render() {

    const account = this.state.userId ? (<Account userId={this.state.userId} />) : (<Login setUser={this.setUser} />)

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register setUser={this.setUser} />
            </Route>
            <Route path="/account">
              {account}
            </Route>
            <Route path="/">
              <Login setUser={this.setUser} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
