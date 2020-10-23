import React from 'react';

// Function component, renders to page
// button likes & unlikes record
const Record = (props) => {
    console.log(props)
    return (
        <div class="record">
            <img src={props.src} alt={props.title}></img>
            <h2>{props.title}</h2>
            <h3>{props.artist} ||</h3>
            <p>{props.release}</p>
            <button>
                
            </button>
        </div>
    )

}

export default Record
