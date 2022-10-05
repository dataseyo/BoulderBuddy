import React from 'react'

import './styles.css'
// import {
//     layer0,
//     layer1,
//     layer2,
// } from '../../assets/parallax'

import { 
    layer0, 
    layer1, 
    layer2,
    layer3,
    layer4,
    layer5,
    layer6
} from '../../assets/parallax'

type Props = {}

const Parallax = ({children}: any) => {
  return (
    <div className="parallax">
        <div className="parallax__layer parallax__layer__0">
            <img src={layer0} />
        </div>
        <div className="parallax__layer parallax__layer__1">
            <img src={layer1} />
        </div>
        {/* <div className=" parallax_layer parallax_layer_logo">
            <img src={layer2}/>
        </div> */}
        <div className="parallax__layer parallax__layer__3">
            <img src={layer3}/>
        </div>
        <div className="parallax__layer parallax__layer__4">
            <img src={layer4}/>
        </div>
        <div className="parallax__layer parallax__layer__5">
            <img src={layer5}/>
        </div>
        <div className="parallax__layer parallax__layer__6">
            <img src={layer6}/>
        </div>

        <div className="parallax__cover content-center">
            <div className='content justify-content-center'>
                {children}
            </div>
            
        </div>
    </div>
  )
}

export default Parallax