import React, { useState, useEffect } from 'react';

const ProductData = ({id}) => {
  console.log(id);
  const[products,setProducts]= useState([]);

  useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("http://localhost:8080/products")
    .then(async(response) => {    
      if (response.ok) {
        setProducts(await response.json());
      } 
    })
    .catch((err) => {
      console.log(err.message);
    });
  },[])

  return  products;
}

export default ProductData;

