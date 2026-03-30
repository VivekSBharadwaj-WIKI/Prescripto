import React from 'react'
import DoctorCards from './DoctorCards'

const DoctorsList = ({selected}) => {
  return (
    <div className="max-w-7xl mx-2">
        <DoctorCards grid="grid-cols-1 sm:grid-cols-4" selected={selected}/>
    </div>
  )
}

export default DoctorsList