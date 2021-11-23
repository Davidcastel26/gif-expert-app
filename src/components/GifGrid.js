import React /*, {useState, useEffect}*/ from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>

            { loading && <p>Loading at this moment bro...</p>}

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