import { css, StyleSheet } from "aphrodite";
import { Column } from "../layout";
import { useState } from "react";
import { MiniImage } from ".";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 20,
        maxWidth: "100vw !important",
        '@media (max-width: 800px)': {
            width: '100vw !important'
        }
    },
    mainImage: {
        objectFit: "contain",
        width: "calc(100% - 50px)",
        height: "auto",
        maxHeight: 400
    },
});

interface IImageSelector {
    images?: string[];
    width?: number;
}

const ImageSelector = ({ width = 300, images = [] }: IImageSelector) => {
    const [current, setCurrent] = useState(0);

    return (
        <div
            className={css(styles.container)}
            style={{
                width,
                height: width,
            }}
        >
            {images.length > 0 && (
                <img
                    src={images[current]}
                    alt={images[current]}
                    className={css(styles.mainImage)}
                />
            )}
            <Column>
                {images.map((image: string, index: number) => (
                    <MiniImage
                        image={image}
                        active={index === current}
                        onHover={() => setCurrent(index)}
                    />
                ))}
            </Column>
        </div>
    );
};

export default ImageSelector;
