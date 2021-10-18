import { css, StyleSheet } from "aphrodite";
import { numberToPriceTag } from "../../utils/index";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

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
        paddingRight: 10,
        ":hover": {
            textDecoration: "underline",
            cursor: "pointer",
        },
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
        transition: "100ms linear all",
        ":hover": {
            transform: "scale(0.85)",
            cursor: "pointer",
        },
    },
    addToCart: {
        backgroundColor: "white",
        fontSize: 12,
        fontWeight: 500,
        textAlign: "center",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        left: "calc(50% - 50px)",
        top: "calc(50% - 15px)",
        transition: "300ms linear all",
        // boxShadow:
        // "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
        ":hover": {
            cursor: "pointer",
        },
    },
    discount: {
        marginRight: 2,
        textDecoration: "line-through",
        opacity: 0.5,
    },
});

interface IStoreItem {
    imageUrl?: string;
    label: string;
    price: number;
    prevPrice?: number;
    slug: string;
    liked?: boolean;
}

const StoreItem = ({
    imageUrl,
    label,
    price,
    prevPrice = 0,
    slug,
    liked,
}: IStoreItem) => {
    const history = useHistory()
    const [likeHover, setLikeHover] = useState(false);
    const [hover, setHover] = useState(false);

    const openUrl = (slug: string) => {
        history.push('/product/' + slug)
    }

    return (
        <div
            className={css(styles.container)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img className={css(styles.image)} src={imageUrl} alt={label} />
            <span className={css(styles.price)}>
                {prevPrice > 0 && (
                    <span className={css(styles.discount)}>
                        {numberToPriceTag(prevPrice)}
                    </span>
                )}
                {numberToPriceTag(price)}
            </span>
            <span className={css(styles.label)} onClick={() => openUrl(slug)}>{label}</span>
            <span
                className={css(styles.addToCart)}
                style={{
                    opacity: hover ? 1 : 0,
                }}
            >
                Agregar al carrito
            </span>
            <img
                className={css(styles.like)}
                src={
                    likeHover
                        ? "assets/icons/like-filled.png"
                        : liked
                        ? "assets/icons/like-filled-red.png"
                        : "assets/icons/like.png"
                }
                alt="Like or dislike"
                onMouseEnter={() => setLikeHover(true)}
                onMouseLeave={() => setLikeHover(false)}
            />
        </div>
    );
};

export default StoreItem;
