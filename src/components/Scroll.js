import React from 'react'

const Scroll = (props) => {
    // console.log(props)
    return (
        // props.children
        <div style={ 
            {overflowY: 'scroll', 
            border: '5px solid black', 
            borderImage: 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1', 
            height: '800px' }
            }>
            {props.children}
        </div>
    )
}

export default Scroll

