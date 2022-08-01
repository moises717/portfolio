import './home-skeleton.scss';
export const HomeSkeleton = () => {
    return (
        <div className='skeleton-container'>
            <div className='skeleton-container__title skeleton'></div>
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <div className='skeleton-container__content' key={index}></div>
                ))
            }
            <div className='skeleton-container__title skeleton'></div>
            {
                Array.from({ length: 7 }).map((_, index) => (
                    <div className='skeleton-container__content' key={index}></div>
                ))
            }
        </div>
    )
}
