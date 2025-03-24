import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function ListCard() {
  return (
    <div className='container'>
      <ul style={{ fontSize: '1.2rem', padding: '1rem' }}>
        <li style={{ marginBottom: '0.6rem' }}><Link to="/">Home</Link></li>
        <li style={{ marginBottom: '0.6rem' }}><Link to="/about">About</Link></li>
        <li style={{ marginBottom: '0.6rem' }}><Link to="/services">Services</Link></li>
        <li style={{ marginBottom: '0.6rem' }}><Link to="/contact">Contact</Link></li>
        <li style={{ marginBottom: '0.6rem' }}><Link to="/blog">Blog</Link></li>
        <li style={{ marginBottom: '0.6rem' }}><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
  );
}

export default ListCard;
