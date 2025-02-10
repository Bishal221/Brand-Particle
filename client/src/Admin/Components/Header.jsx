import React from 'react';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

const Header = (props) => {

  const { menushow, setMenushow } = props;

  const MenuOpenBTN = () => {
    setMenushow(!menushow);
  }


  return (
      <>
      <nav className={`${menushow ? 'pl-[15rem]' : 'pl-[5rem]'} max-w-full w-full h-16 z-[100] fixed shadow-[-7.829px_11.607px_20px_#908fa017] transition-all duration-[0.1s] ease-[ease] border-b border-[#e1e6f1] bg-[#fff] px-4`}>
        <header className='flex items-stretch justify-between h-full w-full mx-auto my-auto py-3'>
          <div className='flex items-stretch'>
            <button onClick={()=> MenuOpenBTN()} className='select-none w-8 text-[1.3rem] relative mx-[0.45rem] mr-[0.625rem] flex items-center px-[0.3rem] py-4'>
              { menushow ?
                (<CgMenuLeftAlt />) : (<IoCloseOutline />)
              }
            </button>
          </div>
          <div className='flex items-stretch'>
              <article className='flex items-stretch '>
                <button className='flex items-center px-[0.3rem] relative'>
                  <img className='w-[32px] h-[32px] rounded-full' src={'https://react.spruko.com/vue/spruha/preview/images/faces/1.jpg' } alt="" />
                </button>
              </article>
          </div>
        </header>
      </nav> 
      </>
  )
}

export default Header