import React from 'react'
import Category from './category/Category'
import SearchBox from './searchBox/searchBox'
import SearchButton from './searchButton/SearchButton'
import { Container } from './style'

function SearchElem() {
    return (
        <Container>
            <Category />
            <SearchBox />
            <SearchButton />

        </Container>
    )
}

export default SearchElem

