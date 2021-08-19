import { combineReducers } from 'redux'

import DashboardReducer from './Dashboard/DashboardReducer'
import VideoViewPageReducer from './VideoViewPage/VideoPageViewReducer'
import PictureViewPageReducer from './PictureViewPage/PictureViewPageReducer'
import AudioPageReducer from './AudioPage/AudioPageReducer'
import AudioItemReducer from './AudioPlayer/AudioItemReducer'
import ReducerRecommendedBlogs from './BlogShowRecommended/ReducerRecommendedBlogs'
import BlogPageReducer from './BlogPage/BlogPageReducer'
import BlogCategoryListReducer from './BlogListByCategory/BlogCategoryListReducer'
import VideoPageReducer from './VideoPage/TopVideosCategoryReducer'
import VideoCategoryListReducer from './VideoCategoryList/VideoCategoryListReducer'
import VideoListReducer from './VideoList/VideoListReducer'
import ReducerMusic from './MusicDetailPage/ReducerMusic'

import TrendingVideoReducer from './TrendingVideos/TrendingVideoReducer'

// import BlogPageReducer from './BlogPage/BlogPageReducer'
import BlogCategoryReducer from './BlogCategories/BlogCategoryReducer'
import UploadedBlogReducer from './NewUploadedBlogs/UploadedBlogReducer'
import TopBloggersReducer from './TopBloggers/TopBloggersReducer'

import TopVideosCategoryReducer from './VideoPage/TopVideosCategory/TopVideosCategoryReducer'
import PicturePageReducer from './PicturePage/PicturePageReducer'
import PictureListByCategoryReducer from './PictureListByCategory/PictureListByCategoryReducer'
import NewUserReducer from './SignUp/NewUsers/NewUserReducer'
import UserRegistrationReducer from './SignUp/Registration/RegistrationReducer'
import LoginUserReducer from './Login/LoginReducer'

import FeedPageReducer from './Feeds/FeedPageReducer'
import UserProfileReducer from './UserProfile/UserProfileReducer'
import VideoCategoriesReducer from './GetCategories/VideoCategories/VideoCategoriesReducer'
import pictureCategoriesReducer from './GetCategories/PictureCategories/PictureCategoriesReducer'
import AudioCategoriesReducer from './GetCategories/AudioCategories/AudioCategoriesReducer'
import BlogCategoriesReducer from './GetCategories/BlogCategories/BlogCategoriesReducer'
import UploadAudioReducer from './UploadFiles/UploadAudio/UploadAudioReducer'
import UploadVideoReducer from './UploadFiles/UploadVideo/UploadVideoReducer'
import UploadImageReducer from './UploadFiles/UploadImage/UploadImageReducer'
import UploadBlogReducer from './UploadFiles/UploadBlog/UploadBlogReducer'

import VideoCountReducer from './VideoViewCount/VideoCountReducer'
import AudioCountReducer from './AudioViewCount/AudioViewCountReducer'

import ReportReducer from './Report/ReportReducer'

import CustomizeFeedsReducer from './CustomizeFeeds/CustomizeFeedsReducer'

import LikeReducer from './Like/LikeReducer'

import SendOtpReducer from './SendOTP/SendOTPReducer'

import VerifyOtpReducer from './VerifyOTP/VerifyOTPReducer'

import ForgotPasswordReducer from './ForgotPassword/ForgotPasswordReducer'

import ChangePasswordReducer from './ChangePassword/ChangePasswordReducer'

import ForgotPasswordVerifyOtpReducer from './ForgotPasswordVerifyOTP/ForgotPasswordVerifyOTPReducer'

import ReducerCommentList from './CommentList/ReducerCommentList'

import ReducerComment from './CommentTrendingBlog/ReducerComment'

import ReplyCommentReducer from './ReplyToComment/ReducerReplyToComment'

import UpdateProfileReducer from './UpdateProfile/UpdateProfileReducer'

import uploadCoverPicReducer from './UploadCoverPic/UploadCoverPicReducer'

import makeCustomizeReducer from './MakeCustomize/MakeCustomizeReducer'

import SubscribeReducer from './Subscribe/SubscribeReducer'

import connectReducer from './Connect/ConnectReducer'

