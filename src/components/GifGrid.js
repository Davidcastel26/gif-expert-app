import React, {useState, useEffect} from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    // const [count, setCount] = useState(1)

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs()
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=AYhFpbImnSFFHIwxeoq82SNAeF5iDQXX'

        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs )
    }

    return (
        <div className='card-grid'>
            <h3> {category} </h3>

            {
                images.map( img =>(
                    <GifGridItem 
                        key={ img.id}
                        {...img}
                    /> 
                ))
            }

            {/* <h3> { count } </h3> */}
            {/* <button onClick={ () => setCount( count + 1)}></button> */}
        </div>
    )
}

export default GifGrid;



// images.map( ({id, title}) =>(
    // <li key={ id}> { title} </li>
// ))