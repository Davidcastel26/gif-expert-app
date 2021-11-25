import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import React from 'react';

describe('testing the component add category', () => {

    const setCategories = () => {};

    test('should show the right path', () =>{

        const wrapper = shallow( <AddCategory setCategories={setCategories} />)

        expect( wrapper ).toMatchSnapshot();

    })

})