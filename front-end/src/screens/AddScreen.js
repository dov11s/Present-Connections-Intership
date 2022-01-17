import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import services from "../services";

const AddScreen = () => {
  const navigate = useNavigate();
  const [title, setPostTitle] = useState("");
  const [body, setPostBody] = useState("");

  const handleSumbit = async () => {
    try {
      if (!title || !body) {
        alert("Post title and body is required!");
        return;
      }
      const post = {
        title,
        body,
      };
      const resp = await services.addPost(post);

      console.log(resp);
      alert("Post added successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Add post failed!");
    }
  };

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Post's Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title ..."
                onChange={(e) => setPostTitle(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Post's Body</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post body ...."
                onChange={(e) => setPostBody(e.target.value)}
                value={body}
              />
            </Form.Group>

            <Form.Group>
              <Button
                className="tarpas"
                variant="primary"
                onClick={handleSumbit}
              >
                Add
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddScreen;
