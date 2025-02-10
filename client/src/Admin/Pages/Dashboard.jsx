import React from 'react'
import SideBar from '../Components/SideBar'
import { Images } from '../../assets/Index';
import { Menu } from '../Components/AdminMenuItems';

const Dashboard = () => {
  return (
    <SideBar
      MainLogo = { Images.BrandWhite }
      SmallLogo ={ Images.SmallLogoWhite }
      Menu = {Menu}
    />
  )
}

export default Dashboard