import React from 'react';

function Footer() {
    const icons = [
        {
            name: 'fab fa-linkedin fa-2x',
            link: 'https://github.com/faithelizagreen'
        },
        {
            name: 'fab fa-github fa-2x',
            link: 'https://github.com/faithelizagreen'
        },
        {
            name: 'fab fa-stack-overflow fa-2x',
            link: 'https://stackoverflow.com'

        },
        {
            name: 'fab fa-twitter fa-2x',
            link: 'twitter.com'
        },     
    ]

    return (
        <footer className="flex-row px-1">
           
          {icons.map(icon =>
          (
            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
          )
            )}
        </footer>
      );
    }
    
    export default Footer;