import { Col, Row } from 'react-bootstrap';
import AppRouter from 'router/AppRouter';
import Header from 'components/layout/Header';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () => {
  return <BrowserRouter>
    <Row className="App h-100 justify-content-center">
      <Row
        className="App-header"
        noGutters
      >
        <Header />
      </Row>

      <Row
        className="h-100 justify-content-center App-content"
      >
        <Col xs="10">
          <AppRouter />
        </Col>
      </Row>
    </Row>
  </BrowserRouter>
}

export default App;
