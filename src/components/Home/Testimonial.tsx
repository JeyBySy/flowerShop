import TestimonialCard from "../Global/TestimonialCard"

const Testimonial = () => {
    return (
        <section className="flex flex-col gap-3 ">
            <span className="text-2xl font-semibold border-b-2 pb-2 border-zest-600">Testimonial</span>
            <p className="w-full text-end text-sm cursor-pointer" > Show More</p >
            <div className="flex gap-3 h-fit text-center items-center justify-center overflow-x-auto pl-5 pb-4 rounded">
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsaddasdassd sddasd asd wdasdsad" />
                </div>
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsad dasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsaddasfasdasdsadsadd loremdas asdassd sddasd asd wdasdsad" />
                </div>
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsaddasdassd sddasd asd wdasdsad" />
                </div>
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsaddasdassd sddasd asd wdasdsad" />
                </div>
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsaddasdassd sddasd asd wdasdsad" />
                </div>
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsaddasdassd sddasd asd wdasdsad" />
                </div>
                <div className="flex-shrink-0">
                    <TestimonialCard testimonial="dasfasdasdsadsaddasdassd sddasd asd wdasdsad" />
                </div>
            </div>
        </section >
    )
}

export default Testimonial