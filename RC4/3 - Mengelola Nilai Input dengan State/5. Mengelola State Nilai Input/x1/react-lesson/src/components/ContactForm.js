import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      /* Tambahkan email ke state */
      
    };
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Pesan Terkirim
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <p>Alamat Email (wajib diisi)</p>
          {/* Tambahkan atribut value ke tag input */}
          <input  />
          
          <p>Pesan (wajib diisi)</p>
          <textarea />
          <input
            type='submit'
            value='Kirim'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
