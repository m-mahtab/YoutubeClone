import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/Constant'
import SearchBox from './SearchBox'

const Navbar = () => (

    <Stack direction="row"  p={2} className='nav'>
        <Link to='/' className='logo'> 
            <img src={logo} alt='logo'/>
        </Link>
        <SearchBox/>
    </Stack>
)


export default Navbar