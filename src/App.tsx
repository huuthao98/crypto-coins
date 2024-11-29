import { ConfigProvider, theme } from 'antd'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import './styles/global-style.scss'
import './styles/reset.scss'
import './styles/variables.scss'
import { useEffect } from 'react'
import { cn } from "./text/cn";
import { en } from "./text/en";
import { vi } from "./text/vi";
import { DefaultLayout } from '~components/layout'

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
    cn: {
      translation: cn,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontSize: 16
        }
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <div className='App'>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>

        <Toaster />
      </div>
    </ConfigProvider>
  )
}

export default App
