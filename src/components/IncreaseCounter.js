/* Annova Software

File:IncreaseCounter.js

Contents: redux ile oluşturulan state e ulaşıldı ve arttırma operatörü çalıştırıldı

History: 10.03.2021 FatihK
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter } from '../redux/actions/counterActions';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter());
                }}>1 arttır</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseCounter);
