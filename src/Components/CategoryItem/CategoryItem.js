import React from 'react'

function CategoryItem({ category }) {
    const { imageUrl, title } = category;
  return (
    <div  className='category-container'>
        <img className='background-image' src={imageUrl} alt='' />
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
      </div>
  )
}

export default CategoryItem