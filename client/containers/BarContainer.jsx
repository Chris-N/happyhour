import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/Bar.jsx';
import * as actions from '../actions/actions'

class BarContainer extends Component{
    constructor(props){
        // console.log(props);
        super(props);
    }
    componentDidMount(){
        console.log('Mounted now GET data');
    }

    render(){
        const arrBars = [];
        for(let i = 0; i < this.props.list.length; i++)
            arrBars.push(
                <Bar 
                name={ this.props.barList[i].name } 
                location={ this.props.barList[i].location } />
            );

        return(
            <div>
                {arrBars}
            </div>
        )
    }
}

const mapStateToProps = store => ({
    list: store.bar.list
});

const mapDispatchToProps = props => ({
    onLoad: e => {
        dispatchEvent(actions.getBars());
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BarContainer);