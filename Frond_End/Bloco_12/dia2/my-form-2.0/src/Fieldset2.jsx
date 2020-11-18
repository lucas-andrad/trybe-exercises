import React from 'react';

export default class Fieldset1 extends React.Component {
    render() {
        return (
            <fieldset>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="text" value={this.state.value} onChange={this.handleChange} id=""/>
            </fieldset>
        )
    }
}