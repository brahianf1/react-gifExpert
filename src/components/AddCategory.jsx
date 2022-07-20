import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        const REGEXP = /^$/;
        if( REGEXP.test( inputValue ) ) return;
        onNewCategory(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button type='submit'>Buscar Gifs</button>
        </form>
    )
}
