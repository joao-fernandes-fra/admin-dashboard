import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import OptionsBar from './components/Optionsbar'
import { sidebarOptions } from './components/SideBar/sidebar.options'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: sidebarOptions.map(options => {
      return {
        path: options.path,
        element: <OptionsBar title={options.title}
          path={options.path}
          optionsEnabled={options.optionsEnabled}
          tooltip={options.tooltip}
          icon={options.icon}
          topics={options.topics}
          key={options.title}/>,
      }
    })
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
