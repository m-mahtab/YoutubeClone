
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Video } from '../Components'
import { fetchFromapi } from '../utils/fetchFromapi'
import { useEffect, useState } from 'react'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromapi(`/search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto' }, px: { sx: 0, md: 2 } }} className="feedbox">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ color: '#fff', mt: 1.5 }}>
          Copyright Maryam Mahtab Media

        </Typography>

      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4'
          fontWeight="bold" mb={2} sx={{ color: 'white' }}>{selectedCategory}
          <span className='category-title'> Videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>


    </Stack>
  )
}

export default Feed