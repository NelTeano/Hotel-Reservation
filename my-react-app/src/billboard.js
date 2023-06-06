import React from 'react'
import './styles/billboardStyle.css'

export default function billboard() {

  const buttonStyle = {
    marginTop: '30px',
    fontSize: '17px',
    height: '40px',
    width: '150px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  return (    
    <div className='billboardcontainer'>

        <div className='about-content'> 
            <p>Hotel Bayview</p>
            <h1>Relax in our <br></br>Resort</h1>
            <p>Lorem ipsum dolor sit amet, consectetur  orci lla orci tempor tortor, blandit
                laoreet lectus  consectetur gravida id id arcu. Morbi ac risus vitae eros congue tempor.
                Pellentesque tempor  blandit enim ut velitlaoreet lectus  consectetur gravida id id arcu suscipit dignissim.
            </p>
            <button style={buttonStyle} className='showaboutBTN'>ABOUT US</button>    
        </div>
       
        <div className='image-content'>
          <img className='poolImg' alt='hotel facilities images' src='https://www.travelonline.com/fiji/accommodation/with-free-activities/pool-volleyball-70999-ws.jpg'></img>
          <img className='natureImg' alt='hotel facilities images' src='https://hotelnikkobali-benoabeach.com/wp-content/uploads/2020/08/Yoga_Hotel-Nikko-Bali-opt.jpg'></img>
          <img className='roomImg' alt='hotel facilities images' src='https://loveincorporated.blob.core.windows.net/contentimages/gallery/dbeb3be8-2a3f-48b0-86fb-168010585fe7-Atlantis_Palm_underwatersuite.jpg'></img>
        </div>
    </div>    
  )
}
