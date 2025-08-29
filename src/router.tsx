import { createBrowserRouter } from 'react-router-dom'

import App from './router/App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

export default Router