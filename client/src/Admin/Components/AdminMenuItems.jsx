import { RxHome } from "react-icons/rx";
import { FaBlog } from "react-icons/fa6";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export const Menu = [
    {
        id: 1,
        name: "Dashboard",
        cat: "heading",
    },
    {
        id: 2,
        name: "Dashboard",
        link: "/admin",
        icon: <RxHome />,
        cat: "menu",
    },
    {
        id: 3,
        name: "Blogs",
        link: "/admin",
        icon: <FaBlog />,
        cat: "menu",
        submenu: [
            {
                id: 1,
                name: "All Blogs",
                link: "/admin",
            },
            {
                id: 2,
                name: "Add New Blog",
                link: "/admin",
            },
            {
                id: 3,
                name: "Catagories",
                link: "/admin",
            },
            {
                id: 3,
                name: "Tags",
                link: "/admin",
            },
        ]
    },
    {
        id: 4,
        name: "Media",
        link: "/admin",
        icon: <MdOutlinePermMedia />,
        cat: "menu",
    },
    {
        id: 5,
        name: "Pages",
        link: "/admin",
        icon: <MdContactPage />,
        cat: "menu",
    },
    {
        id: 6,
        name: "Comment",
        link: "/admin",
        icon: <FaCommentAlt />,
        cat: "menu",
    },
    {
        id: 7,
        name: "Menu",
        link: "/admin",
        icon: <BsFillMenuButtonWideFill />,
        cat: "menu",
    },
    {
        id: 8,
        name: "Uers",
        link: "/admin",
        icon: <FaUserCircle />,
        cat: "menu",
        submenu: [
            {
                id: 1,
                name: "All Users",
                link: "/admin",
            },
            {
                id: 2,
                name: "Add New Uesr",
                link: "/admin",
            },
            {
                id: 3,
                name: "Profile",
                link: "/admin",
            },
        ]
    },
    {
        id: 9,
        name: "Setting",
        link: "/admin",
        icon: <IoSettings />,
        cat: "menu",
        submenu: [
            {
                id: 1,
                name: "Genaral",
                link: "/admin",
            },
            {
                id: 2,
                name: "Writing",
                link: "/admin",
            },
            {
                id: 3,
                name: "Reading",
                link: "/admin",
            },
        ]
    },
] 