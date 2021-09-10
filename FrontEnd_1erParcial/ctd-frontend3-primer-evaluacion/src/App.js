import React from 'react';
import Aventura from './components/Aventura';
import data from './components/data.json'

export default class App extends React.Component{
   
    constructor(){
    super();
    this.state = {
      id: data[0].id,
      historia: data[0].historia,
      opciones: {
        a: data[0].opciones.a,
        b: data[0].opciones.b
      },
      prevEleccion: '',
      
    }
  }
  historial = [];
  contador = 1;
  handleButtonA = () => {
    //this.setState({contador: this.state.contador + 1 });
    this.contador += 1;
    data.forEach((element, index) => {
    if(element.id === (this.contador + 'a')){
        this.historial.push('A');
        this.setState({id: data[index].id, historia: data[index].historia, opciones: data[index].opciones, prevEleccion: 'A'});
      }
    })
    console.log(this.state.contador);
  }
    
  handleButtonB = () => {
    this.contador += 1;
    data.forEach((element, index) => {
      //this.setState({contador: this.state.contador + 1 });
    if(element.id === (this.contador + 'b')){
        this.historial.push('B');
        this.setState({id: data[index].id, historia: data[index].historia, opciones: data[index].opciones, prevEleccion: 'B'});
      }
    })
    console.log(this.contador);
    console.log(this.state.historial);
  }
  componentDidUpdate(prevProps, prevState){
    console.log("El componente se actualizo");
    console.log('Propiedades anteriores: ', prevProps);
    console.log('Estado anterior: ', prevState);
    
  }
  render(){
    return  (
      <div className='layout '>
        <Aventura historia={this.state.historia}/>
        <button className='botones' onClick={this.handleButtonA}>A</button> 
        <p className='opcion'>{this.state.opciones.a}</p>

        <button className='botones' onClick={this.handleButtonB}>B</button>
        <p className='opcion'>{this.state.opciones.b}</p>
        
        <h4 className="recordatorio">Seleccion Anterior: {this.state.prevEleccion}</h4>
        <h4 className="recordatorio">Historial:{this.historial.map((element) => {
              return <li>{element}</li>
        })} </h4>
      </div>
    )

  }
}
