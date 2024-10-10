import ShopHeader from "./ShopHeader"

const Footer = () => {
    return (
        <div className="w-full min-h-[450px] bottom-0 bg-avocado-600 text-white relative py-5 z-1 hidden lg:block">
            <section>
                <div className="flex text-2xl items-center justify-start">
                    <ShopHeader />
                </div>
                <div className="flex justify-between lg:flex-nowrap flex-wrap gap-10 pt-3  text-sm">
                    <div className="lg:w-[10%] flex-grow items-center text-justify leading-loose">
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio necessitatibus repudiandae tempora rerum autem est et qui id suscipit velit ratione possimus, itaque aliquid animi, quibusdam nesciunt? Ea doloremque ipsam, nisi, tempore laborum laudantium nam ab molestiae perferendis iusto dolores eum minima blanditiis cumque aperiam quisquam rem? Consequuntur nesciunt ipsam itaque accusamus atque, eum non iure, quod cupiditate fugit dolorem exercitationem voluptates aut odio voluptatum mollitia ex vel sed optio? Iure fugit aperiam voluptas ex. Nobis, repudiandae quos culpa iusto nisi cupiditate, voluptates totam quia eum dignissimos cum et a minus quod? Laudantium facere maxime sequi eaque quod accusamus nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore libero et fuga deserunt tenetur pariatur, vero officia, neque itaque facilis necessitatibus minima id. Provident blanditiis totam asperiores voluptatibus ut quae!</span>
                    </div>
                    <div className="flex-grow-0 items-center">
                        <span className="text-xl font-semibold uppercase ">
                            SiteLink
                        </span>
                        <div className="flex flex-col gap-5 pt-2">
                            <a href="">Home</a>
                            <a href="">Home</a>
                            <a href="">Home</a>
                            <a href="">Home</a>
                            <a href="">Home</a>
                            <a href="">Home</a>
                        </div>
                    </div>
                    <div className="flex-grow-0 items-center ">
                        <span className="text-xl font-semibold uppercase">
                            CUSTOMER CARE
                        </span>
                        <div className="flex flex-col gap-5 pt-2">
                            <a href=""> Contact Us</a>
                            <a href=""> FAQs</a>
                            <a href=""> Payment Methods</a>
                            <a href="">Return & Exchange</a>
                            <a href=""> Terms & Conditions</a>
                            <a href=""> Privacy Policy</a>
                        </div>
                    </div>
                    <div className="flex-grow-0 items-center">
                        <span className="text-xl font-semibold uppercase ">
                            GOT QUESTIONS?
                        </span>
                        <div className="flex flex-col gap-5 pt-2">
                            <div >
                                Phone: <span className="font-semibold"> 09123456789</span>
                            </div>
                            <div>
                                Email:  <span className="font-semibold"> sample@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0 items-center lg:w-[20%]">
                        <span className="text-xl font-semibold uppercase ">
                            Subscribe
                        </span>
                        <div className="flex ">
                            <input type="text" className="w-full p-2 text-black focus:outline-none" placeholder="sample@gmail.com " />
                            <button className="bg-zest-600 p-1">Subscribe</button>
                        </div>
                        <div className="flex justify-evenly items-center mt-5">
                            <div className="text-center w-full border">
                                Google play
                            </div>
                            <div className="text-center w-full border">
                                Apple Store
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer