import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        marginLeft: 20,
        ":hover": {
            cursor: "pointer",
        },
    },
    image: {
        height: "100%",
        width: "100%",
        objectFit: "contain",
    },
});

interface IIconButton {
    imagePath?: string;
    circular?: boolean;

    onClick?: () => void;
}

const IconButton = ({
    imagePath,
    circular,
    onClick = () => {},
}: IIconButton) => {
    return (
        <div className={css(styles.container)} onClick={onClick}>
            <img
                className={css(styles.image)}
                style={{
                    borderRadius: circular ? 24 : 0,
                }}
                src={imagePath}
                alt="Buscar"
            />
        </div>
    );
};

export default IconButton;
