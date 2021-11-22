import React, {useState, useEffect} from 'react'
import getGifs from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    // const [count, setCount] = useState(1)

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs( category )
            // .then(imgs => setImages(imgs))
            .then( setImages )
    }, [category])

    

    return (
        <>
            <h3> {category} </h3>
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

export default GifGrid;



// images.map( ({id, title}) =>(
    // <li key={ id}> { title} </li>
// ))

// {/* <h3> { count } </h3> */}
// {/* <button onClick={ () => setCount( count + 1)}></button> */}