import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer" >
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod._id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2} style={{fontSize:"2.5rem"}}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2} style={{fontSize:"2.5rem"}}>₹ {prod.price}</Col>
                <Col md={2} style={{fontSize:"2.5rem"}}>
                  <Rating rating={3} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          _id: prod._id,
                          quantity: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.stock ).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2} style={{fontSize:"2.5rem"}}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="2rem" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary" style={{textAlign:"center"}}>
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <a href="https://buy.stripe.com/test_5kA4iI99wdMMdxK7ss" target="_blank">
        <Button type="button" style={{fontSize:"1.5rem"}} disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
