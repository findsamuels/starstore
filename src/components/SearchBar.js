import React, { useState } from 'react'
import Form from './Form/Form'
import Input from './Form/Input'
import classes from './SearchBar.module.scss'

const SearchBar = props => {
    const [searchText, dispatch] =useState('')

    const inputSelectHandler = (event) => {
dispatch(event.target.value)
console.log(searchText
    )
    }

    return (
        <Form className={classes.Form}>
            <Input placeholder='search...' name='search' type='text' value={searchText} onChange={inputSelectHandler}/>
        </Form>
    )
}

export default SearchBar
