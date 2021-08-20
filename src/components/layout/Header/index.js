import { Grid, IconButton } from '@material-ui/core';
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

    return <Grid container>
        {
            !isHomePage() && <Grid
                item
                xs="auto"
            >
                <IconButton
                    size="medium"
                    className="p-2"
                    onClick={handleClick}
                >
                    <BiArrowBack />
                </IconButton>
            </Grid>
        }
    </Grid >
};

export default Header;
