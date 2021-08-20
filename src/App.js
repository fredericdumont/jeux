import AppRouter from 'router/AppRouter';
import Header from 'components/layout/Header';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Col, Row } from 'components/layout/Grid';

const App = () => {
  return <BrowserRouter>
    <Row
      className="App h-100"
      justifyContent="center"
    >
      <Col xs={12}>
        <Header />
      </Col>

      <Col
        xs={12}
        container
        justifyContent="center"
        className="App-content h-100"
      >
        <Col
          xs={12}
          sm={10}
        >
          <AppRouter />
        </Col>
      </Col>

    </Row>
  </BrowserRouter>
}

export default App;
