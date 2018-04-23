import {
    HomePage,
    ProductPage,
    IntroPage,
    ContactPage,
    PricePage,
    WarrantyPage,
    UserLogin,
    UserProfile,
  } from '../containers/pages';
  
  import App from '../containers/App';
  
  const routes = [
    {
      component: App,
      routes: [
        {   
            component: HomePage,
            path: '/',
            rootPage: '/home'
        },
        {
          component: HomePage,
          exact: true,
          path: '/home'
        },
        {
          component: IntroPage,
          exact: true,
          path: '/intro'
        },
        {
          component: ProductPage,
          exact: true,
          path: '/product'
        },
        {
          component: ContactPage,
          exact: true,
          path: '/contact'
        },
        {
          component: PricePage,
          exact: true,
          path: '/price'
        },
        {
          component: WarrantyPage,
          exact: true,
          path: '/warranty'
        },
        {
          component: UserLogin,
          exact: true,
          path: '/login'
        },
        {
          component: UserProfile,
          exact: true,
          path: '/profile'
        },
      ]
    }
  ];
  
  export default routes;
  