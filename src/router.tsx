import { createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/index.tsx';
const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);
export default router;