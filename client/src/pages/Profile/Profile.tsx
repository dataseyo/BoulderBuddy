import React from 'react'

import './styles.css'
import { Sends, Stats, User } from '../../components/Profile/index'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div>
      <h1 className="text-light">Profile</h1>
      <User/>
      <Sends/>
    </div>
  )
}

export default Profile