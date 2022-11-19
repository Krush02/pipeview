import React from 'react'
import RepCard from './RepCard'
import TeamSales from './TeamSales'
import LeaderboardQtr from './LeaderboardQtr'
import LeaderboardMonthly from './LeaderboardMonthly'

function RepDashboard() {
  return (
    <div className='flex flex-col mx-10 my-5 lg:flex-row justify-center'>
        <div className='flex-col min-w-1/4 md:min-w-1/4'>
            <TeamSales />
            <LeaderboardMonthly />
            <LeaderboardQtr />
        </div>
        <div className='flex flex-col md:flex-row w-full'>
            <RepCard />
            <RepCard />
            <RepCard />
        </div>
    </div>
  )
}

export default RepDashboard