import { createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/index.tsx';
import Home from '@/pages/Home/index.tsx';
import Message from './pages/Message/index.tsx';
import { AI } from './pages/AI/index.tsx';
const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'message',
        element: <Message />,
      },
      {
        path: 'ai',
        element: <AI />,
      },
    ]
  },
]);
export default router;