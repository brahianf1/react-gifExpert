import { GifItem, LoadingMessage } from "../components";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <LoadingMessage isLoading={ isLoading } />
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map( ({id, title, url}) => (
                        <GifItem 
                            key={ id }
                            title={ title }
                            url={ url }
                        />
                    ))
                }
            </div>
        </>
    )
}
