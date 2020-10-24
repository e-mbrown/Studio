import React from 'react';
import Record from './Record';
import { records } from '../services/index'

class Recordlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recordData: [],
            username: ''
        }
    }

    componentDidMount() {
        this.getRecords()
    }

    getRecords = async () => {
        const resp = await records()
        console.log(resp.results)
        this.setState({
            recordData: resp.results
        })
    }

    render(){
        const records = this.state.recordData.map(record => {
            return (
                <>
                <Record id={record.id} title = {record.title} artist={record.artist} releaseYear={record.releaseYear} img={record.cover_image}/>
                </>
        )}
        )
        return (
            <div>
                { records }
            </div>
        )
    }
}

export default Recordlist
