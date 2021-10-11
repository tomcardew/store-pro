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
    },
    selectedElement: {
        opacity: 1,
    },
});

interface ISliderIndicator {
    quantity: number;
    selectedIndex: number;
}

const SliderIndicator = ({ quantity, selectedIndex }: ISliderIndicator) => {
    return (
        <div className={css(styles.container)}>
            {[...Array(quantity)].map((e, i) => (
                <div
                    className={css(
                        styles.element,
                        i === selectedIndex ? styles.selectedElement : null
                    )}
                    key={i}
                ></div>
            ))}
        </div>
    );
};

export default SliderIndicator;
