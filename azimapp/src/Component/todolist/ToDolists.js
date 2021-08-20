import React from 'react'

function ToDolists(props) {

    return (<>
    <div className=" w3-container w3-padding w3-margin w3-center">
        <button class="w3-button-small w3-red fas fa-times w3-right" aria-hidden="true"
        onClick={()=>{
            props.onSelects(props.id)}}></button>
    <li>{props.text}</li>
    </div>
   </> )
}

export default ToDolists
