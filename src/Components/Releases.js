import React from 'react'
import {Product} from './Product'
import {database} from './database'


const Releases = () => {
    return (
        <>  <h1>Releases</h1>
            {database.map(item => (
                <Product
                name={item.name}
                price={item.price}
                key={item.id}
                img={item.img}
                desc={item.desc}
                />
            ))}
        </>
    )
}

export default Releases