import React from 'react';

const BGGradient = (props) => {

    const { width, height, top, right, bottom, left, image } = props;

    return (
        <>
            <section
                style={{
                    top: top ? `${top}` : undefined,
                    right: right ? `${right}` : undefined,
                    bottom: bottom ? `${bottom}` : undefined,
                    left: left ? `${left}` : undefined,
                }}
                className={`
    ${width ? `w-[${width}]` : 'w-[600px]'} 
    ${height ? `h-[${height}px]` : 'h-[800px]'} 
    absolute -z-10
  `}
            >
                <img src={image} className="w-full h-full object-cover" alt="" />
            </section>
        </>
    )
}

export default BGGradient