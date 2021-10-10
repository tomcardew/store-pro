import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        height: "100%",
    },
});

interface ISection {
    justify?: "flex-start" | "center" | "flex-end";
    align?: "flex-start" | "center" | "flex-end";
    flex?: number;
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const Section = ({
    children,
    justify = "center",
    align = "center",
    flex = 1,
}: ISection) => {
    return (
        <div
            className={css(styles.container)}
            style={{
                flex: flex,
                justifyContent: justify,
                alignItems: align,
            }}
        >
            {children}
        </div>
    );
};

export default Section;
