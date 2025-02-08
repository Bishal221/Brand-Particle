import { RxHome } from "react-icons/rx";

export const Menu = [
    {
        id: 1,
        name: "Dashboard",
        link: "",
        icon: '',
        cat: "heading",
    },
    {
        id: 2,
        name: "Dashboard",
        link: "/admin",
        icon: '',
        cat: "menu",
    },
    {
        id: 3,
        name: "Blogs",
        link: "/admin",
        icon: '',
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
        icon: '',
        cat: "menu",
    },
    {
        id: 5,
        name: "Pages",
        link: "/admin",
        icon: '',
        cat: "menu",
    },
    {
        id: 6,
        name: "Comment",
        link: "/admin",
        icon: '',
        cat: "menu",
    },
    {
        id: 7,
        name: "Menu",
        link: "/admin",
        icon: '',
        cat: "menu",
    },
    {
        id: 8,
        name: "Uers",
        link: "/admin",
        icon: '',
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
        icon: '',
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