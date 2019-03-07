import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/Bar.jsx';
import * as actions from '../actions/actions'

class BarContainer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('Mounted now GET data');
        const req = new Request('/bars', {method: 'GET'});
        fetch(req)
        .then(res => (res.json()))
        .then(data => {
            this.props.dataToStore(data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        const arrBars = [];
        for(let i = 0; i < this.props.list.length; i++)
            arrBars.push(
                <Bar key={ i * 15 }
                name={ this.props.list[i].name } 
                location={ this.props.list[i].location } />
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

const mapDispatchToProps = dispatch => ({
    dataToStore: data => {
        dispatch(actions.setBars(data));
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BarContainer);