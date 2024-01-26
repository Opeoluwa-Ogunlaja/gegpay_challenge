import React from 'react'
import { Icon } from './Icon'
import { RotateIcon,TrendingUpIcon } from '../assets/icons'
import { BoxTickICon } from '../assets/icons'
import { CoinIcon } from '../assets/icons'
import { ShoppingCartIcon } from '../assets/icons'

const statData = [
  {
    id : 1,
    title : 'Total Orders',
    amount : 350,
    percentage: 23.5,
    icon: BoxTickICon,
    regard: 'gain',
    graphData: []
  },
  {
    id : 2,
    title : 'Total Refund',
    amount : 270,
    percentage: 23.5,
    icon: RotateIcon,
    regard: 'loss',
    graphData: []
  },
  {
    id : 3,
    title : 'Average Sales',
    amount : 1567,
    percentage: 23.5,
    icon: ShoppingCartIcon,
    regard: 'gain',
    graphData: []
  },
  {
    id : 4,
    title : 'Total Income',
    amount : '$ '+ 350000,
    percentage: 23.5,
    icon: CoinIcon,
    regard: 'gain',
    graphData: []
  }
]


export const StatsCards = () => {
  return (
    <section className='stat-cards grid gap-lg'>
      {
        statData.map((stats) => {
          return  <div className="inner-card flex flex-column gap-xs" key={stats.id}>
                    <div className='icon_and_graph'>
                      <div className='flex items-center justify-center stat-icon-container'>
                        <Icon iconelement={stats.icon} style={{width: '24px'}} />
                      </div>
                      <div className="stat-graph">

                      </div>
                    </div>
                    <div className="flex flex-column">
                      <p className='font-md color-neutral-400 leading-wider' >{stats.title}</p>
                      <b className='font-semibold text-xl leading-heading-4'>{stats.amount}</b>
                    </div>
                    <div className="stat_analytics flex align-center gap-xs">
                      <div className={`regard regard-${stats.regard} flex gap-xxs items-center`}>
                        <Icon className={'colored colored-stroke'} iconelement={TrendingUpIcon} />
                        {stats.percentage}
                      </div>
                      <span className='text-sm' >
                        vs. Previous month
                      </span>
                    </div>
                  </div>
        })
      }
      
    </section>
  )
}