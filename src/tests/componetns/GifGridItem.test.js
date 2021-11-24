import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'


describe('Test about Gif Grid Item component', ()=>{

    const title = 'a title';
    const url = 'https://localhost/algo.jpg' 

    test('should show the component in the right way', () => {

        const wrapper = shallow( <GifGridItem title={title} url={url}/> )
        expect( wrapper ).toMatchSnapshot();

    })


})