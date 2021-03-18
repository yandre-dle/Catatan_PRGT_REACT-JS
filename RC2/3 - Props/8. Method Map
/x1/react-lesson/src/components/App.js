import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    // tempelkan code yang disediakan di jendela instruksi kebawah baris ini 
    

    return (
      <div>
        <h1>List of Language</h1>
        <div className='language'>
          {/* hapus code dari sini */}
          <Language 
            name='HTML & CSS'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          />
          <Language 
            name='JavaScript'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
          />
          <Language 
            name='React'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
          />
          {/* sampai sini */}
          {/* gunakan method map untuk mendisplay component Language */}
          
          
        </div>
      </div>
    );
  }
}

export default App;