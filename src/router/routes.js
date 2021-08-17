import Home from 'components/layout/Home';
import QwintoDraw from 'components/games/qwinto/QwintoDraw';
import QwintoBoard from 'components/games/qwinto/QwintoBoard';

const qwinto = [
    {
        component: QwintoBoard,
        path: '/qwinto'
    },
    {
        component: QwintoDraw,
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
