import axios from 'axios'
import { useEffect, useState } from 'react'
import './home-view.scss'
import { Row, Col, Card, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '~components/page-title'
import { CoinsTable } from '~components/coins-table'

import { FaListUl } from 'react-icons/fa'
import { IoGrid } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
const HomeView = () => {
  const { t } = useTranslation()

  const { Title } = Typography
  const [checkedHeart, setCheckedHeart] = useState<any[]>([])
  const [coins, setCoins] = useState([])

  const urlAPICoin =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios
      .get(urlAPICoin)
      .then((response) => {
        setCoins(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  useEffect(() => {
    localStorage.setItem('coinsList', JSON.stringify(coins))
  }, [coins])
    useEffect(() => {
      const i = localStorage.getItem('coinsList')
      if (i) {
        const items = JSON.parse(i)
        if (items) {
          setCoins(items)
        }
      }
    }, [])

  useEffect(() => {
    const i = localStorage.getItem('coinsList')
    if (i) {
      const items = JSON.parse(i)
      if (items) {
        setCoins(items)
      }
    }
  }, [])

  useEffect(() => {
    const i = localStorage.getItem('wishList')

    if (i) {
      const items = JSON.parse(i)
      if (items) {
        setCheckedHeart(items)
      }
    }
  }, [])

  const handleAddWishlist = (item: any) => {
    setCheckedHeart((prev: any) => {
      const isChecked = checkedHeart.find((e) => {
        return e.id === item.id
      })
      if (!!isChecked) {
        const e = checkedHeart.filter((e) => e.id !== item.id)
        localStorage.setItem('wishList', JSON.stringify(e))
        return e
      } else {
        const e = [...prev, item]
        localStorage.setItem('wishList', JSON.stringify(e))
        return e
      }
    })
  }
  const [typeShowCoins, setTypeShowCoins] = useState(false)
  const handleShowCoins = () => {
    setTypeShowCoins(!typeShowCoins)
  }

  return (
    <div className='home-page'>
      <div className='flex items-center justify-between mb-[20px] pr-[20px]'>
        <PageTitle title={t('headerPage.homePage')} />
        <div className='flex gap-10 cursor-pointer size-[20px]' onClick={handleShowCoins}>
          {typeShowCoins ? <IoGrid /> : <FaListUl />}
        </div>
      </div>
      <div>
        {typeShowCoins ? (
          <Row gutter={16} className='home-page-content-list'>
            {coins &&
              coins.map((item: any) => {
                return (
                  <Col span={8} key={item.id}>
                    <div>
                      <Card
                        title={
                          <Title>
                            <div className='item-title'>
                              <div className='item-title-left'>
                                <img src={item.image} alt={item.id}></img>
                                <div className='item-title-left-label'>
                                  <span>{item.symbol} </span>
                                  <span>{item.name}</span>
                                </div>
                              </div>
                              <div
                                onClick={() => handleAddWishlist(item)}
                                className={
                                  checkedHeart.find((e) => {
                                    return e.id === item.id
                                  })
                                    ? 'item-love-inner active'
                                    : 'item-love-inner'
                                }
                              >
                                <FaHeart />
                              </div>
                            </div>
                          </Title>
                        }
                        bordered={false}
                      >
                        <span className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                          {item.price_change_percentage_24h}%
                        </span>
                        <span className='item-price'>${item.current_price}</span>
                        <span className='item-total-volume'>24h Volume :{item.total_volume} </span>
                      </Card>
                    </div>
                  </Col>
                )
              })}
          </Row>
        ) : (
          <CoinsTable coinsProp={coins} />
        )}
      </div>
    </div>
  )
}
export default HomeView
