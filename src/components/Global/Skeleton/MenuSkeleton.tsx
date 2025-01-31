import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const MenuSkeleton: React.FC = () => {
    return (
        Array(4).fill(0).map((_item, i) => (
            <div key={i} className="w-[60px]">
                <Skeleton height={25} />
            </div>
        ))
    )
}

export default MenuSkeleton