import myUserProfileReducer from './MyUserProfile/MyUserProfileReducer'

import ConnectionRequestedListReducer from './ConnectionRequestedList/ConnectionRequestedListReducer'

import searchReducer from './Search/SearchReducer'

import UpdatedMobEmailReducer from './UpdateMob&Email/UpdateMob&EmailReducer'
import VerifyUpdatedDataReducer from './VerifyUpdatedData/VerifyUpdatedDataReducer'

import NotificationReducer from './Notification/NotificationReducer'

import AudioCategoryListReducer from './MusicListByCategory/MusicCategoryListReducer'

import TrendingVideosReducer from './AllTrendingVideos/AllTrendingVideosReducer'
import TrendingPicturesReducer from './AllTrendingPictures/AllTrendingPicturesReducer'
import TrendingBlogsReducer from './AllTrendingBlogs/AllTrendingBlogsReducer'
import TrendingAudiosReducer from './AllTrendingAudios/AllTrendingAudiosReducer'

import ReferralWalletReducer from './ReferralWallet/ReferralWalletReducer'
import ReferralLotteryReducer from './Lottery/LotteryReducer'
import DeleteReducer from './DeleteData/DeleteDataReducer'
import EditVideoReducer from './EditVideo/EditVideoReducer'
import EditAudioReducer from './EditAudio/EditAudioReducer'
import EditBlogReducer from './EditBlog/EditBlogReducer'
import EditPictureReducer from './EditPicture/EditPictureReducer'


import MyUploadedVideosReducer from './MyUploadedVideos/MyUploadedVideosReducer'
import MyUploadedAudioReducer from './MyUploadedAudio/MyUploadedAudioReducer'
import MyUploadedPicturesReducer from './MyUploadedPictures/MyUploadedPicturesReducer'
import MyUploadedBlogReducer from './MyUploadedBlog/MyUploadedBlogReducer'

import AllVideoPageReducer from './AllVideoPage/AllVideoPageReducer'
import VideoRecommendedReducer from './VideoRecommended/VideoRecommendedReducer'

import AllBlogPageReducer from  './AllBlogPage/AllBlogPageReducer'
import BlogRecommendedReducer from './BlogRecommended/BlogRecommendedReducer'

import AllMusicPageReducer from './AllMusicPage/AllMusicPageReducer'

import PictureRecommendedReducer from './PictureRecommended/PictureRecommendedReducer'

import TokenGenerationReducer from './TokenGeneration/TokenGenerationReducer'

import SubscriptionListReducer from './SubscriptionList/SubscriptionListReducer'
import OrderDetailReducer from './OrderDetail/OrderDetailReducer'
import VerifyReferralReducer from './VerifyReferral/VerifyReferralReducer'

import InternshipSubjectsReducer from './InternshipSubject/InternshipSubjectReducer'
import InternshipSubjectsDetailsReducer from './InternshipSubjectDetails/InternshipSubjectDetailsReducer'
import internshipRegisterationReducer from './InternshipRegisteration/InternshipRegisterationReducer'
import OrderDetailInternshipReducer from './OrderDetailInternship/OrderDetailInternshipReducer'
import InternshipRegisterMapReducer from './InternshipRegisterMap/InternshipRegisterMapReducer'

import AddBeneficiaryReducer from './AddBeneficiary/AddBeneficiaryReducer'
import AddUPIReducer from './AddUPI/AddUPIReducer'
import BeneficiaryListReducer from './BeneficiaryList/BeneficiaryListReducer'
import WithdrawReferralAmountReducer from './WithdrawReferralAmount/WithdrawReferralAmountReducer'
import EMIDetailsReducer from './EMIDetail/EMIDetailReducer'

