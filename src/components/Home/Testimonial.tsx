import TestimonialCard from "../Global/TestimonialCard"

const Testimonial = () => {
    return (

        <section className="flex flex-col gap-3">
            <span className="text-2xl font-semibold border-b-2 pb-2 border-zest-600">Testimonial</span>
            <p className="w-full text-end text-sm cursor-pointer" > Show More</p >
            <div className="flex gap-3  h-[260px] text-center items-center justify-center">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </section >
    )
}

export default Testimonial