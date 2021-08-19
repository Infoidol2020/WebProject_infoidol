import React, { Suspense, lazy } from 'react';
import {useState} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import ContextState from './context/ContextState';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NInternshipLearn from './components/NewInternship/NInternshipLearn';
import NewInternshipSubCard from './components/NewInternship/NewInternshipSubCard';
import NewInternshipPricing from './components/NewInternship/NewInternshipPricing';

// import Home from './components/Home';

// import Feed from './components/Feed'
// import VideoPlayer from './components/TrendingVideos/VideoPlayer'
// import BlogPage from './components/BlogPage'
// import BlogShowAllInOne from './components/BlogShow/BlogShowAllInOne'
// import BlogCategoriesPage from './components/BlogPage/BlogCategoriesPage'

// import VideoPage from './components/VideoPage'
// import VideoViewPage from './components/VideoViewPage/VideoViewPageDetail'
// import VideoDetails from './components/VideoDetails'
// import VideoCateoriesPage from './components/VideoPage/VideoCateoriesPage'

// import PicturePage from './components/PicturePage'
// import PictureViewDetail from './components/PictureViewPage/PictureViewDetail';
// import PictureCategoriesPage from './components/PicturePage/PictureCategoriesPage';

// import MusicPlayer from './components/MusicPlayer/MusicPlayer'
// import RegistrationHome from './components/SignUp/RegistrationHome'
// import Login from './components/SignIn/Login'
// import UserProfile from './components/UserProfile'
// import Dashboard from './components/Dashboard/Dashboard'
// import VideoTrendingShow from './components/Dashboard/VideoTrending/VideoTrendingShow'
// import OtherUserProfile from './components/OtherUserProfile'
// import Search from './components/Search'

// import AudioPlayer from './components/AudioDetails'
// import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
// import AboutUs from './components/AboutUs'
// import RefundPolicy from './components/RefundPolicy'
// import TermsAndCondition from './components/TermsAndCondition/TermsAndCondition'
// import Pricing from './components/Pricing/Pricing'

// import AllTrendingVideos from './components/AllTrendingVideos'
// import AllTrendingPictures from './components/AllTrendingPictures'
// import AllTrendingBlogs from './components/AllTrendingBlogs'
// import AllTrendingAudios from './components/AllTrendingAudios'

// import ReferMainPage from './components/ReferralPage/ReferMainPage'

// import AllVideoPage from './components/AllVideoPage'
// import AllBlogPage from  './components/AllBlogPage'

// import PaymentFailure from './components/PaymentFailure/PaymentFailure'
// import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess';

// import PricingCreator from './components/PricingDetails/PricingCreator'
// import Business from './components/Business/Business'
// import Affiliate from './components/Affiliate/Affiliate'

const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Feed = lazy(() => import('./components/Feed')) 
const VideoPlayer = lazy(() => import('./components/TrendingVideos/VideoPlayer')) 
const BlogPage = lazy(() => import('./components/BlogPage'))
const BlogShowAllInOne = lazy(() => import('./components/BlogShow/BlogShowAllInOne')) 
const BlogCategoriesPage = lazy(() => import('./components/BlogPage/BlogCategoriesPage'))
const  VideoPage = lazy(() => import('./components/VideoPage')) 
const VideoDetails = lazy(()=> import('./components/VideoDetails'))
const VideoCateoriesPage = lazy(()=> import('./components/VideoPage/VideoCateoriesPage'))

const PicturePage = lazy(()=> import('./components/PicturePage'))
const PictureViewDetail = lazy(()=> import('./components/PictureViewPage/PictureViewDetail')) 
const PictureCategoriesPage = lazy(()=> import('./components/PicturePage/PictureCategoriesPage')) 
const RegistrationHome = lazy(() => import('./components/SignUp/RegistrationHome')) 
const Login = lazy(() => import('./components/SignIn/Login')) 
const UserProfile = lazy(() => import('./components/UserProfile')) 
const OtherUserProfile = lazy(() => import ('./components/OtherUserProfile')) 
const Search = lazy(() => import ('./components/Search')) 

const AudioPlayer = lazy(() => import ('./components/AudioDetails')) 
const PrivacyPolicy = lazy(() => import ('./components/PrivacyPolicy/PrivacyPolicy')) 
const AboutUs = lazy(() => import ('./components/AboutUs')) 
const RefundPolicy = lazy(() => import ('./components/RefundPolicy')) 
const TermsAndCondition = lazy(() => import ('./components/TermsAndCondition/TermsAndCondition')) 
const Pricing = lazy(() => import ('./components/Pricing/Pricing')) 

const AllTrendingVideos = lazy(() => import ('./components/AllTrendingVideos')) 
const AllTrendingPictures = lazy(() => import ('./components/AllTrendingPictures')) 
const AllTrendingBlogs = lazy(() => import ('./components/AllTrendingBlogs')) 
const AllTrendingAudios = lazy(() => import ('./components/AllTrendingAudios')) 

const ReferMainPage = lazy(() => import ('./components/ReferralPage/ReferMainPage')) 

const AllVideoPage = lazy(() => import ('./components/AllVideoPage')) 
const AllBlogPage = lazy(() => import ('./components/AllBlogPage'))  

