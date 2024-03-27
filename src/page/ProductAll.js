import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]); //ui에 불러주려면 useState!
  const getProducts = async() => {
    let url = `http://localhost:4000/products`
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{ //api 호출하려면 useEffect!
    getProducts()
  },[])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (<Col lg={3}><ProductCard item={menu}/></Col>))}
        </Row>
      </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
