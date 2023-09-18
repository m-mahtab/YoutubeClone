import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Typography, Box, Stack } from "@mui/material"
import {Video} from './Video'
import { CheckCircle } from "@mui/icons-material"
import { fetchFromapi } from "../utils/fetchFromapi"
import ReactPlayer from "react-player"



const VideoDetails = () => {
const {id} = useParams();
const [videoDetail, setVideoDetail] = useState()

useEffect(()=>{
  fetchFromapi(`videos?part=snippet,statistics&id=${id}`)
  .then((data)=>setVideoDetail(data.items[0]))
},[id])

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs : 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width : '100%', position : 'sticky', top: '86px'}}>
            <ReactPlayer url={`/https://www.youtube.com/watch?v=${id}` } className = "react-player" controls/>
            <Typography color="'#fff" variant="h5" fontWeight="bold" p = {2}>         
            </Typography>

          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails