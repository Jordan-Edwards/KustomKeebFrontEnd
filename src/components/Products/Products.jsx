import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg' },
    { id: 1, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg' },
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
            </Grid>
        </main>
    )
}

export default Products;