import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@material-ui/core'


function SearchButton(props) {
    return (
        <Button variant="contained" style={{ backgroundColor: '#febd69 ' }}>
            <SearchIcon style={{ color: (props.i_color ? props.i_color : 'black') }} />
        </Button>
    )
}

export default SearchButton

