import React from 'react';
import Collections from '../components/Collections';
import Artists from '../components/Artists';
import Records from '../components/Record';
import Console from '../components/Console';
import { account } from './../services';

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            collections: {},
            artists: {},
            records: {},
            tab: 'collections'
        }
    }

    componentDidMount() {
        this.setAccount();
    }

    checkStock = async (symbol) => {
        const resp = await checkStock(symbol);
        return resp.data;
    }

    setAccount = async () => {
        const userData = await account();
        const { name, email, collections, artists, records } = userData.data;
        this.setState({
            userName: name,
            email: email,
            collections: collections,
            artists: artists,
            records: records
        })
    }

    setTab = (tab) => {
        this.setState({
            tab: tab
        })
    }

    render() {

        const view = this.state.tab == 'records' ? (<Records records={this.state.records} />) : (<Collections collections={this.state.collections} />);

        return(
            <>
                <Header setTab={this.setTab} tab={this.state.tab} />
                <div className="accountBody">
                    {view}
                    <Console collections={this.state.collections} artists={this.state.artists} checkStock={this.checkStock} setAccount={this.setAccount} />
                </div>
            </>
        )
    }
}

export default Account;
