import Home from '../containers/Home';
import About from '../containers/About';

const topRoutes = [
    {
    path: '/',
    isExact: true,
    name: 'Home',
    component: Home
    },
    {
        path: '/about-us',
        isExact: true,
        name: 'About',
        component: About
    }
];

export default topRoutes;