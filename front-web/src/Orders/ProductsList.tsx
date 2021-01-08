import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

const ProductsList = ({ products, onSelectProduct, selectedProducts }: Props) => (
    <div className="orders-list-container">
        <div className="orders-list-items">
            {products.map(product => (
                <ProductCard
                    isSelected={checkIsSelected(selectedProducts, product)} 
                    onSelectProduct={onSelectProduct} 
                    product={product} 
                    key={product.id} 
                />
            ))}
        </div>
    </div>
);

export default ProductsList;