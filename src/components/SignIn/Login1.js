import React from 'react'
import Carousel from 'react-elastic-carousel'
import MoodIcon from '@material-ui/icons/Mood';
import Slider from "react-slick";
                


const Login1 = ({data}) => {

    const bannerCarouselSetting = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        arrows: true
        };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        adaptiveHeight: true,
        arrows: true
        };
    
    // console.log('data from login new users', data)
    return (
        <div>
            <div className="LoginfirstContainer">
                    <div className="Logintagline">
                        <h3>Show your skill to the world <span><MoodIcon/></span></h3>
                    </div>

                    <div className="styling_Login">
                        {/* <Carousel itemsToShow={2}  enableAutoPlay autoPlaySpeed={1500}> */}
                        <Slider {...bannerCarouselSetting}>
                            <div style={{border: 'solid 1px red'}}><img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png" alt="Los Angeles"/></div>
                            <div><img src="https://homepages.cae.wisc.edu/~ece533/images/tulips.png" alt="Chicago" /></div>
                            <div><img src="https://homepages.cae.wisc.edu/~ece533/images/mountain.png" alt="New york" /></div>
                            <div><img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png" alt="Los Angeles"/></div>
                            <div><img src="https://homepages.cae.wisc.edu/~ece533/images/tulips.png" alt="Chicago" /></div>
                            <div><img src="https://homepages.cae.wisc.edu/~ece533/images/mountain.png" alt="New york" /></div>
                    
                        {/* </Carousel> */}
                        </Slider>
                    </div>
                    <div className="joinedlistLogin">
                        <h3>People Joined</h3>
                        <div className="styling_Login2">
                            {/* <Carousel itemsToShow={5} > */}
                            <Slider {...settings}>
                            {
                                data.map((element, index) =>{
                                    return(
                                    <div key={index} className="PeopleProfileLogin" style={{border: 'solid 1px brown'}}>
                                        <div><img src={element.profile_pic} alt=""/></div>
                                    </div>
                                    )
                            })
                        }
                        {/* </Carousel> */}
                        </Slider>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Login1
