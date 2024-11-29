import Sidebar from './sidebar'
import Header from './header'

import './default-layout.scss'
export interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className='default-layout-wrapper'>
      <div className='sidebar-wrapper'>
        <Sidebar />
      </div>
      <main className='main'>
        <Header />

        <div className='content'>{children}</div>
      </main>
    </div>
  )
}

export default DefaultLayout
