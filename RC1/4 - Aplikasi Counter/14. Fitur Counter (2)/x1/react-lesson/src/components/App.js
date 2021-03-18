import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Buat method handleClick
  
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* tambahkan event onClick di tag <button> */}
        <button>+</button>
        
      </div>
    );
  }
}

export default App;
