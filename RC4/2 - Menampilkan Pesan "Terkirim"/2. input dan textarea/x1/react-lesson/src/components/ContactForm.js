import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className='contact-form'>
        <form>
          <p>Alamat Email (wajib diisi)</p>
          {/* Tambahkan tag input */}
          
          <p>Pesan (wajib diisi)</p>
          {/* Tambahkan tag textarea */}
          
          {/* Tambahkan tombol kirim */}
          
        </form>
      </div>
    );
  }
}

export default ContactForm;
