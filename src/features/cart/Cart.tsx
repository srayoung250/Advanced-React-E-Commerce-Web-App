import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromCart, clearCart } from "./cartSlice";
import type { RootState } from "../../app/store";
import { Container, Table, Button, Alert } from "react-bootstrap";

export const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  const handleCheckout = () => {
    dispatch(clearCart());
    setShowConfirm(true);
    setTimeout(() => setShowConfirm(false), 3000);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {showConfirm && (
        <Alert variant="success">
          Checkout successful! Your cart has been cleared.
        </Alert>
      )}

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Count</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>${(item.price * item.count).toFixed(2)}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <p className="mb-1">
                Total items: <strong>{totalCount}</strong>
              </p>
              <p>
                Total price: <strong>${totalPrice.toFixed(2)}</strong>
              </p>
            </div>
            <Button variant="success" size="lg" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};
