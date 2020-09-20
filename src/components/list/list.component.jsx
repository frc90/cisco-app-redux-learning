import React from "react";
import ListItem from "../list-item/list-item.component";

const List = ({list}) => {
    return (
        <ul>
            {list.map((i, index) => (
                <ListItem key={index} item={i}/>
            ))}
        </ul>
    );
};


export default List;