import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faImage,
  faFont,
  faPencil,
  faFilter,
  faTrash,
  faDownload,
  faCircle,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCircle, faSquare, faImage, faFont, faPencil, faFilter, faTrash, faDownload);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
