import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>                
                <td><button onClick={() => props.editCharacter(row)}>Edit</button></td>
                <td><button onClick={() => props.removeCharacter(row._id)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, editCharacter, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    editCharacter={editCharacter}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;