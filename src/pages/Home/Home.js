import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'
import Slider from './Slider'
import Sliderr from './Sliderr'
import Barn from '../Bar/Barn'
const Home = () => {
  return (
    <>
    <section>
      <Barn/>
      <Sliderr/>
      <Slider/>
      <br/>
      <Main/>
      </section>
      <Link to='galary'>move</Link>
    </>
  )
}

export default Home;
