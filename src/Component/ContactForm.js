import React from "react";
import {Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
    const [name,setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const dispatch = useDispatch()
    const addContact = (event) => {
        event.preventDefault()
        console.log(name, phoneNumber)
        dispatch({type: "ADD_CONTACT", payload:{name,phoneNumber}})

    }
    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(event)=>setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" onChange={(event)=>setPhoneNumber(event.target.value)} />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                ></Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
