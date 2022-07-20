import React from 'react';

export const DeleteCategory = ({ onDeleteCategory }) => {
  return (
    <div className='eliminar'>
      <button onClick={ onDeleteCategory }>Eliminar</button>
    </div>
  )
}