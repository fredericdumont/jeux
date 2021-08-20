import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router';
import items from './items';

export const Home = () => {
    const history = useHistory();

    const handleClick = (item) => {
        history.push(item.path);
    }

    return <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="h-100"
    >
        {
            items.map((item, index) => <Grid
                item
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
            </Grid>
            )
        }
    </Grid>
}

export default Home;
