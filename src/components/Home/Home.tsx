import Divider from "../Global/Divider"
import Products from "./ShowProducts"
import Promotion from "./Promotion"
import Testimonial from "./Testimonial"

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Promotion />
            <Divider />
            <Products />
            <Divider />
            <Testimonial />
        </div>
    );
}

export default Home