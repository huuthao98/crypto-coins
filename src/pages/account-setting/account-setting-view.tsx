import toast from 'react-hot-toast'
import './account-setting.scss'

import { Avatar, Button, Form, FormProps, Input } from 'antd'
import { useSelector } from 'react-redux'
import { authApis } from '~apis/auth.api'
import { useEffect, useState } from 'react'
// import { userApis } from "~apis/user.api";
import { useTranslation } from 'react-i18next'
import { PageTitle } from '~components/page-title'

const AccountSetting = () => {
  const { t } = useTranslation()
  const [stateAvatar, setStateAvatar] = useState<any>()

  useEffect(() => {
    return () => {
      stateAvatar &&URL.revokeObjectURL(stateAvatar.preview)
    }
  }, [stateAvatar])
  const handlePreviewAvatar = (e: any) => {
    console.log(e)
    const file = e.target.value
    console.log(file)
    // file.preview = URL.createObjectURL(file)
    // setStateAvatar(file)
  }

  return (
    <div className='account-setting-page'>
      <PageTitle title={t('managementAccounting.accountSetting.title')} />
      <div className='setting-section'>
        <h2 className='setting-section-title'>Profile</h2>

        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>Nickname & Avatar</h3>
            <p>
              Set up an avatar and nickname, it is suggested not to use your real name or the name of your social
              account as a nickname.
            </p>
          </div>

          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div className='flex items-center gap-4'>
              {stateAvatar ? (
                <img src={stateAvatar.preview} alt='Avatar Image' className='w-[32px] h-[32px] rounded-[8px] ;' />
              ) : (
                <img
                  src='/images/avatar-default-img.png'
                  alt='Avatar Image'
                  className='w-[32px] h-[32px] rounded-[8px] ;'
                />
              )}
              <span>User-ea79e</span>
            </div>
            <input type='file' onChange={handlePreviewAvatar} />
             
            
          </div>
        </div>
        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>C2C Profile</h3>
            <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
          </div>

          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div className='flex items-center gap-4'>
              <div className='profile-img-name'>m</div>
              <span>me*****.com</span>
            </div>
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className='setting-section'>
        <h2 className='setting-section-title'>Notifications</h2>

        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>Notification Language</h3>
            <p>This will affect the language settings of E-mail and App push.</p>
          </div>

          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div>Default</div>
            <button>Edit</button>
          </div>
        </div>
        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>Notification Preferences</h3>
            <p>Once configured, you will receive relevant on-site inbox notifications within the app and website.</p>
          </div>

          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div>Activities, Trade Notification, Binance News, System Messages</div>

            <button>Manage</button>
          </div>
        </div>
        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>Auto Price Alert</h3>
            <p>Once configured, you will receive alerts on the price changes of major and holding cryptos.</p>
          </div>

          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div>Notification On, Sound On</div>

            <button>Manage</button>
          </div>
        </div>
      </div>

      <div className='setting-section'>
        <h2 className='setting-section-title'>Withdrawal</h2>
        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>Withdrawal Whitelist</h3>
            <p>
              Once this function is enabled, your account will only be able to withdraw to addresses on your whitelist.
            </p>
            <a href=''>Address Management</a>
          </div>
          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div>OFF</div>
            <button>Enable</button>
          </div>
        </div>

        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>One-step Withdrawal</h3>
            <p>
              When this function is turned on, you can withdraw small amount crypto to whitelisted addresses without
              passing 2FA verification
            </p>
          </div>

          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div>OFF</div>

            <button>Enable</button>
          </div>
        </div>

        <div className='setting-section-item'>
          <div className='setting-section-item-child flex-col gap-2'>
            <h3>Withdraw Setting</h3>
            <p>Choose to withdraw through on-chain or off-chain transfer for applicable addresses.</p>
          </div>
          <div className='setting-section-item-child justify-end items-center gap-[32px]'>
            <div>Off-chain withdrawal</div>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting
