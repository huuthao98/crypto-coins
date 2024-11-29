import { Outlet } from 'react-router-dom'
import './styles/auth-layout-view.scss'

export interface AuthLayoutViewProps {}

const AuthLayoutView: React.FC<AuthLayoutViewProps> = () => {
  return (
    <div className='auth-wrapper'>
      <Outlet />
    </div>
  )
}

export default AuthLayoutView
