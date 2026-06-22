import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ChildDemonstration from './pages/ChildDemonstration.jsx'
import ComponentIsolationDemo from './pages/ComponentIsolationDemo.jsx'
import Deferred from './pages/Deferred.jsx'
import Debounce from './pages/Debounce.jsx'
import LazyLoadingDemo from './pages/LazyLoadingDemo.jsx'
import Memoize from './pages/Memoize.jsx'
import MemoizeSort from './pages/MemoizeSort.jsx'
import NonLazyLoadingDemo from './pages/NonLazyLoadingDemo.jsx'
import RenderTrackerDemo from './pages/RenderTrackerDemo.jsx'
import Throttle from './pages/Throttle.jsx'
import Transition from './pages/Transition.jsx'
import Virtualize from './pages/Virtualize.jsx'

const router = createBrowserRouter([
  { path: '/', element: <ChildDemonstration /> },
  { path: '/component_isolation', element: <ComponentIsolationDemo /> },
  { path: '/debounce', element: <Debounce /> },
  { path: '/deferred', element: <Deferred /> },
  { path: '/lazy_loading', element: <LazyLoadingDemo /> },
  { path: '/memoize', element: <Memoize /> },
  { path: '/memoize_sort', element: <MemoizeSort /> },
  { path: '/non_lazy_loading', element: <NonLazyLoadingDemo /> },
  { path: '/render_tracker', element: <RenderTrackerDemo /> },
  { path: '/throttle', element: <Throttle /> },
  { path: '/transition', element: <Transition /> },
  { path: '/virtualize', element: <Virtualize /> },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
