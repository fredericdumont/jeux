import Home from 'components/layout/Home';
import Dices from 'components/games/qwinto/Dices';
import QwintoBoard from 'components/games/qwinto/QwintoBoard';

const qwinto = [
    {
        component: QwintoBoard,
        path: '/qwinto'
    },
    {
        component: Dices,
        path: '/qwinto/draw'
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
