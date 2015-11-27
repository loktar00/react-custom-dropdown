import './style.css'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DropDown, DropDownItem} from 'react-custom-dropdown';

class Application extends Component {
    static displayName = 'ExampleApp';
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0
        };
    }
    render() {
        return (
        <div>
            <DropDown selectedItem={this.state.selectedItem}>
                <DropDownItem onClick={this.handleSelected.bind(this, 0)}>Test</DropDownItem>
                <DropDownItem onClick={this.handleSelected.bind(this, 1)} style={{border: '1px solid blue', color: 'red', verticalAlign: 'middle'}}>
                    <img src='http://lorempizza.com/32/32'/> <span>Pizza!</span>
                </DropDownItem>
                <DropDownItem onClick={this.handleSelected.bind(this, 2)}>
                    <i className='fa fa-thumbs-o-up'/> Test 2
                </DropDownItem>
            </DropDown>
        </div>
        );
    }
    handleSelected(selectedIndex, evt) {
        this.setState({selectedItem: selectedIndex});
    }
}

ReactDOM.render(<Application />, document.getElementById('root'));