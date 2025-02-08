import React, { useState } from 'react';
import { Images } from '../../assets/Index';
import { RxHome } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { Menu } from './AdminMenuItems';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SideBar = () => {

    const [currentMenu, setCurrentMenu] = useState(null);
    const [menuActive, setMenuActive] = useState(2);
    const [subMenuActive, setSubMenuActive] = useState(false);
    const MenuOpen = (menu) => {
        if (menu.submenu) {
            setCurrentMenu(menu.id)
            setSubMenuActive(true);
            return;
        }
        setMenuActive(menu.id);
        setCurrentMenu(0);
    }

    return (
        <>
            <aside className='bg-[#0e0e23] w-60 h-full fixed z-[103] transition-all duration-[0.05s] ease-[ease]'>
                <div className='w-60 fixed flex z-[9] items-center justify-center transition-all duration-[0.05s] ease-[ease] px-5 py-5 border-e border-y border-[#ffffff1a]'>
                    <Link to={''}>
                        <img src={Images.BrandWhite} className='w-[184px]' alt="" />
                    </Link>
                </div>

                <div className='h-screen relative overflow-auto scroll-width-none mt-[3.8rem] pb-20 pt-4'>
                    <nav className='flex flex-wrap pt-0 flex-col'>
                        <ul className='pl-4 list-none'>
                            {Menu.map((menu, index) => {
                                return (
                                    <>
                                        {menu.cat === 'heading' ? (
                                            <li key={menu.id} className='text-[#ffffff4d] text-[0.718rem] font-medium uppercase opacity-80 relative pt-3 pb-[0.2rem] px-[0.93rem]'>
                                                <span>{menu.name}</span>
                                            </li>
                                        ) :
                                            (
                                                <li key={menu.id} onClick={()=> MenuOpen(menu)} className={menuActive === menu.id ? 'mt-[5px] p-0' : 'my-[5px]'}>
                                                    <Link to={''} className={menuActive === menu.id ? 'my-[15px] h-[43px] bg-[#eaedf7] p-[0.25rem] relative z-[1] mx-auto text-center rounded-tl-[30px] rounded-bl-[30px] border-[0] border-transparent w-full flex text-[.875rem] text-[#fff6] items-center no-underline font-normal before:absolute before:top-[-30px] before:z-[9] before:h-[30px] before:border-l-transparent before:border-t-transparent before:border-b-[transparent] before:bottom-0 before:rounded-br-[48px] before:border-e-[20px] before:right-0 before:border-[#0e0e23] after:content-[""] after:absolute after:z-0 after:h-[30px] after:border-l-transparent after:border-t-transparent after:border-b-[transparent] after:top-[43px] after:bottom-0 after:right-0 after:rounded-tl-none after:rounded-tr-[48px] after:rounded-bl-none after:rounded-br-none after:border-e-[20px] after:border-[#0e0e23]' : 'relative group flex items-center no-underline text-[.875rem] text-[#fff6] font-normal p-3 rounded-[0.688rem]'}>
                                                        <span className={menuActive === menu.id ? 'absolute top-[-30px] w-5 h-[60px] right-0 bg-[#eaedf7] ' : 'hidden'}></span>
                                                        <span className={menuActive === menu.id ? 'absolute top-[35px] w-5 h-[30px] right-0 bg-[#eaedf7] ' : 'hidden'}></span>
                                                        <span className={menuActive === menu.id ? 'text-lg w-[35px] h-[35px] leading-[33px] text-center shadow-[0_5px_10px_#0003] text-white rounded-[50%] bg-[#6259ca] flex items-center justify-center mr-[10px]' : 'flex items-center transition-all duration-300 justify-center mr-[1.2rem] w-[1.15rem] h-[1.15rem] text-[1.063rem] text-center group-hover:fill-white text-[#fff6] group-hover:text-white fill-[#fff6] rounded-[0.688rem] hover:font-medium'}>{ menu.icon }</span>
                                                        <span className={menuActive === menu.id ? 'text-[#6259ca] font-normal relative text-[.875rem] leading-[1]' : 'whitespace-nowrap transition-all duration-300 group-hover:text-white text-[#fff6] relative text-sm leading-none align-middle hover:font-medium'}>{menu.name}</span>
                                                    </Link>
                                                    {(menu.submenu && subMenuActive && currentMenu === menu.id) &&
                                                        <ul className='pl-[1.2rem]'>
                                                            {menu.submenu.map((submenu, i) => {
                                                                return (
                                                                    <>
                                                                        <li key={menu.id} onClick={()=>setMenuActive(menu.id)}>
                                                                            <Link to={''} className='py-[0.45rem] pr-[1.6rem] hover:text-white hover:font-medium transition-all duration-300 text-[#fff6] inline-flex items-start'>
                                                                                <span className='mr-[1rem] mt-[0.15rem]'><MdKeyboardDoubleArrowRight /></span>
                                                                                <span className='text-[0.8rem]'>{ submenu.name }</span>
                                                                            </Link>
                                                                        </li>
                                                                    </>
                                                                )
                                                            })}
                                                        </ul>
                                                    }
                                                </li>
                                            )}
                                    </>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>

    )
}

export default SideBar