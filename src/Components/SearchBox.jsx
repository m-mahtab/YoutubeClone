
import {Paper, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBox = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }


  return (
    <Paper component="form" onSubmit={() => {handleSubmit()}} 
    sx={{
        borderRadius : 20, 
        border : '1px solid #e3e3e3', 
        pl: 2,
        mr : {sm : 5} }}>
        <input className="search-bar" placeholder="Search..." 
        value = {searchTerm}
      
        onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type="submit" sx={{p: "10px", color: 'red' }}>
            <SearchIcon/>
        </IconButton>

    </Paper>
  )
}

export default SearchBox