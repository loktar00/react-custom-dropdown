import React, {Component, PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

let styles = {
    wrapper: {
        width: '222px',
        position: 'relative'
    },
    dropDown: {
        border: '1px solid #ccc',
        userSelect: 'none',
        borderRadius: '3px',
        padding: '2px',
        cursor: 'pointer'
    },
    menu: {
        background: '#fff',
        boxShadow: '0 1px 5px 0 rgba(0,0,0,0.5)',
        position: 'absolute',
        width: '222px',
        zIndex: 901
    },
    selectedItem: {
        verticalAlign: 'middle',
        width: '190px',
        padding: '6px 0 6px 6px',
        display: 'inline-block',
        userSelect: 'none',
        ':hover': {
            backgroundColor: '#fff',
            color: '#000'
        }
    },
    downArrow: {
        padding: '6px',
        display: 'inline-block',
        background: 'url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIPnI+py+0/hJzz0IruwjsVADs=) no-repeat center right'
    }
};

@Radium
export default class DropDown extends React.Component {
    static displayName = 'DropDown';
    static propTypes = {
        selectedItem: PropTypes.any,
        onClick: PropTypes.func
    };
    static defaultProps = {
        selectedItem: 0,
        onClick: function(){},
    };
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.handleHide = this.handleHide.bind(this);
    }
    componentWillMount() {
        window.addEventListener('click', this.handleHide, false);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleHide, false);
    }
    render() {
        const dropDownMenu = <div style={[styles.menu]}>
                                {this.props.children}
                            </div>;

        const selectedItem = cloneElement(
                                this.props.children[this.props.selectedItem],
                                { style: [styles.selectedItem, this.props.children[this.props.selectedItem].props.style] });
        return (
            <div ref='dropdown' style={styles.wrapper} onClick={::this.handleToggle}>
                <div style={styles.dropDown}>
                    {selectedItem} <i style={styles.downArrow}/>
                </div>
                {(this.state.open) ? dropDownMenu : null}
            </div>
        );
    }
    handleToggle(evt) {
        evt.stopPropagation();
        this.setState({open : !this.state.open});
    }
    handleHide(evt) {
        if(this.state.open) {
            this.setState({open : false});
        }
    }
}
