import { css, StyleSheet } from "aphrodite";
import { numberToPriceTag } from "../../utils/index";

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: "#E8E8E8",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    label: {
        position: "absolute",
        bottom: 20,
        left: 0,
        height: 40,
        width: "calc(100% - 40px)",
        backgroundColor: "black",
        color: "white",
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    price: {
        position: "absolute",
        height: 30,
        bottom: 60,
        left: 0,
        backgroundColor: "white",
        fontSize: 12,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    like: {
        position: "absolute",
        top: 20,
        right: 20,
        height: 24,
        width: 24,
    },
});

interface IStoreItem {
    imageUrl?: string;
    label: string;
    price: number;
    slug: string;
    liked?: boolean;
}

const StoreItem = ({ imageUrl, label, price, slug, liked }: IStoreItem) => {
    return (
        <div className={css(styles.container)}>
            <img className={css(styles.image)} src={imageUrl} alt={label} />
            <span className={css(styles.price)}>{numberToPriceTag(price)}</span>
            <span className={css(styles.label)}>{label}</span>
            <img
                className={css(styles.like)}
                src={
                    liked
                        ? "assets/icons/like-filled-red.png"
                        : "assets/icons/like.png"
                }
                alt="Like or dislike"
            />
        </div>
    );
};

export default StoreItem;
