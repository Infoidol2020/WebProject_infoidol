import axios from 'axios';
import React,{ useState ,useEffect} from 'react';

import Carousel from 'react-elastic-carousel';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './CarouselPage.css'

// import pageLoader from '../../../assets/pageLoader.svg'



const CarouselPage = () => {
    const [dashboardBanners, setDashboardBanners] = useState([]);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true
    };
    const getBannerList = async () => {
        const dashboardBannerList= await axios.post('https://infoidol.com/admin/WebApi/webbanner_list',{
            "device_id":"SYSTEM",
            "user_id":"1"
        })
        // console.log('dashboardBannerList',dashboardBannerList);
        const dashboardBannerListResponse = await dashboardBannerList.data.data;
        setDashboardBanners(dashboardBannerListResponse);
        // console.log('BannerData',dashboardBannerListResponse);
    }
    useEffect(() =>{
        getBannerList();
    },[])
    return (
        
    <div style={{marginLeft: '5vw', marginTop: '15vh'}}>

    <Slider {...settings}>
        {
            dashboardBanners && dashboardBanners.map((element, index) => {
            
                return(
                    <div>
                        <LazyLoadImage  className="Image_tab"
                        // style={{width: '84vw', height: '50vh',}} 
                        src ={element} />
                    </div>
                )

            })
        }
    </Slider>

    </div>
    )
}

export default CarouselPage
