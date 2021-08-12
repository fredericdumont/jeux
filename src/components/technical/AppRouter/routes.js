import Home from 'components/layout/Home';
import Dices from 'components/games/qwinto/Dices';

const qwinto = [
    {
        component: Dices,
        path: '/qwinto/dices',
    }
];

export const routes = [
    ...qwinto,
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Home,
        path: '**',
        exact: true
    }
];
