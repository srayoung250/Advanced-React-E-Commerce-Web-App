import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Card, Button } from "react-bootstrap";
import type { Product } from "../types/product";

const FALLBACK_IMAGE = "https://via.placeholder.com/200";

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
        <Card.Text className="text-muted small">{product.category}</Card.Text>
        <Card.Text className="small">
          {product.description.slice(0, 80)}...
        </Card.Text>
        <Card.Text>
          ⭐ {product.rating.rate} ({product.rating.count})
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>${product.price}</strong>
          <Button
            size="sm"
            variant="primary"
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                }),
              )
            }
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
