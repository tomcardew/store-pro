import { css, StyleSheet } from "aphrodite";
import { Badge } from "../badge";

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        marginLeft: 20,
        ":hover": {
            cursor: "pointer",
        },
        position: 'relative'
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
    badgeCount?: number;

    onClick?: () => void;
}

const IconButton = ({
    imagePath,
    circular,
    badgeCount,
    onClick = () => { },
}: IIconButton) => {
    return (
        <div className={css(styles.container)} onClick={onClick}>
            {badgeCount && <Badge count={badgeCount} />}
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
