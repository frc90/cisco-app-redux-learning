import React from "react";
import {listSelector} from "../../redux/todo-list/todo-list.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

const FancyList = ({list}) => {

    return (
        <ol>
            {list.map((i, index) => (
                <li key={index}>{i.name}</li>
            ))}
        </ol>
    );
};
const mapStateToProps = createStructuredSelector({
    list: listSelector
});

export default connect(mapStateToProps)(FancyList);