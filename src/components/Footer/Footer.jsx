import React from 'react'
import fonts from '../../fonts/fonts.css'
function Footer() {
  return (
    <div className='row justify-content-around bg-dark  position-absolute w-100' style={{paddingTop: '25%'}}>
        <div>
            <ul className='d-flex m-0 g-0 list-unstyled'>
                <li className='px-3 pt-3'><img src='../src/imgs/wpp.png'className='img-fluid'></img></li>
                <li className='px-3 pt-3'><img src='../src/imgs/ig.png'className='img-fluid'></img></li>
                <li className='px-3 pt-3'><img src='../src/imgs/fb.png'className='img-fluid'></img></li>
            </ul>
        </div>
        <div className='mainfont text-light text-center'>Adamas Shop 2022 @</div>
        <div></div>
    </div>
  )
}

export default Footer