import React from 'react'
import PropTypes from 'prop-types'

function GifGridItem({ title, url}) {

    // console.log({id, title,url});

    return (
        <div className='card animate__animated animate__fadeIn'>
            {/* {img.title} */}
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem;

