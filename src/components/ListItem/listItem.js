import React from 'react'

const ListItem = (props) => {

    return (
        <ul>
            {props.items.map((item, index) => 
                <li key={index}>
                    {item}
                    <button onClick={()=>props.handleDelete(index)}>x</button>
                </li>
            )}
        </ul>
        );
    }
export default ListItem;
