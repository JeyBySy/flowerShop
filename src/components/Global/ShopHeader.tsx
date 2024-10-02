import { Flower } from "lucide-react";
interface Size {
    width?: number,
    height?: number,
    color?: string
}

const ShopHeader: React.FC<Size> = ({ width = 25, height = 25, color = "#e08100" }) => {
    const shopName = import.meta.env.VITE_FLOWER_SHOP_NAME || "Flower Shop";

    return (
        <div className="text-center flex justify-center items-center">
            <Flower width={width} height={height} color={color} />{shopName}
        </div>
    );
};

export default ShopHeader;