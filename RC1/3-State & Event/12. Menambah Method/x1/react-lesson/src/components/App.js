import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  // Nyatakan method handleClick 
  
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
    	  {/* Gantikan event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.setState('Guru Domba')}}>Guru Domba</button>
        
    	  {/* Gantikan event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.setState('Ninja Ken')}}>Ninja Ken</button>
        
      </div>
    );
  }
}

export default App;
