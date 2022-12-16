import React from "react";
import {Container, Row, Col} from "reactstrap";
import Header from './Components/shared/Header/header.component';
import Footer from './Components/shared/Footer/footer.component';
import Register from './Components/Register/register.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
        <Header/>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
        <Register />
        </Col>
      </Row>
      
      <Row>
        <Col>
        <Footer />
        </Col>
      </Row>
      
      
    </Container>
  );
}

export default App;
