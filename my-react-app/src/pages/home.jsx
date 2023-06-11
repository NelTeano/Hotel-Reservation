import React,{useEffect} from 'react'
import '../styles/home.css'
import Carousel from '../Carousel'
import SampleRoom from "../images/roomsamplelogo.jpg";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home({coverImg, facilityImg1, facilityImg2, smallRectangle}) {

    useEffect(() => {
        AOS.init();
      }, [])


    const imgSrc = {
        cover: coverImg,
        box1: facilityImg1,
        box2: facilityImg2,
        facilityfoot: smallRectangle
    }

    const instagramIcon = {
        xmlns: 'http://www.w3.org/2000/svg',
        path: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'
        } 

    const facebookIcon = {
        xmlns: 'http://www.w3.org/2000/svg',
        path: 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'
    } 

    const messengerIcon = {
        xmlns: 'http://www.w3.org/2000/svg',
        path: 'M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z'
    } 

    const TwitterIcon = {
        xmlns: 'http://www.w3.org/2000/svg',
        path: 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'
    } 

    const iconSize = {
        width: '25px',
        height: '40px'
    }

    const roomInteriors = [
        {
          type: "deluxe",
          name: "Deluxe Suite",
          price: 1000,
          bedtype: '2 Beds',
          images: [
            {
              id: 1,
              name: "Bedroom",
              image: SampleRoom,
            },
            {
              id: 2,
              name: "Living Area",
              image: SampleRoom,
            },
            {
              id: 3,
              name: "Kitchen",
              image: SampleRoom,
            },
          ],
        },
        {
          type: "junior",
          name: "Junior Suite",
          price: 500,
          bedtype: '1 Bedroom, 2 Comfort Rooms',
          images: [
            {
                id: 1,
                name: "Bedroom",
                image: SampleRoom,
              },
              {
                id: 2,
                name: "Living Area",
                image: SampleRoom,
              },
              {
                id: 3,
                name: "Kitchen",
                image: SampleRoom,
              },
          ],
        },
        {
            type: "Solo",
            name: "Vip Suite",
            price: 1500,
            bedtype: '1 Bedroom, 2 Comfort Rooms with Balcony',
            images: [
              {
                  id: 1,
                  name: "Bedroom",
                  image: SampleRoom,
                },
                {
                  id: 2,
                  name: "Living Area",
                  image: SampleRoom,
                },
                {
                  id: 3,
                  name: "Kitchen",
                  image: SampleRoom,
                },
            ],
          },
          {
            type: "Type",
            name: "Extra Rooms",
            price: 9999,
            bedtype: 'No. Beds',
            images: [
              {
                id: 1,
                name: "Bedroom",
                image: SampleRoom,
              },
              {
                id: 2,
                name: "Living Area",
                image: SampleRoom,
              },
              {
                id: 3,
                name: "Kitchen",
                image: SampleRoom,
              },
            ],
          },
      ];


  return (
    <>
        <div
            className='navbar-home'
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
         
        >
            <span>
                <a style={{fontSize:'2vw'}} href='/#'>CayoHotel</a>
            </span>

            <span className='navbar-links'>
                <a  style={{fontSize:'1.1vw'}} href='/#'>Home</a>
                <a  style={{fontSize:'1.1vw'}} href='/#'>Services</a>
                <a  style={{fontSize:'1.1vw'}} href='/#'>Contacts</a>
            </span>
        </div>

        <div style={{ backgroundImage: `url(${imgSrc.cover})` }} className='homecover'>
            <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
            >
                <p>"Live an experience <br></br> unique in our multitudinous events"</p>
            </div>
        </div>




        <div className='home-facilities'>

            <div className='spacer'>

            </div>

            <div  data-aos="zoom-out" >
                <h1 style={{
                    textAlign: "center",
                    fontWeight: '700',
                    fontSize: '56px',
                    lineHeight: '125%',
            }}>Enjoy with us! </h1>
                <p style={{
                    textAlign: "center",
                    lineHeight: '125%'
                }}> <br></br>We do all kinds of events</p>
            </div>

            <content 
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
            >
                <div>
                    <img alt='facilities' src={facilityImg1}></img>
                </div>

                <div 
                    className='facilities-context'
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1300"
                >
                    <h2>Beach Bonanza</h2>
                    <p>
                    Join us for a sun-soaked extravaganza on the sandy shores. Indulge <br></br>
                     in beachside activities, live music, and mouthwatering 
                    cuisine, <br></br> creating unforgettable memories against the backdrop of<br></br>
                     crashing waves  and golden sunsets.
                     </p>
                   <a href='/rooms'><button>Book Now!</button></a> 
                </div> 

            </content>

            <footer
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
            >

                <div
                    className='facilities-context'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1300"
                    
                >
                    <h2>Tropical Rhythms</h2>
                    <p>
                    Experience the ultimate beach hotel party extravaganza.<br></br>
                    Get ready for a night of vibrant beats, captivating<br></br>
                    performances, and a fusion of tropical flavors.<br></br>
                    From fire dancers to pulsating music, immerse <br></br>
                    yourself in a lively atmosphere as you dance barefoot<br></br>
                    in the sand and celebrate the beach life like never before.
                     </p>
                     <a href='/rooms'><button>Book Now!</button></a> 
                </div> 

                <div>
                    <img alt='facilities' src={facilityImg2}></img>
                </div>
            </footer>
        </div>

        <div 
        style={{ backgroundImage: `url(${imgSrc.facilityfoot})` }} 
        className='reserve-box'
        data-aos="zoom-out-up"
        >
                <p>A super experience to tell</p>
                <a href='/rooms'><button>Reserve Now</button></a> 
        </div>

        <div 
            className='rooms-details'
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="700"
        >
            <div >
                <h1 style={{
                    textAlign: "center",
                    lineHeight: '125%'
                }} 
                    >Luxury Rooms</h1>
                <p style={{
                    textAlign: "center",
                    lineHeight: '125%' 
                }}
                >See our entire catalog of rooms</p>
            </div>

            <div
                className='carousel-rooms'
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="700"
             >
                    {roomInteriors.map((room) => RoomItem(room))}
            </div>
        </div>

        <footer>
        <div className='home-footer'>
            <span>
                <a href='/#'><h1>CayoHotel</h1></a>
            </span>

            <span><p>Connect with Us</p>
                  <p style={{
                    color: '#474747',
                    fontSize: '17px',
                    marginLeft: '5px'
                }}
                    >Social Media Channels</p><br></br>

            <a href='/#'>
                <svg xmlns={instagramIcon} 
                width={iconSize.width} height={iconSize.height} fill="currentColor" className="bi bi-instagram" 
                viewBox="0 0 16 16">
                <path d={instagramIcon.path}/></svg>      
            </a>

            <a href='/#'>
                <svg xmlns={facebookIcon.xmlns} 
                width={iconSize.width} height={iconSize.height} fill="currentColor" 
                className="bi bi-facebook" 
                viewBox="0 0 16 16">
                <path d={facebookIcon.path}/></svg>
            </a>

            <a href='/#'>
                <svg xmlns={messengerIcon.xmlns} 
                width={iconSize.width} height={iconSize.height} fill="currentColor" className="bi bi-messenger" 
                viewBox="0 0 16 16">
                <path d={messengerIcon.path}/></svg>
            </a>

            <a href='/#'>
                <svg xmlns={TwitterIcon.xmlns}
                width={iconSize.width} height={iconSize.height} fill="currentColor" className="bi bi-twitter" 
                viewBox="0 0 16 16">
                <path d={TwitterIcon.path}/></svg>
            </a>

            </span>

        </div>


            <div className='feet'>
                <span>
                    <p>© CayoHotel 2023. All rights reserved</p>
                </span>

                <span className='links'>
                    <a href='/#'>Home</a>
                    <a href='/#'>Services</a>
                    <a href='/#'>Contacts</a>
                </span>
            </div>   
            
        </footer>

        <div>
            <br/><br/><br/>
            <h1>Just a test - Remove this later</h1>
            <ul>
                <li><Link to='/homepage'>Old Homepage</Link></li>
                <li><Link to='/calendar'>Calendar</Link></li>
                <li><Link to='/rooms'>Rooms</Link></li>
                <li><Link to='/form'>Booking</Link></li>
            </ul>            
        </div>    
    </>
  )
}

function RoomItem(room) {

    


    return(
        <div className='carousel-content'>
            <Carousel  items={room.images}/>
            <h3 style={{marginTop: '20px'}}>{room.name}</h3>
            <p>{room.bedtype}</p>
            <h1 >$ {room.price} / Night</h1>
        </div>
    )
}  
