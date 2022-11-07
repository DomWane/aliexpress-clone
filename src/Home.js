import React, { useState, useEffect } from 'react'
import Header from './Header';
import "./Home.css"
import Product from './Product';
import { db } from './firebase'
import { collection, getDocs } from '@firebase/firestore';

function Home() {

    const [products, setProducts] = useState([])
    const productsCollectionRef = collection(db, "products")
    const [result, setResult] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setResult(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getProducts();
    }, []);

    const filterResult = (catItem) => {
        const result = products.filter((curDate) => {
            return curDate.category === catItem
        });
        if(catItem == products) {
            setResult(products)
        } else setResult(result)
    }

  return (
    <div>
        <Header data={products} parentStateSetter={setResult} />
        <div className='home'>
            <div className='home__container'>
                <div className='home__categories'>
                    <span onClick={() => filterResult(products)}>All</span>
                    <span onClick={() => filterResult('fashion')}>Fashion</span>
                    <span onClick={() => filterResult('electronics')}>Electronics</span>
                    <span onClick={() => filterResult('jewelry')}>Jewelry</span>
                </div>
                
{/*                <div className='home__row'>
                    {firstRow.map((product) => {
                        return (
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price} 
                                image={product.image}
                                rating={product.rating}
                            />
                        )                   
                    })}
                </div> 
                <div className='home__row'>
                    {secondRow.map((product) => {
                        return (
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price} 
                                image={product.image}
                                rating={product.rating}
                            />
                        )                   
                    })}
                </div> */}
                
                <div className='home__grid'>
                    {result.map((product) => {
                            return (
                                <Product className="product"
                                    id={product.id}
                                    title={product.title}
                                    price={product.price} 
                                    image={product.image}
                                    rating={product.rating}
                                />
                            )                   
                        })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;