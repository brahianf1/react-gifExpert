export const getGifsAPI = async ( category ) => {
    const apiKey = '4dWnsBfBL25opeZrA9nPyaUFNclHHsoK';
    const limit = 20;
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;

    const resp = await fetch( URL );
    const { data } = await resp.json();

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_downsampled.webp
        }
    ) );
    return gifs;
};