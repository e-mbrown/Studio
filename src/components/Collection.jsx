import React from 'react';
import Record from './Record';
import { collection } from '../services';

class Collection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collectionData: [],
            username: ''
        }
        
    }

    componentDidMount() {
        this.getCollection()
    }

    getCollection = async () => {
        console.log("collection?: " + this.props.collection_id)
        const resp = this.props.collection_id && await collection(this.props.collection_id)
        console.log('this is your collection ', resp)
        // console.log('collection MAYBE ', resp.record_ids)
        resp && this.setState({
            collectionData: resp.record_ids
        })
    }
    
    render(){
        const collection = this.state.collectionData.map(record => {

            return (
                <>
                    <Record id={record.id} title = {record.title} artist={record.artist} releaseYear={record.releaseYear} img={record.cover_image} tab={this.props.tab} key={record.id} page={this.props.page}/>
                    {/*<input type='text' name='username' value={this.state.username} onChange={(e) => this.changeHandler(e)}></input>*/}
                </>
        )}
        )
        return (
            <div>
                <h3>Your Record Collection</h3>
                { collection }
            </div>
        )
    }
}

export default Collection;
