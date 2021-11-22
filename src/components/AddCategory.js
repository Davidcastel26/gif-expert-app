import {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('sub done');
        // we are calling categories

        if( inputValue.trim().length > 2){
            setCategories( categs => [...categs, inputValue ] )
            setinputValue('')
        }

    } 

    return (
        <form onSubmit={ handleSubmit }>  
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;