import React from 'react';
import { User1, User2, User3, User4, User5 } from '../assets/images';
import { FileDownload } from '../assets/icons';
import { Icon } from './Icon';

const dummyData = [
  {
    id : 1,
    dp: User1,
    fullName: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    invoice : ''
  },
  {
    id : 2,
    dp: User2,
    fullName: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Refund',
    invoice : ''
  },
  {
    id : 3,
    dp: User3,
    fullName: 'Corey Schleifer',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    invoice : ''
  },
  {
    id : 4,
    dp: User4,
    fullName: 'Cooper Press',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Refund',
    invoice : ''
  },
  {
    id : 5,
    dp: User5,
    fullName: 'Phillip Lubin',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    invoice : ''
  },

]

export const Orders = () => {
  return (
    <section className='orders '>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold section-header'>Last Orders</h3>
        <a href="" className='section-header'>See All</a>
      </div>
      <div className="last-orders-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => {
              return <tr key={item.id}>
                <td className='invoice_name_and_dp flex items-center gap-xs' ><Icon iconelement={item.dp}/> {item.fullName}</td>
                <td style={{color: 'var(--clr-neutral-400)'}}>{item.date}</td>
                <td className='font-semibold'>{item.amount}</td>
                <td className={`status status-${item.status.toLowerCase()}`}>{item.status}</td>
                <td className='space-x-xxs'><Icon iconelement={FileDownload}
                  style={{
                    verticalAlign: 'middle'
                  }}
                /><span>invoice</span></td>
              </tr>     
            })}
          </tbody>
          
        </table>
      </div>
    </section>
  )
}
