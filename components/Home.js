import React from 'react'
import Menu from './Menu'
import Showcase from './Showcase'

var Home = ({ slogan, choices, children }) => (
  <div id="home">
    <Showcase />
    <h1>{slogan}</h1>
    <ul>
      {choices.map((choice, idx) => <li className="home__choice" key={idx}>{choice}</li>)}
    </ul>
    {children}
  </div>
)
export default Home;
