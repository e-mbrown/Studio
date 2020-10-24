import React from 'react';
import Record from './Record';
import { records } from '../services/index'
import CardColumns from 'react-bootstrap/CardColumns'

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
        console.log(resp)
        console.log('these are the records' + resp.results)
        this.setState({
            recordData: resp.results
        })
    }

    render(){
        console.log(this.state.recordData)
        const records = this.state.recordData.map(record => {
            return (
                <>
                <Record id={record.id} title = {record.title} artist={record.artist} release={record.releaseYear} img={record.cover_image}/>
                </>
        )}
        )
        return (
            <>
                <CardColumns>
                { records }
                </CardColumns>
            </>
        )
    }
}

export default Recordlist
