import useFetchGifs from "../../hooks/useFetchGifs"
// jest 
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'

describe('testing in the hook useFetchGifs', () => {
    
    test('should return the initial state', async()=>{

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Arcane') )
        // console.log(resp);

        const {data, loading} = result.current;

        // const {data, loading} = useFetchGifs( "category" )
        // console.log(data, loading); // [] , true

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true)
    })

    test('should return an array of imgs and loading on false', async() => {
        
        //run the useFetch
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Arcane' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10)
        expect( loading ).toBe(false)

    })
    

})

//check the link to test a coustom hook
//https://react-hooks-testing-library.com/#when-not-to-use-this-libr 