import { useEffect, useState } from "react";
import { getGifsAPI } from "../helpers/getGifsAPI";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState( [] );
    const [isLoading, setisLoading] = useState( true );

    let newImages = [];

    const getImages = async () => {
        newImages = await getGifsAPI( category );
        setImages( newImages );
        setisLoading( false );
    };

    useEffect( () => {
        getImages()
    }, []);

    return {
        images,
        isLoading
    }
}