const PaymentFailure = lazy(() => import ('./components/PaymentFailure/PaymentFailure')) 
const PaymentSuccess = lazy(() => import ('./components/PaymentSuccess/PaymentSuccess')) 

const PricingCreator = lazy(() => import ('./components/PricingDetails/PricingCreator')) 
const Business = lazy(() => import ('./components/Business/Business')) 
const Affiliate = lazy(() => import ('./components/Affiliate/Affiliate')) 

const InternshipDetails = lazy(() => import ('./components/InternshipForm/InternshipDetails'))
const InternshipForm = lazy(() => import ('./components/InternshipForm/InternshipForm'))
const InternshipPricing = lazy(() => import('./components/InternshipForm/InternshipPricing'))
const InternshipPaymentSuccess = lazy(() => import('./components/InternshipPaymentSuccess/PaymentSuccess'))
const InternshipPaymentFailure = lazy(() => import('./components/InternshipPaymentFailure/PaymentFailure'))

const ReferAndEarnWithdraw =  lazy(() => import('./components/ReferralPage/ReferralWithdrawal')) 
const NewInternship =  lazy(() => import('./components/NewInternship/NewInternship')) 

const CourseDetailpage =  lazy(() => import('./components/NewInternship/CourseDetailpage')) 



function App() {
  const [videosTrending, setVideosTrending] = useState([]);
  const [particularVideoTrendingElement, setParticularVideoTrendingElement] = useState({});
  return (
    <BrowserRouter>
      <ContextState.Provider
      value={{
        videosTrending,
        setVideosTrending,
        particularVideoTrendingElement,
        setParticularVideoTrendingElement
      }}>
        <Provider store={store}>
        <Suspense fallback={<img src={LazyLoadImage} />}>
        <Switch>
        <div className="container" style={{width: '100%'}}>
              <Route exact path="/" component={Dashboard} />
              {/* <Route exact path="/" component={Home} /> */}
              
              {/* <Route path="/VideoTrendingShow" component={VideoTrendingShow} /> */}
              <Route  path="/feed" component={Feed} />
              {/* <Route  path="/VideoPlayer" component={VideoPlayer} /> */}
              <Route  path="/blogs" component={BlogPage} />
              <Route  path="/blog-details" component={BlogShowAllInOne} />
              <Route  path="/videos" component={VideoPage} />
              <Route  path="/video-details" component={VideoDetails} />
              <Route  path="/pictures" component={PicturePage } />
              <Route  path="/picture-details" component={PictureViewDetail} />
              {/* <Route  path="/MusicPlayer" component={MusicPlayer } /> */}
              <Route  path="/registration" component={RegistrationHome} />
              <Route  path="/login" component={Login} />
              <Route  path="/profile" component={UserProfile} />
              <Route  path="/userprofile" component={OtherUserProfile} />
              <Route  path="/search" component={Search} />
              <Route  path="/audio-details" component={AudioPlayer} />

              <Route  path="/privacy-policy" component={PrivacyPolicy} />
              <Route path ="/refund-policy" component={RefundPolicy} />
              <Route  path="/about-us" component={AboutUs} />
              <Route  path="/terms-and-conditions" component={TermsAndCondition} />
              
              <Route path="/blog-categories" component={BlogCategoriesPage} />
              <Route path ="/video-categories" component={VideoCateoriesPage} />
              <Route path ="/picture-categories" component={PictureCategoriesPage} />
              <Route path ="/pricing" component={Pricing} />
              <Route path ="/trending-videos" component={AllTrendingVideos} />
              <Route path="/trending-pictures" component={AllTrendingPictures} />
              <Route path="/trending-blogs" component={AllTrendingBlogs} />
              <Route path="/trending-audios" component={AllTrendingAudios} />

              <Route path="/referral-page" component={ReferMainPage} />

              <Route path="/all-videos" component={AllVideoPage} />
              <Route path="/all-blogs" component={AllBlogPage} />

              <Route path="/payment-success" component={PaymentSuccess} />
              <Route path="/payment-failed" component={PaymentFailure} />

              <Route path="/creator-details" component={PricingCreator} />
              <Route path="/business-details" component={Business} />
              <Route path="/affiliate-details" component={Affiliate} />

              <Route path="/internship" component={InternshipDetails} />
              <Route path="/internship-form" component={InternshipForm} /> 
              <Route path="/internship-pricing" component={InternshipPricing} />
              <Route path="/internship-payment-success" component ={InternshipPaymentSuccess} />
              <Route path="/internship-payment-failure" component={InternshipPaymentFailure} />

              <Route path="/referral-withdraw" component={ReferAndEarnWithdraw} />
              <Route path="/internship-page-new" component={NewInternship} />
              <Route path="/internship-learning" component={NInternshipLearn} />
              {/* <Route path="/internship-page-new" component={NewInternshipSubCard} />
              <Route path="/internship-page-new" component={NewInternshipPricing} /> */}


              <Route path="/course-detail-page" component={CourseDetailpage} />

        </div>
        </Switch>
        </Suspense>
        </Provider>
      </ContextState.Provider>
    </BrowserRouter>
  );
}

export default App;
