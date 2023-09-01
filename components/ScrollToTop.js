const ScrollToTop = () => {
    return (<a className='fixed bottom-16 right-4 xl:right-1/4'>
        <button onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })} className="p-2 md:px-4 rounded-full xl:rounded-md cursor-pointer bg-gray-400 hover:bg-gray-500 hoover:bg-gray-500 dark:bg-gray-400 dark:hover:bg-gray-500">
            ↑
        </button>
    </a>);
}

export default ScrollToTop