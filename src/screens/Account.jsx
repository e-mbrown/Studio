import React from 'react';
import Collection from '../components/Collection';
//import Artists from '../components/Artists';
import Recordlist from '../components/Recordlist';
// import Console from '../components/Console';
// import Link from 'react-router-dom';
import Logout from '../components/Logout';
import Header from '../components/Header'
import Button from 'react-bootstrap/Button'

// import { account } from './../services';

// button to direct to AllRecords.jsx

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            collection: [],
            artists: {},
            records: {},
            tab: 'records'
        }
    }

    // componentDidMount() {
    // }

    setTab = (tab) => {
        console.log(this.state.tab)
        if(this.state.tab === 'records'){
            this.setState({
                tab: 'collections'
            })
        } 
        else if(this.state.tab === 'collections'){
         this.setState({
             tab: 'records'
         })
        }
     }

    render() {

        const view = this.state.tab === 'records' ? (<Recordlist records={this.state.records} />) : (<Collection collection={this.state.collection} />);
        const text = this.state.tab === 'records' ? 'Go to Collection' : 'Go to record'


        return(
            <>
                <div className="accountBody">
                    <Header tab={<Button variant='dark' text='secondary' onClick={ this.setTab }>{text}</Button>} logout={<Logout />}/>
                    {view}
                </div>
            </>
        )
    }
}

export default Account;
