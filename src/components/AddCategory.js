import {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('-')

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sub done');
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


export default AddCategory;