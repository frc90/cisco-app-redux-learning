import React from "react";
import ListItem from "../list-item/list-item.component";
import {listSelector} from "../../redux/todo-list/todo-list.selectors";
import {connect} from "react-redux";

const List = ({list}) => {
    return (
        <ul>
            {list.map((i, index) => (
                <ListItem key={index} item={i}/>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    list: listSelector(state)
});

export default connect(mapStateToProps, null)(List);