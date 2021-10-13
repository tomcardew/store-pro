import { StyleSheet, css } from "aphrodite";
import { useState } from "react";
import { SliderIndicator } from ".";
import { FullscreenSliderElement } from "../../interfaces/Sliders";
import { Button } from "../button";

const styles = StyleSheet.create({
    container: {
        height: "calc(100vh - 60px)",
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    hidden: {
        display: "none",
    },
    callToAction: {
        position: "absolute",
        width: "calc(100% - 80px)",
        height: "calc(100vh - 60px)",
        top: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "300ms linear all",
    },
    callToActionButton: {
        marginLeft: -5,
        marginTop: 10,
        backgroundColor: 'white',
        color: 'black'
    },
    callToActionTitleContainer: {
        position: "absolute",
        left: 40,
        bottom: 40,
        backgroundColor: "#000000",
        padding: 20,
        borderRadius: 0,
        color: "white",
        maxWidth: 350,
    },
    callToActionTitle: {
        fontWeight: 600,
        margin: 0,
        marginBottom: 10,
    },
    callToActionSubtitle: {
        fontWeight: 300,
        margin: 0,
    },
});

interface IFullscreenSlider {
    items: FullscreenSliderElement[];
}

const FullscreenSlider = ({ items }: IFullscreenSlider) => {

    const [state, setState] = useState(0);

    return (
        <div className={css(styles.container)}>
            {items.map((item, i) => (
                <img
                    className={css(
                        styles.image,
                        i !== state ? styles.hidden : null
                    )}
                    src={item.image}
                    alt=""
                />
            ))}
            <div
                className={css(styles.callToAction)}
                style={{
                    marginLeft: 10 * state,
                }}
            >
                <span className={css(styles.callToActionTitleContainer)}>
                    <p className={css(styles.callToActionTitle)}>
                        {items[state].title}
                    </p>
                    {items[state].subtitle && (
                        <p className={css(styles.callToActionSubtitle)}>
                            {items[state].subtitle}
                        </p>
                    )}
                    <Button style={styles.callToActionButton}>
                        {items[state].callToAction?.label ||
                            "Ver más"}
                    </Button>
                </span>
            </div>
            {items.length > 1 && (
                <SliderIndicator
                    quantity={items.length}
                    selectedIndex={state}
                    onClick={(index) => setState(index)}
                />
            )}
        </div>
    );
};

export default FullscreenSlider;
