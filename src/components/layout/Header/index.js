import { IconButton } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router';

export const Header = () => {
    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {
        history.push('/');
    }

    const isHomePage = () => {
        return location.pathname === '/';
    }

    return <Row className="mt-1">
        {
            !isHomePage() && <Col>
                <IconButton
                    size="medium"
                    className="p-2"
                    onClick={handleClick}
                >
                    <BiArrowBack />
                </IconButton>
            </Col>
        }
    </Row >
};

export default Header;
