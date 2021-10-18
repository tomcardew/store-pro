import HeaderFooter from "../../components/layout/HeaderFooter";
import {
    // useHistory,
    useParams,
} from "react-router-dom";

type ProductViewParams = {
    slug: string;
};

const ProductView = () => {
    // const history = useHistory()
    const { slug } = useParams<ProductViewParams>();

    return <HeaderFooter>ProductView: {slug}</HeaderFooter>;
};

export default ProductView;
