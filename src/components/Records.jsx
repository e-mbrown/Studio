<<<<<<< HEAD:src/components/Records.jsx
import React from 'react';

// Function component, renders to page
const Records = (props) => {
    console.log(props)
    return (
        <div class="record">
            <img src={props.src} alt={props.title}></img>
            <h2>{props.title}</h2>
            <h3>{props.artist} ||</h3>
            <p>{props.release}</p>
        </div>
    )

}

export default Records;
=======
import React from 'react';

// Function component, renders to page
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
>>>>>>> 2c48aa225c43f0f3c1e08e3a8212277713bb6945:src/components/Record.jsx
