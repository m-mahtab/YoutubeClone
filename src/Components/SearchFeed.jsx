
import { Box, Typography } from '@mui/material'
import { Video } from '../Components'
import { fetchFromapi } from '../utils/fetchFromapi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromapi(`/search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4'
          fontWeight="bold" mb={2} sx={{ color: 'white' }}>Search Results for : 
          <span className='category-title'>{searchTerm} </span>Videos
        </Typography>
        <Video videos={videos} />
      </Box>
  )
}

export default SearchFeed