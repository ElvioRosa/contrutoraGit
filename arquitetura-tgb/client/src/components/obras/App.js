import React, { Component, Fragment } from 'react';
import Table from './Table';
import FormAdd from './Form-Add';
import FormEdit from './Form-Edit';

class Obras extends Component {
    state = {
        characters: [],
        editing : false,
        currentCharacter : {}
    };
    
    removeCharacter = _id => {
        const { characters } = this.state;
        
        fetch("http://localhost:1234/obras/" + _id, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))

        this.setState({
            characters: characters.filter((character, i) => {
                return character._id !== _id;
            })
        });
    }    

    editCharacter = character => {
        console.log(character);
        this.setState({
            currentCharacter : character,
            editing : true
        });
    }
    
    cancelEdit = character => {
		this.setState({
            editing : false
        });
	}

    handleFormAddSubmit = character => {
        fetch("http://localhost:1234/obras/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(character), // body data type must match "Content-Type" header
        })
        .then(
            response => response.json()
        );
        
        this.setState({characters: [...this.state.characters, character]});    
    }

    handleFormEditSubmit = character => {        
        fetch("http://localhost:1234/obras/" + character._id, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(character), // body data type must match "Content-Type" header
        });
        
        const { characters } = this.state;
        
        characters.forEach(function (value, index, array) {
            if(value._id == character._id){
                array[index] = character;
            }
        })

        this.setState({
            characters: characters,
            editing : false
        });
    }

    componentDidMount() {
        const url = "http://localhost:1234/obras/";

        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                characters: result                
            })
        });
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <div className="flex-row">
				    <div className="flex-large">
                        {this.state.editing ? (
                            <Fragment>
                                <h2>Editar Obra</h2>
                                <FormEdit 
                                    handleSubmit={this.handleFormEditSubmit}
                                    currentCharacter={this.state.currentCharacter}
                                    cancelEdit={this.cancelEdit} 
                                    />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <h2>Nova Obra</h2>
                                <FormAdd handleSubmit={this.handleFormAddSubmit} />
                            </Fragment>
                        )}                        
                    </div>
                    <div className="flex-large">
                        <Table
                            characterData={characters}
                            editCharacter={this.editCharacter}
                            removeCharacter={this.removeCharacter}
                        />
                    </div>
                </div>                                    
            </div>
        );
    }
}

export default Obras;