import React from 'react';
import heroImage from '../../assets/hero/hero-image.jpeg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Faith Eliza Green</h1>
      {props.children}
    </header>
  );
}

export default Header;