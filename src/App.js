import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/list/list.component";
import FancyList from "./components/fancy-list/fancy-list.component";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [{name: 'Cisco'}, {name: 'Alexis'}],
            inputText: ''
        }
    }

    handleOnChange = (event) => {
        let txt = event.target.value;
        this.setState({
            ...this.state.list,
            inputText: txt
        })
    };

    handleOnClick = () => {
        if (this.state.inputText) {
            this.setState({
                list: [...this.state.list, { name: this.state.inputText}],
                inputText: ''
            })
        }
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input value={this.state.inputText} type="text" onChange={this.handleOnChange}/>
                    <List list={this.state.list}/>
                    <button onClick={this.handleOnClick}>Add</button>
                </div>
                <div>
                    <FancyList list={this.state.list}/>
                </div>
            </div>
        );
    }
}

export default App;
