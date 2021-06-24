import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import ConditionalSection from "./sections/conditional";
class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Title.defaultProps = {
  text: "Título por defecto",
};

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  render() {
    //const contador = 0;
    //return <span>{this.state.contador}</span>;
    return <ContadorNumero numero={this.state.contador} />;
  }
}
Contador.defaultProps = {
  contadorInicial: 0,
};
class ContadorNumero extends Component {
  render() {
    console.log("ContadorNumero render()");
    return <span>{this.props.numero}</span>;
  }
}
function App() {
  const numbers = [1, 1, 3, 4, 5];
  return (
    <div className="App">
      <Title text="Otro título desde props" />
      <p>Primer componente con state</p>
      {numbers.map((number, index) => {
        return <p key={number}>Soy el numero {number}</p>;
      })}
    </div>
  );
}

export default App;
