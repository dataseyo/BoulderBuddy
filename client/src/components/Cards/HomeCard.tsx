import React from 'react'

import './styles.css'

type Props = {}

const HomeCard = (props: Props) => {
  return (
    <div className='home-card'>
        <h1>Card</h1>
        <div className='home-card-content'>
           <p>Content</p>
        </div>
        
        <div className='home-card-footer'>
            <p>Footer</p>
        </div>
    </div>
  )
}

export default HomeCard