import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthlyOverView from './MonthlyOverView'
import OrdersTable from './OrdersTable'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={3} >
             <Grid  item xs={12} md={4}>
              <div className='shadow-lg shadow-gray-600'>
              <Achievement/>
              </div>
             </Grid>
             <Grid item xs={12} md={8}>
             <div className='shadow-lg shadow-gray-600'>
             <MonthlyOverView/>
              </div>
              <Grid item xs={12} md={6}>
                <div className='shadow-lg shadow-gray-600'>
                  <OrdersTable/>
                </div>
                
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='shadow-lg shadow-gray-600'>
                  <ProductTableView/>
                </div>
                
              </Grid>
             </Grid>
             
        </Grid>
    </div>
  )
}

export default AdminDashboard