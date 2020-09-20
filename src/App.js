import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/list/list.component";
import FancyList from "./components/fancy-list/fancy-list.component";
import {connect} from "react-redux";
import {addItemAction} from "./redux/todo-list/todo-list.actions";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            inputText: ''
        }
    }

    handleOnChange = (event) => {
        let txt = event.target.value;
        this.setState({
            ...this.state,
            inputText: txt
        })
    };

    handleOnClick = () => {
        if (this.state.inputText) {
            this.props.handleAddItemToList({ name: this.state.inputText})
        }
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input value={this.state.inputText} type="text" onChange={this.handleOnChange}/>
                    <List/>
                    <button onClick={this.handleOnClick}>Add</button>
                </div>
                <div>
                    <FancyList/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleAddItemToList: (item) => dispatch(addItemAction(item))
});

export default connect(null, mapDispatchToProps)(App);
