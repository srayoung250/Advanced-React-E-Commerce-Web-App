import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import type { RootState } from "../app/store";

export const NavBar = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Shop
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/cart">
            Cart <Badge bg="primary">{totalCount}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
