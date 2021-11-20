import React, {useState} from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const pikey = 'AYhFpbImnSFFHIwxeoq82SNAeF5iDQXX'

    // const categories = ['One Punche Man','Naruto','Arcane']
    const [categories, setCategories] = useState(['One Punche Man','Naruto','Arcane'])

    const handleAdd = () => {
        let newItem = `Game Of Thrones`;
        
        setCategories([...categories, newItem])
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <button onClick={handleAdd}>Add</button>

            <ol>
                { 
                    categories.map( (category) => {
                        return <li key={category}> { category } </li>
                    })
                }        
            </ol>
            
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

