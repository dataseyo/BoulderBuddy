import React from 'react'

import './styles.css'
import HomeCard from '../../components/Cards/HomeCard'
import bgroundtest from '../../assets/bgoundtest.jpg'
import Parallax from '../../components/Parallax/Parallax'

type Props = {}

const Home = (props: Props) => {
  return (
    <div
      className="home"
    >

      <Parallax>
        <div>
          <h1 className='text-white'>hey</h1>
          <button className='btn btn-outline-dark'>test</button>
        </div>
      </Parallax>

      <div className='front'>
          <h1 className='text-white'>hey</h1>
          <button className='btn btn-outline-dark'>test</button>
        </div>

      {/* <img src={bgroundtest}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          objectFit: 'contain',
          height: 'auto',
          width: '80%'
        }}
      />

      <HomeCard /> */}


    </div>
  )
}

export default Home