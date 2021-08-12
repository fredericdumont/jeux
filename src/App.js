import { Col, Container, Row } from 'react-bootstrap';
import AppRouter from './components/technical/AppRouter';
import Header from './components/layout/Header';

const App = () => {
  return <div>
    <Container className="App">
      <Row className="App-header">
        <Header />
      </Row>

      <Container className="App-content">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </Container>
  </div>;
}

export default App;
