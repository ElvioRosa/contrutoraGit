import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            type: '',
            status: '',
            dateStart: '',
            dateEnd: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        const { type, value1 } = event.target;
        const { status, value2 } = event.target;
        const { dateStart, value3 } = event.target;
        const { dateEnd, value4 } = event.target;

        this.setState({
            [name]: value,
            [type]: value1,
            [status]: value2,
            [dateStart]: value3,
            [dateEnd]: value4,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        
    }

    render() {
        const { name } = this.state;
        const { type } = this.state;
        const { status } = this.state;
        const { dateStart } = this.state;
        const { dateEnd } = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Tipo</label>
                <input
                    type="text"
                    name="type"
                    value={type}
                    onChange={this.handleChange}/>
                <label>Status</label>
                <input
                    type="text"
                    name="status"
                    value={status}
                    onChange={this.handleChange}/>
                <label>Data Inicial</label>
                <input
                    type="date"
                    name="dateStart"
                    value={dateStart}
                    onChange={this.handleChange} />
                <label>Data Termino</label>
                <input
                    type="date"
                    name="dateEnd"
                    value={dateEnd}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        );
    }
}

export default Form;