import { Card } from "react-bootstrap";
import { formatCurrency } from "../Utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export function StoreItems({ id, name, price, img }: StoreItemProps) {
  return (
    <Card>
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
      </Card.Body>
    </Card>
  );
}
