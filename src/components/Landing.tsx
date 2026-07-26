import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import heroImage from "../assets/hero.png";

export const Landing = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "80vh" }}
    >
      <img
        src={heroImage}
        alt="Store hero"
        style={{ maxWidth: "400px", width: "100%" }}
        className="mb-4"
      />
      <h1 className="mb-3 text-primary">Welcome to the Updated cyberStore</h1>
      <p className="text-muted mb-4" style={{ maxWidth: "500px" }}>
        Browse our full catalog of products, filter by category, and add your
        favorites to the cart — all in one place.
      </p>
      <Button as={Link as any} to="/shop" size="lg" variant="primary">
        Shop Now
      </Button>
    </Container>
  );
};
