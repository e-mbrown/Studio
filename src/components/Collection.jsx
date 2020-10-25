import React from 'react';
import Record from './Record';
import CardColumns from 'react-bootstrap/CardColumns'
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
        const resp = await collection()
        console.log(resp)
        console.log(resp.results)
        this.setState({
            collectionData: resp.results
        })
    }
    
    render(){
        const collection = this.state.collectionData.map(record => {

            return (
                <>
                <Record id={record.id} title = {record.title} artist={record.artist} releaseYear={record.releaseYear} img={record.cover_image} tab={this.props.tab}/>
                {/*<input type='text' name='username' value={this.state.username} onChange={(e) => this.changeHandler(e)}></input>*/}
                </>
        )}
        )
        return (
            <div>
                { collection }
            </div>
        )
    }
}

export default Collection;
