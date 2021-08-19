import React from 'react'
import { connect } from 'react-redux'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import SearchData from './SearchData'

import { searchData } from '../../redux/Search/SearchActions'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'// fetch other users profile



const Search = (props) => {
    // console.log('bvbvbvbvbvqwerty', props.searchPage.search.searchApi.search)
    return (
        <div>
            <Sidebar />
            <Navbar /> 
            <div  style={{ marginLeft: '5vw', marginTop: '11vh', width: '95.8%'}}>
                <SearchData searchData={props.searchPage.search.searchApi.search} {...props} />
            </div>
        </div>
    )
}

// export default Search

const mapStateToProps = (state) => {
    // console.log('state from search page...', state);
    return{
        searchPage: state
    }
}
const mapDispatchToProps = dispatch => {
    return {

        dataSearch: (data) => dispatch(searchData(data)),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
