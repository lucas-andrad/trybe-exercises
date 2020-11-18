import React from 'react';

export default class Fieldset1 extends React.Component {
    render() {
        return (
            <fieldset>
                <input type="text" value={this.state.value} onChange={this.handleChange} id=""/>
                <input type="text" value={this.state.value} onChange={this.handleChange} id=""/>
                <input type="text" value={this.state.value} onChange={this.handleChange} id=""/>
                <input type="text" value={this.state.value} onChange={this.handleChange} id=""/>
                <input type="text" value={this.state.value} onChange={this.handleChange} id=""/>
                <input type="select" value={this.state.value} onChange={this.handleChange} id=""/>
                <input type="radio" value={this.state.value} onChange={this.handleChange} id=""/>    
            </fieldset>
        )
    }
}