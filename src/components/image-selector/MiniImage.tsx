import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        boxSizing: "border-box",
        transition: "100ms linear all",
    },
    image: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        ":hover": {
            cursor: "pointer",
        },
    },
    active: {
        border: "3px solid black",
    },
});

interface IMiniImage {
    active?: boolean;
    image: string;

    onClick?: () => void;
    onHover?: () => void;
}

const MiniImage = ({ active, image, onClick = () => {}, onHover = () => {} }: IMiniImage) => {
    return (
        <div
            className={css(
                styles.container,
                active ? styles.active : null
            )}
            onClick={onClick}
            onMouseEnter={onHover}
        >
            <img src={image} alt={image} className={css(styles.image)} />
        </div>
    );
};

export default MiniImage