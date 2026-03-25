import React from 'react'
import Header from '../components/Header'
import SortBySpeciality from '../components/SortBySpeciality'
import TopDoctorsBook from '../components/TopDoctorsBook'

const Home = () => {
  return (
    <div className="mx-4 my-6">
      <Header />
      <SortBySpeciality />
      <TopDoctorsBook />
    </div>
  )
}

export default Home