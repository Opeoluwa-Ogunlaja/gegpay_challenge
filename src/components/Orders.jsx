import React from 'react';
import User1 from '../assets/images/user1.svg'
import User2 from '../assets/images/user2.svg'
import User3 from '../assets/images/user3.svg'
import User4 from '../assets/images/user4.svg'
import User5 from '../assets/images/user5.svg'

import FileDownload from '../assets/icons/file-download.svg'

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
    status: 'Paid',
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
    status: 'Paid',
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
    <section className='orders'>
      <div className='section-header'>
        <b>Last Orders</b>
        <a href="">See All</a>
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
              <tr key={item.id}>
                <td>{item.dp} {item.fullName}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>invoice</td>
              </tr>     
            })}
          </tbody>
          
        </table>
      </div>
    </section>
  )
}
