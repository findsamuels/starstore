import React, { useState } from "react"



export const useForm = () => {

    const [inputData, dispatch] = useState('')


const inputChangeHandler = (event) => {

    dispatch(event.target.value)
  
}

    return {
inputChangeHandler,
inputData
    }
}