import React from 'react';

class Lesson extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{this.props.name}</p>
          <img src={this.props.image} alt='' />
        </div>
      </div>
    );
  }
}

export default Lesson;
