import { Route, Switch } from 'react-router-dom'
import { routes } from '../routes'

export const AppRouter = () => {
    return <Switch>
        {
            routes.map((route, index) => {
                return <Route
                    key={index}
                    component={route.component}
                    path={route.path}
                    exact={route.exact ?? true}
                />;
            })
        }
    </Switch>
}

export default AppRouter;
