import React from 'react'
import './billboardStyle.css'

export default function billboard() {
  return (
    <div className='billboardcontainer'>
        <div>
            <p>Hotel Bayview</p>
            <h1>Relax in our <br></br>Resort</h1>
            <p>Lorem ipsum dolor sit amet, consectetur  orci lla orci tempor tortor, blandit <br></br>
                laoreet lectus  consectetur gravida id id arcu. Morbi ac risus vitae eros congue tempor. <br></br>
                Pellentesque tempor  blandit enim ut velitlaoreet lectus  consectetur gravida id id arcu.<br></br> suscipit dignissim. </p>
        </div>
        <div>
            <img className='roomImg' alt='hotel facilities images' src='https://loveincorporated.blob.core.windows.net/contentimages/gallery/dbeb3be8-2a3f-48b0-86fb-168010585fe7-Atlantis_Palm_underwatersuite.jpg'></img>
            <img className='poolImg' alt='hotel facilities images' src='https://www.travelonline.com/fiji/accommodation/with-free-activities/pool-volleyball-70999-ws.jpg'></img>
            <img className='natureImg' alt='hotel facilities images' src='https://hotelnikkobali-benoabeach.com/wp-content/uploads/2020/08/Yoga_Hotel-Nikko-Bali-opt.jpg'></img>
        </div>
    </div>
  )
}
