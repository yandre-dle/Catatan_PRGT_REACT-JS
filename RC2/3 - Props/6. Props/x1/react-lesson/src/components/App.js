import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className='language'>
          {/* tambahkan props untuk HTML & CSS */}
          <Language 
            
            
          />
          {/* tambahkan props untuk JavaScript */}
          <Language 
            
            
          />
          {/* tambahkan props untuk React */}
          <Language 
            
            
          />
        </div>
      </div>
    );
  }
}

export default App;