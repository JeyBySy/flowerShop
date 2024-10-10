import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type CardSkeletonProps = {
    cards: number
}

const CardSkeleton = ({ cards }: CardSkeletonProps) => {
    return (
        Array(cards).fill(0).map((_item, i) => (
            <div key={i} className="border relative p-4 rounded hover:shadow-2xl transition-shadow duration-300 w-full" >
                <div className='flex items-center justify-center mb-3'>
                    <Skeleton style={{ width: "220px", height: "275px" }} />
                </div>
                <div>
                    <div>
                        <Skeleton />
                    </div>
                    <div className=' flex text-xs sm:text-sm justify-between gap-2'>
                        <div className='flex-grow'> <Skeleton /></div>
                        <div className='flex-grow'> <Skeleton /></div>
                    </div>
                </div >
            </div >
        ))

    )
}

export default CardSkeleton