import React, { useEffect } from 'react';

const Detail = ({location, history}) => {
    useEffect(() => {
        if (location.state === undefined) {
            history.push('/')
        }
    })

    if (location.state) {
        return (
            <>
                <h1>{location.state.title}</h1>
                <p>{location.state.detail}</p>
            </>     
    )
    } else {
        return null
    }
    
}

export default Detail;