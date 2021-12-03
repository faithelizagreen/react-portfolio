import React from 'react';
import headShot from '../../assets/headshot/headshot.png'

function About () {
    return (
        <section className="my-5">
        <div className="my-2">
          <div className="profile-img my-5">
          <img src={headShot} alt="faith" style={{width: '200px'}}></img>
          </div>
          <p>Hello!
                </p>
                <p> My name is Faith Green. I'm a former advertising and public relations specialist looking to expand
                    my career. I love creating and problem solving, and I'm excited to learn all there is to know about
                    web development.
                </p>
                <p>Please keep an eye out for new and exciting projects as I continue to build out my portfolio.</p>
        </div>
      </section>
    );
}

export default About