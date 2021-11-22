import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const pikey = 'AYhFpbImnSFFHIwxeoq82SNAeF5iDQXX'

    // const categories = ['One Punche Man','Naruto','Arcane']
    const [categories, setCategories] = useState(['Arcane'])
    // let newItem = `Game Of Thrones`;
    // const handleAdd = () => {
    //     setCategories([...categories, newItem])
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories} />
            <hr />

            <ol>
                { 
                    categories.map( (category) => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        /> 
                    ))
                }        
            </ol>
            
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

