import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import products from "../data/products.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "./../Utilities/FormatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        alt={item.name}
        style={{ width: "150px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          <strong>{item.name}</strong>{" "}
          {quantity > 1 && <span className="text-muted">x{quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outlined-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
