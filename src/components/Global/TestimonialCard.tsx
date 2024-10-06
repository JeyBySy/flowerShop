import React from 'react'

interface TestimonialCardProps {
    testimonial?: string;
}


const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className='shadow max-w-[300px] min-h-[300px] min-w-[300px] h-full p-5 border text-justify flex gap-2 flex-col relative'>
            <p className='text-4xl italic'>"</p>
            <div className='italic text-sm'>
                {testimonial}
            </div>
            <p className='text-4xl italic text-right'>"</p>
            <div className='text-sm flex flex-col items-center justify-center sticky top-[100%] gap-2 '>
                <div>image</div>
                <p className='text-sm not-italic font-semibold text-persian-rose-500'>Anonymous</p>

            </div>
        </div>
    )
}

export default TestimonialCard