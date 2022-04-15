import { TextField } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {PAGES, BLOG_DETAIL} from '../../../helpers/api'

const SearchBar = ({contentSearch,...props}) => {


    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(`${PAGES}?type=${BLOG_DETAIL}&search=${searchInput}`)
    })


    const searchItems = () => {
        setSearchInput(searchInput)
    }

    return <TextField fullWidth placeholder='Enter your keywords' onChange={(e) => searchItems(e.target.value)}></TextField>
}

export default SearchBar