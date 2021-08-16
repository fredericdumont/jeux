import { Col, Container, Row } from 'react-bootstrap';
import AppRouter from 'router/AppRouter';
import Header from 'components/layout/Header';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () => {
  return <BrowserRouter>
    <Container className="App h-100">
      <Row
        className="App-header"
        noGutters
      >
        <Header />
      </Row>

      <Container className="App-content h-75">
        <Row className="h-100">
          <Col>
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </Container>
  </BrowserRouter>
}

export default App;
