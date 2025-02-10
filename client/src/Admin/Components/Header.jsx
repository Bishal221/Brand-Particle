import React from 'react'

const Header = (props) => {

  const { menushow, setMenushow } = props;
  return (
      <>
      <nav className={`${ menushow ? 'pl-[15rem]' : 'pl-[5rem]'} max-w-full w-full h-16 z-[100] fixed shadow-[-7.829px_11.607px_20px_#908fa017] transition-all duration-[0.1s] ease-[ease] border-b border-[#e1e6f1] bg-[#fff]`}>
      </nav> 
      </>
  )
}

export default Header