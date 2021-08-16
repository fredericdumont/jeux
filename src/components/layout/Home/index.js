import { Button } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import items from './items';

export const Home = () => {
    const history = useHistory();

    const handleClick = (item) => {
        history.push(item.path);
    }

    return <Row className="h-100 mt-2 justify-content-center align-items-center ">
        {
            items.map((item, index) => <Col
                key={index}
                xs="auto"
                style={{
                    height: 'auto'
                }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    className="text-capitalize"
                    size="large"
                    onClick={() => handleClick(item)}
                >
                    {item.label}
                </Button>
            </Col>
            )
        }

    </Row>
}

export default Home;
