import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/Bar.jsx';
import BarForm from '../components/BarForm.jsx';
import * as actions from '../actions/actions'

class BarContainer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // console.log('Mounted now GET data');
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
        console.log(this.props.list);
        const arrBars = [];
        for(let i = 0; i < this.props.list.length; i++)
            arrBars.push(
                <Bar key={ i * 15 }
                name={ this.props.list[i].name } 
                location={ this.props.list[i].location } />
            );

        return(
            <div>
                <button onClick={this.props.toggleForm}>Add Bar</button>
                { this.props.formHidden ? <BarForm submitForm={this.props.submitForm} 
                inputName={this.props.inputName} inputLocation={this.props.inputLocation}
                name={this.props.formName} location={this.props.formLocation} /> : null } 
                <div className="barContainer">
                    {arrBars}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    list: store.bar.list,
    formName: store.bar.formName,
    formLocation: store.bar.formLocation,
    formHidden: store.bar.formHidden
});

const mapDispatchToProps = dispatch => ({
    dataToStore: data => {
        dispatch(actions.setBars(data));
    },
    toggleForm: e => {
        dispatch(actions.toggleForm());
    },
    submitForm: e => {
        dispatch(actions.addBar())
    },
    inputName: e => {
        dispatch(actions.setName(e.target.value))
    },
    inputLocation: e => {
        dispatch(actions.setLocation(e.target.value))
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BarContainer);