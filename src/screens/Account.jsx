import React from 'react';
import Collection from '../components/Collection';
import Artists from '../components/Artists';
import Records from '../components/Record';
import Console from '../components/Console';
// import { account } from './../services';

// button to direct to AllRecords.jsx

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            collection: [],
            artists: {},
            records: {},
            tab: 'collections'
        }
    }

    componentDidMount() {
        this.setAccount();
    }

    // checkStock = async (symbol) => {
    //     const resp = await checkStock(symbol);
    //     return resp.data;
    //}

    // setAccount = async () => {
    //     const userData = await account();
    //     const { name, email, collection, artists, records } = userData.data;
    //     this.setState({
    //         userName: name,
    //         email: email,
    //         collection: collection,
    //         artists: artists,
    //         records: records
    //     })
    // }

    setTab = (tab) => {
        this.setState({
            tab: tab
        })
    }

    render() {

        const view = this.state.tab == 'records' ? (<Records records={this.state.records} />) : (<Collection collection={this.state.collection} />);

        return(
            <>
                {/*<Header setTab={this.setTab} tab={this.state.tab} />*/}
                <div className="accountBody">
                    {view}
                    <Console collection={this.state.collection} records={this.state.records} setAccount={this.setAccount} />
                </div>
            </>
        )
    }
}

export default Account;
