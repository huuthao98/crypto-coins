import { useEffect, useState } from 'react'
import './wishlist.scss'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Card, Col, Empty, Row, Typography } from 'antd'
const Wishlist = () => {
  const { Title } = Typography
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
  const handleDeleteCoinWishlist = (item: any) => {
    setWishList((prev: any) => {
      const isChecked = wishList.find((e: any) => {
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
    <div className='wish-list-page'>
      <Row gutter={16} className='wishlist-content-list'>
        {!!wishList.length ? (
          wishList.map((item: any) => {
            return (
              <Col span={6} key={item.id}>
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
                          <div onClick={() => handleDeleteCoinWishlist(item)} className='icon-bin'>
                            <RiDeleteBin6Fill />
                          </div>
                        </div>
                      </Title>
                    }
                    bordered={false}
                  >
                    <span
                      className={
                        item.price_change_percentage_24h > 0
                          ? 'item-price-change-percent green'
                          : 'item-price-change-percent red'
                      }
                    >
                      {item.price_change_percentage_24h}%
                    </span>
                    <span className='item-price'>${item.current_price}</span>
                    <span className='item-total-volume'>Total Volume :{item.total_volume} </span>
                  </Card>
                </div>
              </Col>
            )
          })
        ) : (
          <div className='wishlist-non-content'>
            <Empty />
          </div>
        )}
      </Row>
    </div>
  )
}
export default Wishlist
