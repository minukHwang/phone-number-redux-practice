import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
    const [searchItem, setSearchItem] = useState()
    const dispatch = useDispatch()
    const search = () => {
        dispatch({type:"SEARCH_ITEM",payload:{searchItem}})
    }
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="Enter name" onChange={(event)=>setSearchItem(event.target.value)} />
            </Col>
            <Col lg={2}>
            <Button variant="primary" onClick={search}>찾기</Button>
            </Col>
        </Row>
    );
};

export default SearchBox;
