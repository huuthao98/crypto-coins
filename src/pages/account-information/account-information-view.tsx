import toast from 'react-hot-toast'
import './account-information.scss'

import { Button, Col, Form, FormProps, Input, Row } from 'antd'
import { useSelector } from 'react-redux'
import { authApis } from '~apis/auth.api'
import { useEffect, useState } from 'react'
// import { userApis } from "~apis/user.api";
import { useTranslation } from 'react-i18next'
import { PageTitle } from '~components/page-title'
import { LiaEyeSolid } from 'react-icons/lia'
import { PiPencilSimpleLine } from 'react-icons/pi'
type FieldType = {
  old?: string
  new?: string
  retype?: string
}

const AccountInformation = () => {
  const { t } = useTranslation()
  const user = useSelector((state: any) => state.auth.user)
  const [showPassword, setShowPassword] = useState(false)
  const [code, setCode] = useState<string>('')

  const get2FAcode = async () => {
    // const code = await authApis.generate2FA();
    localStorage.setItem('2fa', code)
    setCode(code)
  }

  const handleHidenMoney = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const code = localStorage.getItem('2fa')
    if (code) {
      setCode(code)
    }

    if (!code && user && !user?.isEnable2FA) {
      get2FAcode()
    }

    if (user?.isEnable2FA) {
      localStorage.removeItem('2fa')
    }
  }, [user])
  return (
    <div className='account-information-page'>
      <PageTitle title={t('managementAccounting.accountInfo.accountInformation')} />
      {/* {code && (
        <div className='fa-code'>
          <img src={code} alt='2fa code' />
        </div>
      )} */}
      <div className='account-information-header'>
        <div className='information-header-left'>
          <div className='header-left-img'>
            <div className='relative'>
              <img src='/images/avatar-default-img.png' alt='Avatar default' />
              <div className='header-left-icon'>
                <PiPencilSimpleLine />
              </div>
              <div className='backdopimg'></div>
            </div>
          </div>
          <div>
            <p>default-name</p>
          </div>
        </div>
        <div className='line'></div>
        <ul className='information-header-right'>
          <div className='header-right-item'>
            <span>UID</span>
            <div>0</div>
          </div>

          <div className='header-right-item'>
            <span>Đang theo dõi</span>
            <div>0</div>
          </div>

          <div className='header-right-item'>
            <span>Người theo dõi</span>
            <div>0</div>
          </div>
        </ul>
      </div>
      <Col className='account-information-finance'>
        <div className='information-finance-left'>
          <div className='flex items-center mb-8 '>
            <h2 className='mr-3 font-semibold'>Số dư ước tính</h2>
            <div className='cursor-pointer' onClick={handleHidenMoney}>
              <LiaEyeSolid />
            </div>
          </div>
          <div className='flex'>
            <div className='text-3xl'>{showPassword ? '0.00' : '******'}</div>
            <div className='flex items-end text-base ml-4'>USDT</div>
          </div>
        </div>
        <div className='flex gap-7'>
          <button>Nạp</button>
          <button>Rút</button>
        </div>
      </Col>
    </div>
  )
}

export default AccountInformation
