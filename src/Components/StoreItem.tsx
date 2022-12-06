import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../Utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export function StoreItems({ id, name, price, img }: StoreItemProps) {
  const quantity = 0;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="outline-secondary" className="rounded-0">
                  -
                </Button>
                <span className="px-3 fs-3">{quantity}</span>
                <Button variant="outline-secondary" className="rounded-0">
                  +
                </Button>
              </div>
              <Button variant="danger" className="w-100">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
