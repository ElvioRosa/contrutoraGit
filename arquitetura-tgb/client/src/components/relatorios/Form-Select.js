import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            status: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { status, value1 } = event.target;

        this.setState({
            [status]: value1
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        
    }

    render() {
        const { status } = this.state;

        return (
            <form>
            <select value={this.state.status} onChange={this.handleChange}>
                <option value="1">Status dos projetos</option>
            </select>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        );
    }
}

export default Form;