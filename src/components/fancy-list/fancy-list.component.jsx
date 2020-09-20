import React from "react";
import {listSelector} from "../../redux/todo-list/todo-list.selectors";
import {connect} from "react-redux";

const FancyList = ({list}) => {

    return (
        <ol>
            {list.map((i, index) => (
                <li key={index}>{i.name}</li>
            ))}
        </ol>
    );
};
const mapStateToProps = (state) => ({
    list: listSelector(state)
});

export default connect(mapStateToProps)(FancyList);