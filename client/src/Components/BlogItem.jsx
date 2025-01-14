import React from 'react';
import { Link } from 'react-router-dom';


const BlogItem = (props) => {

    const { title, catagory, date, img, keyItem } = props;

    return (
        <article key={ keyItem} className="w-full flex items-start justify-start gap-3 lg:gap-2 flex-col">
            <Link to={''} className="w-full h-[370px] custom-sm:h-[470px] lg:h-[370px] xl:h-[470px] rounded-3xl overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={ img } alt="" />
            </Link>
            <Link to={''} className="text-2xl sm:text-4xl lg:text-xl xl:text-2xl text-white lg:max-w-[500px] w-full">{ title }</Link>
            <p className="sm:mt-1 lg:mt-0 text-white text-sm sm:text-base lg:text-sm font-light">{ catagory } <span className="text-slate-500">{ date }</span></p>
        </article>
    )
}

export default BlogItem