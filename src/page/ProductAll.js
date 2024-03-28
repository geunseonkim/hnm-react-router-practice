import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]); // UI에 불러주려면 useState!
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get("q") || "";
    //console.log("query???", searchQuery);
    let url = `https://my-json-server.typicode.com/geunseonkim/hnm-react-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{ // api 호출하려면 useEffect!
    getProducts()
  },[query])
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
