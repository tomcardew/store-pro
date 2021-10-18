import { css, StyleSheet } from "aphrodite";
import { numberToPriceTag } from "../../utils/index";
import PaymentsTag from "./PaymentsTag";

const styles = StyleSheet.create({
    row: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    mainPrice: {
        fontWeight: "bold",
        fontSize: 18,
    },
    discount: {
        fontWeight: 400,
        fontSize: 14,
        textDecoration: "line-through",
        opacity: 0.5,
    },
});

interface IPriceTag {
    price: number;
    discount?: number;
}

const PriceTag = ({ price, discount = 0 }: IPriceTag) => {
    return (
        <div className={css(styles.row)}>
            <div className={css(styles.container)}>
                {discount > 0 && (
                    <span className={css(styles.discount)}>
                        {numberToPriceTag(discount)}
                    </span>
                )}
                <span className={css(styles.mainPrice)}>
                    {numberToPriceTag(price)}
                </span>
            </div>
            <div style={{ marginLeft: 20 }}>
                <PaymentsTag />
            </div>
        </div>
    );
};

export default PriceTag;
