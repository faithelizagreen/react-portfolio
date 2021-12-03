import React from 'react'; 

function Footer() {
    const icons = [
        {
            name: 'fab fa-linkedin'

        },
        {
            name: 'fab fa-github',
            link: 'https://github.com/faithelizagreen'
        },
        {
            name: 'fab fa-stack-overflow',
            link: 'https://stackoverflow.com'

        },
        {
            name: 'fab fa-twitter',
            link: 'twitter.com'
        },
        {
            name: 'fab fa-phone',
            link: '8507979504'
        }       
    ]

    return (
        <footer className= "flex-row px-1">
            {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target= "_blank"><i className={icon.name}></i></a>
                    )
                      )}
        </footer>
    );
}

export default Footer;