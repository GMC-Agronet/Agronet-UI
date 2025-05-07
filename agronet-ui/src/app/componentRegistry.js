// export const COMPONENTS = {
//   users: React.lazy(() => import('./demo/users')),
//   home: React.lazy(() => import('./home')),
// };

import Users from './demo/page';
import Home from './home/page';

export const COMPONENTS = {
  users: Users,
  home: Home,
};

// const requireContext = require.context('./components', false, /\.js$/);

// export const COMPONENTS = {};

// requireContext.keys().forEach((key) => {
//   const componentName = key.replace('./', '').replace('.js', '');
//   COMPONENTS[componentName] = React.lazy(
//     () => import(`./components/${componentName}`),
//   );
// });
