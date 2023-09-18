import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelCard, Video } from './'
import { fetchFromapi } from '../utils/fetchFromapi'

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromapi(`/channel?part=snippet=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromapi(`/search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(198,12,187,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-130px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Video videos={videos} />  
      </Box>
    </Box>
  )
}

export default ChannelDetails