const rootReducer = combineReducers({
    Dashboard: DashboardReducer,
    VideoView : VideoViewPageReducer,
    VideoList: VideoListReducer,
    TopCategoryVideos:VideoPageReducer,
    TrendingVideos: TrendingVideoReducer,
    PictureView: PictureViewPageReducer,
    PicturePage: PicturePageReducer,
    VideoCatList: VideoCategoryListReducer,
    AudioPage: AudioPageReducer,
    AudioItem: AudioItemReducer,
    MusicPageComments: ReducerMusic,
    BlogPage:BlogPageReducer,
    BlogCatPage:BlogCategoryListReducer,
    RecomBlog: ReducerRecommendedBlogs,
    BlogCategories: BlogCategoryReducer,
    UploadedBlog: UploadedBlogReducer,
    TopBloggers: TopBloggersReducer,
    // TopCategoryVideos: TopVideosCategoryReducer,
    PicturePage: PicturePageReducer,
    PictureListByCategory: PictureListByCategoryReducer,
    NewUser: NewUserReducer,
    UserRegistration: UserRegistrationReducer,
    LoginUser: LoginUserReducer,
    FeedPage: FeedPageReducer,
    UserProfile: UserProfileReducer,
    myUserProfile: myUserProfileReducer,
    VideoCategories: VideoCategoriesReducer,
    AudioCategories: AudioCategoriesReducer,
    pictureCategories: pictureCategoriesReducer,
    BlogCategories: BlogCategoriesReducer,
    UploadAudio: UploadAudioReducer,
    UploadVideo: UploadVideoReducer,
    UploadImage: UploadImageReducer,
    UploadBlog: UploadBlogReducer,
    CustomizeFeeds: CustomizeFeedsReducer,
    Report: ReportReducer,
    Like: LikeReducer,
    SendOtp: SendOtpReducer,
    VerifyOtp: VerifyOtpReducer,
    ForgotPassword: ForgotPasswordReducer,
    ChangePassword: ChangePasswordReducer,
    ForgotPasswordVerifyOtp: ForgotPasswordVerifyOtpReducer,
    CommentList: ReducerCommentList,
    Comment: ReducerComment,
    ReplyComment: ReplyCommentReducer,
    UpdateProfile: UpdateProfileReducer,
    uploadCoverPic: uploadCoverPicReducer,
    makeCustomize: makeCustomizeReducer,
    Subscribe: SubscribeReducer,
    connect: connectReducer,
    ConnectionRequestedList: ConnectionRequestedListReducer,
    search: searchReducer,
    UpdatedMobEmail: UpdatedMobEmailReducer,
    VerifyUpdatedData: VerifyUpdatedDataReducer,
    Notification: NotificationReducer, 
    VideoCount: VideoCountReducer,
    AudioCount: AudioCountReducer, 
    AudioCategoryList: AudioCategoryListReducer,
    TrendingVideos: TrendingVideosReducer,
    TrendingPictures: TrendingPicturesReducer,
    TrendingBlogs: TrendingBlogsReducer,
    TrendingAudios   : TrendingAudiosReducer,

    ReferralWallet : ReferralWalletReducer,
    ReferralLottery : ReferralLotteryReducer,
    Delete: DeleteReducer,
    EditVideo : EditVideoReducer,
    EditAudio : EditAudioReducer,
    EditBlog : EditBlogReducer,
    EditPicture : EditPictureReducer,


    MyUploadedVideos: MyUploadedVideosReducer,
    MyUploadedAudio: MyUploadedAudioReducer,
    MyUploadedPictures: MyUploadedPicturesReducer,
    MyUploadedBlog: MyUploadedBlogReducer,

    AllVideoPage: AllVideoPageReducer,
    VideoRecommended: VideoRecommendedReducer,

    AllBlogPage: AllBlogPageReducer,
    BlogRecommended: BlogRecommendedReducer,

    PictureRecommended: PictureRecommendedReducer,

    AllMusicPage: AllMusicPageReducer,

    TokenGeneration: TokenGenerationReducer,

    SubscriptionList: SubscriptionListReducer,
    OrderDetail: OrderDetailReducer,
    VerifyReferral: VerifyReferralReducer,

    InternshipSubjects: InternshipSubjectsReducer,
    InternshipSubjectsDetails: InternshipSubjectsDetailsReducer,
    internshipRegisteration: internshipRegisterationReducer,
    OrderDetailInternship: OrderDetailInternshipReducer,
    InternshipRegisterMap: InternshipRegisterMapReducer,
    AddBeneficiary: AddBeneficiaryReducer,
    AddUPI: AddUPIReducer,
    BeneficiaryList: BeneficiaryListReducer,
    WithdrawReferralAmount: WithdrawReferralAmountReducer,

    EMIDetail: EMIDetailsReducer
})


export default rootReducer