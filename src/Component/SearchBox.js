import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const ContactList = () => {
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="Enter name" />
            </Col>
            <Col lg={2}>
            <Button variant="primary">찾기</Button>
            </Col>
        </Row>
    );
};

export default ContactList;
