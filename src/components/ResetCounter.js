/* Annova Software

File:ResetCounter.js

Contents: counter resetleme yapıldı

History: 10.03.2021 FatihK
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetCounter } from '../redux/actions/counterActions';

class ResetCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(resetCounter());
                }}>reset</button>
                
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(resetCounter,dispatch)}
}
export default connect(mapDispatchToProps)(ResetCounter);