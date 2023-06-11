import React from 'react'
import { Link } from 'react-router-dom'
import './styles/editbox.css'

export default function editbox({arriveDate, departDate, previousPage}) {

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
        top: '30%'
    }

  return (
    <div style={containerFormat} className='container'>
        <div style={boxSize} className='edit-box'>

          <div className='edit-box-link-btn' style={{marginRight: '3vw',
            marginLeft: '5%',
            borderRight: '1px solid #e2e2e2',
            height: '100%',
            paddingRight: '20px'
               }}>
            <Link style={{textDecoration: 'none', color: 'black', fontSize: '1vw'}} to={previousPage}> <h2>←</h2>
            <p style={{fontSize: '1vw'}}>EDIT</p></Link>
          </div>

          <div>
              <h2 style={{textAlign: 'center', fontSize: '1vw'}}>HOTEL NAME</h2>
              <p style={{fontSize: '1vw' }}>ARRIVE: {arriveDate} | DEPART : {departDate} </p> 
          </div>
        </div>
    </div>
  )
}
