import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    element: {
        height: 6,
        width: 6,
        backgroundColor: "black",
        borderRadius: 6,
        margin: 2,
        opacity: 0.25,
        ":hover": {
            opacity: 0.5,
            cursor: "pointer",
        },
    },
    selectedElement: {
        opacity: 1,
    },
});

interface ISliderIndicator {
    quantity: number;
    selectedIndex: number;

    onClick?: (index: number) => void;
}

const SliderIndicator = ({
    quantity,
    selectedIndex,
    onClick = () => {},
}: ISliderIndicator) => {
    return (
        <div
            className={css(styles.container)}
            style={{
                width: 20 * quantity,
                left: `calc(50% - ${(20 * quantity)/2}px)`,
            }}
        >
            {[...Array(quantity)].map((e, i) => (
                <div
                    className={css(
                        styles.element,
                        i === selectedIndex ? styles.selectedElement : null
                    )}
                    key={i}
                    onClick={() => {
                        onClick(i);
                    }}
                ></div>
            ))}
        </div>
    );
};

export default SliderIndicator;
