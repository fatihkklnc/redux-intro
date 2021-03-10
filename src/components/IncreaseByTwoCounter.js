/* Annova Software

File:IncreaseByTwoCounter.js

Contents: redux ile iki kere arttırma işlemi

History: 10.03.2021 FatihK
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseByTwoCounter())
                }}>2 arttır</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return{action:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);