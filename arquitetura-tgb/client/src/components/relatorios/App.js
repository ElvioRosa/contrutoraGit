import React, { Fragment, Component } from 'react';
import Table from './Table';
import FormSelect from './Form-Select';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';


class Relatorios extends Component {
    state = {
        characters: [],
        editing : "0",
        currentCharacter : {}
    }

    componentDidMount() {
      const url = "http://localhost:1234/relatorios/";

      fetch(url)
      .then(result => result.json())
      .then(result => {
          this.setState({
              characters: result                
          })
      });
  }

  handleFormAddSubmit = initialState => { 
    this.setState({
      editing : "1"               
  })
  }

    render() {

      const { characters } = this.state
        
        let view;

        if(this.state.editing === "1") {
          view =  <Fragment>
                    <div className="flex-large">
                      <h2>Status dos projetos</h2>
                        <ComposedChart
                          width={500}
                          height={400}
                          data={characters}
                          margin={{
                          top: 20, right: 20, bottom: 20, left: 20,
                          }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="qtd" barSize={20} fill="#413ea0" />
                        </ComposedChart>
                      </div>
                    <div className="flex-large">
                      <Table
                        characterData={characters}
                      />
                    </div>
                  </Fragment>;
        }else{
          view =  <Fragment>
                    <div className="flex-large">
                      <h2>Select Report</h2>
                      <FormSelect handleSubmit={this.handleFormAddSubmit} />
                    </div>
                    <div className="flex-large">
                    </div>
                  </Fragment>; 
        }                    
        return (
            <div className="container">
              <div className="flex-row">
                  {view}
              </div>                                    
            </div>
        );
  }
}

export default Relatorios;