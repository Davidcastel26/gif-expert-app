import {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value)

        console.log('handleinputchange called');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('sub done');
        // we are calling categories

        console.log('hangleSumit', inputValue);

        if( inputValue.trim().length > 2){
            setCategories( categs => [ inputValue, ...categs ] )
            setinputValue('')
        }

    } 

    return (
        <form onSubmit={ handleSubmit }> 
            <p> { inputValue} </p> 
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