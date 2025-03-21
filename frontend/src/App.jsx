import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './routes/listPage/listPage.jsx';
import Layout from './routes/layout/Layout.jsx';
import HomePage from './routes/homePage/homePage.jsx';
import SinglePage from './routes/singlePage/singlePage.jsx';
import ProfilePage from './routes/profilePage/profilePage.jsx';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;