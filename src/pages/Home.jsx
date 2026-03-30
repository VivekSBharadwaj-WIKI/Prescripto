import React from 'react'
import Header from '../components/Header'
import SortBySpeciality from '../components/SortBySpeciality'
import TopDoctorsBook from '../components/TopDoctorsBook'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="mx-4 my-6">
      <Header />
      <SortBySpeciality />
      <TopDoctorsBook />
      <Banner />
    </div>
  )
}

export default Home