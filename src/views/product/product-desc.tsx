import { SelectableButton } from "../../components/button"
import { PriceTag } from "../../components/common"
import { Selectable } from "../../components/selectable"

const ProductDesc = () => {
    return (
        <div>
            <PriceTag price={452} discount={699} />
            <Selectable list={["CH", "M", "G", "XG"]} utilities={<SelectableButton >Guía de tallas</SelectableButton>} />
        </div>
    )
}

export default ProductDesc