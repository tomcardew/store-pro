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
    callToAction: {
        position: "absolute",
        width: "calc(100% - 80px)",
        height: "calc(100vh - 60px)",
        top: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    callToActionButton: {
        marginLeft: -5,
        marginTop: 10
    },
    callToActionTitleContainer: {
        position: "absolute",
        left: 40,
        bottom: 40,
        backgroundColor: "#00000090",
        padding: 20,
        borderRadius: 0,
        color: "white",
        maxWidth: 500
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
    const [state, setState] = useState({
        selectedItem: 0,
    });

    return (
        <div className={css(styles.container)}>
            {items.map((item) => (
                <img className={css(styles.image)} src={item.image} alt="" />
            ))}
            <div className={css(styles.callToAction)}>
                <span className={css(styles.callToActionTitleContainer)}>
                    <p className={css(styles.callToActionTitle)}>
                        {items[state.selectedItem].title}
                    </p>
                    {items[state.selectedItem].subtitle && (
                        <p className={css(styles.callToActionSubtitle)}>
                            {items[state.selectedItem].subtitle}
                        </p>
                    )}
                    <Button style={styles.callToActionButton}>Ver más</Button>
                </span>
                <SliderIndicator quantity={3} selectedIndex={0} />
            </div>
        </div>
    );
};

export default FullscreenSlider;
