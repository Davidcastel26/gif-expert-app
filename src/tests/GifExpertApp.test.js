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

})
