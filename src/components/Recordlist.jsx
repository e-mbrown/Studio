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
        if (localStorage.token === undefined) {
            localStorage.removeItem(localStorage.token)
        }
        const resp = await records()
        console.log(resp)
        console.log('these are the records' + resp.results)
        this.setState({
            recordData: resp.results
        })
    }

    render(){
        console.log("please")
        if (localStorage.token === undefined) {
            console.log("Recordlist is running?")
            localStorage.removeItem('token')
        }
        const records = this.state.recordData.map(record => {
            return (
                <>
                <Record id={record.id} title = {record.title} artist={record.artist} release={record.releaseYear} img={record.cover_image} tab={this.props.tab} key = {record.id} page={this.props.page}/>
                </>
            )
        })
        return (
            <>
                <h3>Available Records</h3>
                <CardColumns>
                { records }
                </CardColumns>
            </>
        )
    }
}

export default Recordlist
