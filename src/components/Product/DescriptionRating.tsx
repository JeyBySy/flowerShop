import React from 'react';

interface DescriptionRatingProps {
    description: string | null;
    averageRating: number;
    productRatings: {
        rating: number;
        review: string;
        User: {
            name: string
        }
        Product: {
            name: string
        }
        createdAt: string;
    }[];
}

const DescriptionRating: React.FC<DescriptionRatingProps> = ({ description, productRatings, averageRating }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <p className="text-xl font-semibold py-2  uppercase">Description</p>
                <div className='border-t-2 border-slate-200'>
                    <p className='py-4 px-2 text-gray-600'>
                        {description}
                    </p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className=' border-slate-200 flex items-center'>
                    <div className=" w-[90%] text-xl font-semibold py-2 uppercase">Ratings</div>
                    <div className='w-[10%] text-base text-center'>
                        ⭐{averageRating} / {productRatings.length}
                    </div>
                </div>
                <div className='border-t-2 border-slate-200'>
                    {productRatings.map((rating, index) => (
                        <div key={index} className='flex flex-col border-b-2 px-2'>
                            <div className='p-2 text-sm flex flex-col'>
                                <div className='user-rating'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <span key={index}>
                                            {index < rating.rating ? '⭐' : '☆'}
                                        </span>
                                    ))}
                                    {rating.rating}</div>
                                <div className='user-description text-gray-600'>{rating.review}</div>
                                <div className='user-name text-xs text-gray-500'>--- {rating.User.name}</div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
};

export default DescriptionRating;
