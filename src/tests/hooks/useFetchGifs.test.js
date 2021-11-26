import useFetchGifs from "../../hooks/useFetchGifs"
// jest 
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'

describe('testing in the hook useFetchGifs', () => {
    
    test('should return the initial state', ()=>{

        const {result} = renderHook( () => useFetchGifs('Arcane') )
        // console.log(resp);

        const {data, loading} = result.current;

        // const {data, loading} = useFetchGifs( "category" )
        // console.log(data, loading); // [] , true

        expect( data ).toEqual([]);
        expect( loading ).toBe(true)
    })

})