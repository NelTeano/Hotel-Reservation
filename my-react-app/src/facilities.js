import React from 'react'
import './styles/facilities.css'
import rooms from './images/rooms.png'

export default function facilities() {
    const SeparateText = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

    const TextColors = {
        gold: '#b49a80',
        white: '#FFFFFF',
        gray: '#4b4b4b'
    }
    
  return (
    <div className='facilities-container'>
        <div className='board'>
            <div className='facilities-image'>
                <img alt='roomsPictures' src={rooms} ></img>
            </div >

            <div className='facilities-content'>
                <div className='top'>
                    <p style={{color: TextColors.white}}>Luxury Hotel and Resort</p>
                    <h1 style={{color: TextColors.white}}>Discover our</h1>
                    <h1 style={{color: TextColors.gold}}>Locations</h1>
                </div>

                <div className='bottom' style={SeparateText}>
                    <div className='left-text'>
                        <p style={{color: TextColors.gray}}>
                            Lorem ipsum dolor sit amet,consectetur
                            . Aenean euismod convallis  Sed dapibus
                            ortor urna, non facilisis elit laoreet nec.
                            augue a nunc vehicula scelerisque et vitae quam.
                        </p>
                    </div>

                    <div className='right-text'>
                        <p style={{color: TextColors.gray}} >Lorem ipsum dolor sit amet,consectetur
                            . Aenean euismod convallis  Sed dapibus
                            ortor urna, non facilisis elit laoreet nec.
                            augue a nunc vehicula scelerisque et vitae quam.
                        </p>
                    </div>
                </div>

                <div className='btn-container'>
                    <a href='/rooms'><button >CHECK ALL PACKAGES</button></a>
                </div>
            </div>
        </div>

        <div className='facilities-foot'>
            <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Aenean euismod convallis
                  consequat. Aenean <br></br>a augue accumsan, 
                eleifend eros egestas, cursus nisl. Sed dapibus
                 tortor urna
            </p>
        </div>
    </div>
  )
}
