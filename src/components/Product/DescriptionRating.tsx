import React from 'react'

const DescriptionRating: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <p className="text-xl font-semibold py-2 border-b-2 border-slate-200 uppercase">Description</p>
                <p className='py-4 px-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla est repellendus quia facilis consequuntur! Inventore quaerat, minima, nisi repellat ipsa facilis sint alias debitis at sunt nulla, excepturi consequuntur veritatis.
                </p>
            </div>
            <div className='flex flex-col'>
                <p className="text-xl font-semibold py-2 border-b-2 border-slate-200 uppercase">Ratings</p>
                <div className='flex flex-col py-2 px-2'>
                    <div className='flex flex-row items-center'>
                        <div className='w-full text-xl'>
                            Average user rating ⭐4.7 /5
                        </div>
                        <div className='w-full text-xl'>Rating breakdown</div>
                    </div>
                </div>
                <div className='flex flex-col border-t-2 px-2'>
                    <div className='p-2 text-sm flex flex-col'>
                        <div className='user-rating'>⭐⭐⭐⭐⭐5</div>
                        <div className='user-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, itaque. Officiis a dolorem rem, aperiam veritatis ratione in! Impedit natus totam harum earum sit sequi deleniti id aut! Facilis, suscipit.</div>
                        <div className='user-name text-xs text-gray-500'>--- Anonymous</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionRating