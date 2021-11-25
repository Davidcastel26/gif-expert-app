import getGifs from "../../helpers/getGifs"

describe( 'testing get gifs into helpers directory Fetch', () => {

    test('should bring ten elements', async() => {

        const gifs = await getGifs('One Punch');

        //check the api into the limit section
        expect( gifs.length).toBe(10)

    })

    test('should bring ten elements from the API', async() => {

        const gifs = await getGifs('');

        expect( gifs.length).toBe( 0 )

    })

})