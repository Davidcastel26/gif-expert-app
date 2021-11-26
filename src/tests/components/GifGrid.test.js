// react imports 
import React from 'react';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
//testing imports
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
//we are going to suppos a call from that file and get/control the informaciont that file will answer/ give us
jest.mock('../../hooks/useFetchGifs')

describe('testing the Gif Grid component', () => {

    const category = 'jest.fn';
    let wrapper = shallow( < GifGrid category={category}/> )

    test('should show the right path', ()=>{
        //we need to fake that data like we are doint donw below
        //the value have the obj
        //check the useFetch Gifs into the directory hooks
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })

        expect( wrapper ).toMatchSnapshot();
    })

    test('should show items when we load images useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything/thing.jpg',
            title: 'Anything'
        },{
            id: '123',
            url: 'https://localhost/anything/thing.jpg',
            title: 'Anything'
        }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( < GifGrid category={category}/> )
        
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists()).toBe(false)
        expect( wrapper.find('GifGridItem').length).toBe( gifs.length )
    })
    

})