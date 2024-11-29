'use client'
import './coins-table.scss'
import React, { useEffect, useState } from 'react'

interface ICoins {
  coinsProp: any
}
const CoinsTable: React.FC<ICoins> = (coin) => {
  const [coins, setCoins] = useState<any>([])
  const [tab, setTabs] = useState<any>('')

  useEffect(() => {
    setCoins(coin.coinsProp)
  }, [coin.coinsProp])

  var score = [40, 100, 1, 6, 35, 10]
  const a = score.sort(function (a, b) {
    return a - b
  })

  useEffect(() => {
    const newArray = coin.coinsProp.sort(function (a: any, b: any) {
      if (tab === 'price_change_24h') {
        return a.price_change_24h - b.price_change_24h
      } else if (tab === 'total_volume') {
        return a.total_volume - b.total_volume
      } else if (tab === 'current_price') {
        return a.total_volume - b.total_volume
      }
    })
    setCoins(newArray)
  }, [tab])
console.log(coins)
  return (
    <div className='coins-table-view'>
      <table>
        <thead className='bg-red-800'>
          <tr>
            <td>Name</td>
            <td  className='cursor-pointer'onClick={() => setTabs('current_price')}>Price</td>
            <td className='cursor-pointer' onClick={() => setTabs('price_change_24h')}>
              Change 24h
            </td>
            <td className='cursor-pointer' onClick={() => setTabs('total_volume')}>
              Total Volume
            </td>
          </tr>
        </thead>
        <tbody>
          {coins.map((item: any, index: any) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.current_price}</td>
                <td>{item.price_change_24h}</td>
                <td>{item.total_volume}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CoinsTable
