const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-14 h-14 bg-blue-500 rounded-full animate-spinner"></div>
            <style>
                {`
                @keyframes spinner {
                    0% {
                        opacity: 0;
                        transform: scale(0) translateX(-300%);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.25) translateX(0);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(0) translateX(300%);
                    }
                }
                .animate-spinner {
                    animation: spinner 1s infinite;
                }
                `}
            </style>
        </div>
    );
};

export default Loader;
