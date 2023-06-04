import React from 'react'
import './Rooms.css'
import SampleRoom from './images/roomsamplelogo.jpg'

export default function Rooms() {

    //BUTTON DESIGN
    const buttonStyle = {   
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
        border: ' 1px solid black',
        fontSize: '20px',
        height: '100%',
        widht: '100%',
        maxHeight: '40px',
        padding: '10px',
        marginTop: '10px',
        marginLeft: '28%'

    }
    


    // ROOM ATTRIBUTES
    const rooms = {
        type1:{
            src: SampleRoom
        }
    }

    // PRICE VARIABLE
    const price = '1,152'

  return (
    <div className='rooms-container'>
        <div className='combo-box'>
            <select>
                <option value="default">Room Type</option>
                <option value="default">Room</option>
                <option value="default">Suite</option>
                <option value="default">Accesible</option>
            </select>
        </div>

    <div className='box-container'>

        <div className='room-box'>
            <div className='picture-container'> 
                <img alt='roomedesign' src={rooms.type1.src}></img>
            </div>
            
            <div className='room-information' > 
                <div style={{
                    marginLeft: '20px',
                    marginTop: '20px'
            }}>
                    <h1
                        style={{
                        marginBottom: '10px'
                        }}
                    >Junior Suite</h1>
                    <ul>
                        <li>One King Bed</li>
                        <li>Hudson River View</li>
                        <li>100 sq; 52 sq m</li>
                    </ul>
                </div>

                <div className='right-content'>
                    <div style={{
                        marginTop: '20%',
                        marginRight: '15px'
                }}>
                        <p style={{
                            textAlign:'right',
                            fontSize: '1.4vw'
                    }}>FROM</p>

                        <p style={{
                            textAlign:'right',
                            fontSize: '1.4vw',
                            marginBottom: '10px'
                        }}
                        >$ {price} / NIGHT</p>
                        <p>EXCUDING TAXES & FEES</p>
                        <button style={buttonStyle} >BOOK NOW</button>
                    </div>

                    <div style={{marginBottom: '20px'}}>
                        <a href='/#'>ADDITIONAL DETAILS ↓</a>
                    </div>
                </div>
            </div>
       
        </div>

        <div className='feautures'>

        </div>
    </div>










    <div className='box-container'>

<div className='room-box'>
    <div className='picture-container'> 
        <img alt='roomedesign' src={rooms.type1.src}></img>
    </div>
    
    <div className='room-information' > 
        <div style={{
            marginLeft: '20px',
            marginTop: '20px'
    }}>
            <h1
                style={{
                marginBottom: '10px'
                }}
            >Junior Suite</h1>
            <ul>
                <li>One King Bed</li>
                <li>Hudson River View</li>
                <li>100 sq; 52 sq m</li>
            </ul>
        </div>

        <div className='right-content'>
            <div style={{
                marginTop: '20%',
                marginRight: '15px'
        }}>
                <p style={{
                    textAlign:'right',
                    fontSize: '1.4vw'
            }}>FROM</p>

                <p style={{
                    textAlign:'right',
                    fontSize: '1.4vw',
                    marginBottom: '10px'
                }}
                >$ {price} / NIGHT</p>
                <p>EXCUDING TAXES & FEES</p>
                <button style={buttonStyle} >BOOK NOW</button>
            </div>

            <div style={{marginBottom: '20px'}}>
                <a href='/#'>ADDITIONAL DETAILS ↓</a>
            </div>
        </div>
    </div>

</div>

<div className='feautures'>

</div>
</div>

<div className='box-container'>
<div className='room-box'>
    <div className='picture-container'> 
        <img alt='roomedesign' src={rooms.type1.src}></img>
    </div>
    
    <div className='room-information' > 
        <div style={{
            marginLeft: '20px',
            marginTop: '20px'
    }}>
            <h1
                style={{
                marginBottom: '10px'
                }}
            >Junior Suite</h1>
            <ul>
                <li>One King Bed</li>
                <li>Hudson River View</li>
                <li>100 sq; 52 sq m</li>
            </ul>
        </div>

        <div className='right-content'>
            <div style={{
                marginTop: '20%',
                marginRight: '15px'
        }}>
                <p style={{
                    textAlign:'right',
                    fontSize: '1.4vw'
            }}>FROM</p>

                <p style={{
                    textAlign:'right',
                    fontSize: '1.4vw',
                    marginBottom: '10px'
                }}
                >$ {price} / NIGHT</p>
                <p>EXCUDING TAXES & FEES</p>
                <button style={buttonStyle} >BOOK NOW</button>
            </div>

            <div style={{marginBottom: '20px'}}>
                <a href='/#'>ADDITIONAL DETAILS ↓</a>
            </div>
        </div>
    </div>

</div>

<div className='feautures'>

</div>
</div>















    </div>
  )
}
