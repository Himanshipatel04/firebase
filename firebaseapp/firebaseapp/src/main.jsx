// index.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import FirebaseProvider from './context/Firebase';
import Data from './Data.jsx';

createRoot(document.getElementById('root')).render(
  <FirebaseProvider>
    <Data />
  </FirebaseProvider>,
);
