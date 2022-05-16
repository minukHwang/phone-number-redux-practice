import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./Component/ContactForm";
import ContactList from "./Component/ContactList";

function App() {
    return (
        <Container className="App">
            <Row className="title">
                <h1>Phone Book</h1>
            </Row>
            <Row className="input-area">
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                    <ContactList />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
