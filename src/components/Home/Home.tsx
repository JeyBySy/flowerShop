import Divider from "../Global/Divider"
import Products from "./Products"
import Promotion from "./Promotion"
import Testimonial from "./Testimonial"

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Promotion />
            <Divider />
            <Products />
            <Testimonial />
            <Products />
        </div>
    );
}

export default Home