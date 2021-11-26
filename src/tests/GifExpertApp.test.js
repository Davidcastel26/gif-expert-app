//react imports
import React from 'react';
import GifExpertApp from '../GifExpertApp';

// jest imports 
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('testing the primary react component', () => {

    const wrapper = shallow( <GifExpertApp /> )

    test('should show the right path', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should show a list of categories', () => {

        const categoriesH = ['Arcane'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categoriesH}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categoriesH.length )

    })

})
