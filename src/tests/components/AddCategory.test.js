import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('testing the component add category', () => {

    const setCategories = jest.fn();
                        //jest.fn will be our arrow function
    let wrapper = shallow( <AddCategory setCategories={setCategories} />)

    beforeEach( () => {
        // this is something that we use in order to spot anythin that we could run before 
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('should show the right path', () =>{

        expect( wrapper ).toMatchSnapshot();

    })

    test('should change the text box', () =>{

        const input = wrapper.find('input');
        const value = 'Hello world';
        // input.simulate('click')
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value )
    })

    test('should not post the info on submit', ()=>{
    
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        ///is the same than an arrow function || preventDefault: ()=>{}

        expect( setCategories ).not.toHaveBeenCalled()

    })

    test('should call the set categories and clean the text box area', () => {   
        
        const value = 'Hello world';
        
        //simulate the imput change
        wrapper.find('input').simulate('change', {target: { value }});

        //simulate the submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        //set categories must be called
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //if we would like to check if its a function
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
         
        //thie input should be empty
        expect( wrapper.find('input').prop('value') ).toBe('')

    })

})