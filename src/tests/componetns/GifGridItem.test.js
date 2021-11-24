import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'


describe('Test about Gif Grid Item component', ()=>{

    const title = 'a title';
    const url = 'https://localhost/algo.jpg' 
    const wrapper = shallow( <GifGridItem title={title} url={url}/> )


    test('should show the component in the right way', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test("should have a <p> with the title in it",()=>{

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title)

    })

    test('should get the img equal to url and alt from the props', () => {
        
        const img = wrapper.find('img')
        /*console.log(img.html());*/    //<img src="https://localhost/algo.jpg" alt="a title"/>
        /*console.log(img.props().src); */ // `https://localhost/algo.jpg`
        // console.log( img.prop('src')); same that the other one
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    })
    
    test('should have animate_fadeIn', () => {
        
        const div = wrapper.find('div');
        // console.log(div.prop('className')); card animate__animated animate__fadeIn
        //animate__fadeIn
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe(true)
        expect( className.includes('animate__fadeIn') ).not.toBe(false)


    })
    

})