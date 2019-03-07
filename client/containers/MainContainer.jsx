import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import Find from '../components/Find.jsx';

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        <div>
            <h1>Happy Hour</h1>
            <Find handleKeyDown={ this.props.handleKeyDown } 
                handleOnClick={ this.props.handleOnClick } />
        </div>
    }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    handleKeyDown: e => {
        dispatch(actions.addInput(e.target.value));
    },
    handleOnClick: e => {
        dispatch(actions.searchBars(e.target.value));
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainContainer);