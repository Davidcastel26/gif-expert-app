import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('testing the component add category', () => {

    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={setCategories} />)

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

})