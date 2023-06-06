import React from 'react'

export default function editbox() {

    const containerFormat = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '200px',
        width: '100%'
    }

    const boxSize ={
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        border: '1px solid #e2e2e2',
        height: '100%',
        width: '100%',
        maxHeight: '4vw',
        maxWidth: '30vw',
        top: '20%'
    }

    let arriveDate = "10/20/2002"
    let departDate = "10/20/2002"

  return (
    <div style={containerFormat} className='container'>
        <div style={boxSize} className='edit-box'>

          <div style={{marginRight: '3vw',
            marginLeft: '20px',
            borderRight: '1px solid #e2e2e2',
            height: '100%',
            paddingRight: '20px'
               }}>
            <a  style={{textDecoration: 'none', color: 'black'}} href='/#'> <h2>←</h2>
            <p>EDIT</p></a>
            </div>

            <div>
                <h2 style={{textAlign: 'center'}}>HOTEL NAME</h2>
                <p>ARRIVE: {arriveDate} | DEPART : {departDate} </p> 
            </div>
        </div>
    </div>
  )
}
