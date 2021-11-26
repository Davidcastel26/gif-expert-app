// react imports 
import React from 'react';
import GifGrid from '../../components/GifGrid';
//testing imports
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('testing the Gif Grid component', () => {

    const category = 'jest.fn';
    let wrapper = shallow( < GifGrid category={category}/> )

    test('should show the right path', ()=>{
        expect( wrapper ).toMatchSnapshot();
    })

})