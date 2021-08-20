import React, {useState} from 'react';
import "./todo.css"
import ToDolists from './ToDolists.js';

const Todo=()=> {
    const [inputList,setInputList]=useState("");
    const [items,setItems]= useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);


    };
    const listOfItems=()=>{
        setItems((oldItems)=>{
           return [...oldItems,inputList]; 
        });
        setInputList(" ");

    };
     const deleteItem=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
               return index !== id;
           })
        })
 
 }
//  useEffect(() => {
//      localStorage.setItems('lists',JSON.stringify(items))
//  }, [items]);
 
    return (
        <>
        <div className="w3-display-middle w3-margin w3-card-4 w3-padding w3-round">
            <div className="center_div w3-padding-16">
                <br/>
                <h1 className="">TODO LIST</h1>
                <br/> 
                <input type="text" className="w3-input w3-border" placeholder="Add a items" 
                value={inputList} onChange={itemEvent}/>

                <button className="w3-bar-item w3-button w3-blue w3-margin-top " onClick={listOfItems}> Add + </button>
                <ol>
                    {items.map((itemvalue,index)=>{
                        return <ToDolists key={index} id={index}
                   text={itemvalue}
                   onSelects={deleteItem}
                />
                    })}
                </ol>
            </div> 
        </div>
            
        </>
    )
};

export default Todo;