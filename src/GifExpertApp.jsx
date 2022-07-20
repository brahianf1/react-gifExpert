import { useState } from "react";
import { AddCategory, DeleteCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const agregarCategoria = (newCategory) => {
        if( categories.includes( newCategory.toLowerCase().trim() ) ) return;
        setCategories([newCategory, ...categories]);
    };

    const quitarCategoria = () => {
        const cat = [...categories];
        cat.pop();
        setCategories(cat);
    };

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={ newCategory => agregarCategoria(newCategory) }/>
        {
            categories.map( category => (
                <GifGrid
                    key={ category }
                    category={ category }/>
            ))
        }
        <DeleteCategory onDeleteCategory= { quitarCategoria } />
    </>
  )
}
