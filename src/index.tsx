import { Provider } from 'react-redux'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from '~store'
import ManagementLayout from '~components/layout/child-layout/account-layout/account-layout'

import AuthLayoutView from './pages/auth/auth-layout-view'
import LoginView from './pages/auth/login/login-view'
import { HomeView } from './pages/home'
import { Wishlist } from './pages/wishlist'
import AccountInformation from './pages/account-information/account-information-view'
import AccountSetting from './pages/account-setting/account-setting-view'
import AccountSecurity from './pages/account-security/account-security-view'

const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayoutView />,
    children: [
      {
        path: 'login',
        element: <LoginView />
      }
    ]
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomeView />
      },
      {
        path: 'account',
        element: <ManagementLayout />,
        children:[
          {
            path: "setting",
            element: <AccountSetting/>,
          },
          {
            path: "information",
            element: <AccountInformation />,
          },
          {
            path: 'wishlist',
            element: <Wishlist />
          },
          {
            path: 'security',
            element: <AccountSecurity />
          },
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
