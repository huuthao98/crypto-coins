import { FaBars, FaCheckCircle, FaCommentDollar, FaGlobe, FaPlus } from 'react-icons/fa'
import './header.scss'
import { Input, Popover } from 'antd'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '~store'
import { setIsSidebar } from '~store/slices/auth-slice'
function Header() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const dispatch = useAppDispatch()

  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [searchValue, setSearchValue] = useState('')

  const [toggleSidebar, setToggleSidebar] = useState(true)

  const changeLanguage = (lang: 'en' | 'cn' | 'vi') => () => {
    i18n.changeLanguage(lang)
    setIsLanguageOpen(false)
    setLanguage(lang)
  }
  const handleOpenChange = (newOpen: boolean) => {
    setIsLanguageOpen(newOpen)
  }

  const contentLanguage = (
    <div className='popover-main'>
      <div className={language === 'cn' ? 'popover-item active' : 'popover-item'} onClick={changeLanguage('cn')}>
        <FaCheckCircle />
        中文
      </div>
      <div className={language === 'en' ? 'popover-item active' : 'popover-item'} onClick={changeLanguage('en')}>
        <FaCheckCircle />
        English
      </div>
      <div className={language === 'vi' ? 'popover-item active' : 'popover-item'} onClick={changeLanguage('vi')}>
        <FaCheckCircle />
        Tiếng việt
      </div>
    </div>
  )
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }
  const handleToggleSidebar = (toggleSidebar: boolean) => {
    dispatch(setIsSidebar(toggleSidebar))
    setToggleSidebar(!toggleSidebar)
  }

  const [coinsList, setCoinsList] = useState<any[]>([])
  useEffect(() => {
    const i = localStorage.getItem('coinsList')
    if (i) {
      const items = JSON.parse(i)
      if (items) {
        setCoinsList(items)
      }
    }
  }, [])

  const filteredCoins = coinsList.filter(
    (coin: any) =>
      coin.name.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchValue.trim().toLowerCase())
  )

  const getLocalStorage = localStorage.getItem('wishList')
  const [wishList, setWishList] = useState<any[]>([])

  useEffect(() => {
    if (getLocalStorage) {
      const items = JSON.parse(getLocalStorage)
      if (items) {
        setWishList(items)
      }
    }
  }, [getLocalStorage])
  const handleAddWishlist = (item: any) => {
    localStorage.setItem('wishList', JSON.stringify([item]))

    setWishList((prev: any) => {
      const isChecked = wishList.find((e) => {
        return e.id === item.id
      })
      if (!!isChecked) {
        const e = wishList.filter((e) => e.id !== item.id)
        localStorage.setItem('wishList', JSON.stringify(e))
        return e
      } else {
        const e = [...prev, item]
        localStorage.setItem('wishList', JSON.stringify(e))
        return e
      }
    })
  }
  return (
    <div className='header-wrapper'>
      <div className='header-wrapper-inner'>
        <div className='inner-item'>
          <div onClick={() => handleToggleSidebar(toggleSidebar)} className='inner-item-hamburger'>
            <FaBars />
          </div>

          <Link to='/'>{t('headerWeb.dashboard')}</Link>
          <Link to='account/information'>{t('headerWeb.accountInformation')}</Link>
        </div>

        <div className='inner-item'>
          <Popover
            content={contentLanguage}
            title={t('headerWeb.language')}
            trigger='click'
            className='inner-item-language'
            open={isLanguageOpen}
            onOpenChange={handleOpenChange}
          >
            <FaGlobe />
          </Popover>
          <FaCommentDollar />
          <div className='inner-item-search'>
            <Input
              className='inner-item-search-input'
              placeholder='Search'
              allowClear
              value={searchValue}
              onChange={onChangeSearch}
            />

            {!!searchValue && filteredCoins.length !== 0 && (
              <ul className='inner-item-search-list'>
                {filteredCoins.map((item: any) => {
                  return (
                    <li key={item.id} className='search-list-item'>
                      <div>{item.symbol}</div>
                      <div className='search-list-item-right'>
                        <div className='item-right-price'>
                          <span>{item.current_price}</span>
                          <span className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                            {item.price_change_percentage_24h}%
                          </span>
                        </div>
                        <div className='item-right-plus' onClick={() => handleAddWishlist(item)}>
                          <FaPlus />
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
