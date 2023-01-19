import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
        <input type='search' placeholder='Search a product'/>
        <nav>
            <Link to='feature'>Featured</Link>
            <Link to='new'>   New</Link>
        </nav>
        <Outlet/>
        {/* Outlet help the parent component to render the child component  */}
    </div>
  )
}
