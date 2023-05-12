import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img style={{height:"20rem"}} variant="top" src={prod.image} alt={prod.name} />
        <Card.Body style={{textAlign:"center"}}>
          <Card.Title style={{fontSize:"2rem"}}>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10,fontSize:"2rem" }}>
            <span>₹ {prod.price}</span>
            {(prod.price < 100 )? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={4} />
          </Card.Subtitle>
          {cart.some((p) => p._id === prod._id) ? (
            <Button style={{fontSize:"1.3rem"}}
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button style={{fontSize:"1.3rem"}}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={prod.Stock === 0}
            >
              { (prod.Stock === 0) ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
