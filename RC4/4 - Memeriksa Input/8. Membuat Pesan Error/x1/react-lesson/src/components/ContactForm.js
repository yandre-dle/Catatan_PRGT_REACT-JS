import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      /* Tambahkan hasEmailError */
      
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({email: inputValue});
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    /* Deklarasikan variable emailErrorText */
    
    
    /* Buat statement if dengan hasEmailError sebagai kondisinya */
    

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
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {/* Tampilkan emailErrorText */}
          
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
