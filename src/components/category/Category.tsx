import { useHistory } from "react-router-dom";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        width: "100%",
        ":hover": {
            cursor: "pointer",
        }
    },
    image: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        transition: "300ms linear all",
        ":hover": {
            position: "absolute",
            transform: "scale(0.95)",
            borderRadius: 5,
        },
    },
    label: {
        position: "absolute",
        left: 20,
        bottom: 20,
        color: "white",
        fontWeight: 700,
        fontSize: 24,
        textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
    },
});

interface ICategory {
    label?: string;
    height?: number;
    imageUrl: string;
    path: string;

    onClick?: () => void;
}

const Category = ({
    label,
    height = 300,
    imageUrl,
    path,
    onClick,
}: ICategory) => {
    const history = useHistory();

    const openPath = (path: string) => {
        history.push(path);
    };

    return (
        <div
            style={{
                height: height,
            }}
            className={css(styles.container)}
            onClick={() => (onClick ? onClick() : openPath(path))}
        >
            <img className={css(styles.image)} src={imageUrl} alt={label} />
            <span className={css(styles.label)}>{label}</span>
        </div>
    );
};

export default Category;
