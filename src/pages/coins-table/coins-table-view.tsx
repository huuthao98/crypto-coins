'use client'
import './coins-table.scss'
import React, { useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import type { TableColumnsType, TableProps } from 'antd'

interface DataType {
  key: React.Key

  name: string
  current_price: number
  price_change_percentage_24h: number
  total_volume: number
}

const CoinsTable: React.FC = () => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const i = localStorage.getItem('coinsList')
    if (i) {
      const items = JSON.parse(i)
      if (items) {
        setCoins(items)
      }
    }
  }, [])
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      sorter: {
        compare: (a, b) => a.current_price - b.current_price,
        multiple: 3
      }
    },
    {
      title: '24h Change',
      dataIndex: 'price_change_percentage_24h',
      sorter: {
        compare: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h,
        multiple: 2
      },
      render(value, record, index) {
        let color = value > 0 ? 'green' : 'red'
        return (
          <Tag color={color} key={index}>
            {value > 0 ? '+':''} {value} %
          </Tag>
        )
      }
    },
    {
      title: '24h Volume',
      dataIndex: 'total_volume',
      sorter: {
        compare: (a, b) => a.total_volume - b.total_volume,
        multiple: 1
      }
    }
  ]

  // const data: DataType[] = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     current_price: 98,
  //     price_change_percentage_24h: 60,
  //     total_volume: 70
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     current_price: 98,
  //     price_change_percentage_24h: 66,
  //     total_volume: 89
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     current_price: 98,
  //     price_change_percentage_24h: 90,
  //     total_volume: 70
  //   },
  //   {
  //     key: '4',
  //     name: 'Jim Red',
  //     current_price: 88,
  //     price_change_percentage_24h: 99,
  //     total_volume: 89
  //   }
  // ]
  const data: DataType[] = coins
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra)
  }

  return <div className='coins-table-view'>
     <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
  </div>
}

export default CoinsTable
