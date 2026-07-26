import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory } from "../api/products";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  const [category, setCategory] = useState("");

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () =>
      category ? fetchProductsByCategory(category) : fetchProducts(),
  });

  if (isLoading)
    return <Container className="mt-5">Loading products...</Container>;
  if (isError)
    return <Container className="mt-5">Failed to load products.</Container>;

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Product Catalog</h2>
      <CategoryFilter selected={category} onChange={setCategory} />
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products?.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
