import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

let styles = {
    menuItem: {
        cursor: 'pointer',
        fontSize: '13px',
        padding: '6px 0 6px 20px',
        ':hover' : {
            backgroundColor: '#52a6fa',
            color: '#fff'
        }
    }
};

@Radium
export default class DropDownItem extends Component {
    static displayName = 'DropDownItem';
    static propTypes = {
        onClick: PropTypes.func,
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    };
    static defaultProps = {
        onClick: function(){}
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <div onClick={::this.handleClick} style={[styles.menuItem, this.props.style]}>{this.props.children}</div>
        );
    }
    handleClick(evt) {
        this.props.onClick(evt);
    }
}
