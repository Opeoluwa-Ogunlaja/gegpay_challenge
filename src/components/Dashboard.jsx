import React from 'react'
import { LastOrders } from './LastOrders'
import TopPlatform from './TopPlatform'
import InfoCards from './InfoCards'
import SalesTrend from './SalesTrend'

const Dashboard = () => {
  return (
    <main className='dashboard-content'>
       <LastOrders /> 
       <TopPlatform />
       <InfoCards />
       <SalesTrend />
    </main>
  )
}

export default Dashboard