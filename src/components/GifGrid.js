import React /*, {useState, useEffect}*/ from 'react'
import PropTypes from 'prop-types';

import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>

            { loading && <p className='animate__animated animate__flash'>Loading at this moment bro...</p>}

            <div className='card-grid'>
                {
                    images.map( img =>(
                        <GifGridItem 
                        key={ img.id}
                        {...img}
                        /> 
                    ))
                }
            </div>
        </>
    )
}

 GifGrid.propTypes = {
     category: PropTypes.string.isRequired,
 }

export default GifGrid;









// import getGifs from '../helpers/getGifs'

    // const [count, setCount] = useState(1)
    // console.log(data, loading);

/*const [images, setImages] = useState([]) */


// useEffect( () => {
    // getGifs( category )
        // .then(imgs => setImages(imgs))
        // .then( setImages )
// }, [category])


// images.map( ({id, title}) =>(
    // <li key={ id}> { title} </li>
// ))

// {/* <h3> { count } </h3> */}
// {/* <button onClick={ () => setCount( count + 1)}></button> */}