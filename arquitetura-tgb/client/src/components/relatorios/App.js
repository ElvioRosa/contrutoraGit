import React, { Fragment, PureComponent } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';


class Relatorios extends PureComponent {
    state = {
        characters: [],
        editing : "1",
        currentCharacter : {}
    }

  handleSubmit() {
    const url = "http://localhost:1234/relatorios/";

    fetch(url)
    .then(result => result.json())
    .then(result => {
        this.setState({
            characters: result                
        })
    });
  }

    render() {

        const characters = this.state;
        
        let view;

        if(this.state.editing === "1") {
          view =  <Fragment>
                      <h2>Status projetos</h2>
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
                  </Fragment>;

        }else{
          view =  <Fragment>
                    <h2>Select Report</h2>
                  </Fragment>; 
        }                    

        return (
            <div className="container">
              <div className="flex-row">
				        <div className="flex-large">
                  {view}
                </div>
              </div>                                    
            </div>
        );
  }
}

export default Relatorios;