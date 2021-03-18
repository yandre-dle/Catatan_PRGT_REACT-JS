import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Spesifikasikan state isSubmitted */
      
    };
  }

  render() {
    /* Deklarasikan variable contactForm */
    
    
    /* Buat statement if dengan isSubmitted sebagai pernyataan kondisional */
    
    
    return (
      <div className='contact-form'>
        {/* Hapus code di bawah dan tampilkan variable contactForm */}
        <form>
          <p>Alamat Email (wajib diisi)</p>
          <input />
          <p>Pesan (wajib diisi)</p>
          <textarea />
          <input
            type='submit'
            value='Kirim'
          />
        </form>
        {/* Hapus sampai di sini */}
      </div>
    );
  }
}

export default ContactForm;
