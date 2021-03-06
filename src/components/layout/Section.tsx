import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        display: "grid",
        height: "100%"
    },
});

interface ISection {
    justify?: "flex-start" | "center" | "flex-end";
    align?: "flex-start" | "center" | "flex-end";
    flex?: number;
    columns?: number;
    colGap?: number;
    rowGap?: number;
    style?: any;
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const Section = ({
    children,
    justify = "center",
    align = "center",
    flex = 1,
    columns = 4,
    colGap = 0,
    rowGap = 0,
    style = null
}: ISection) => {
    return (
        <div
            className={css(styles.container, style)}
            style={{
                flex: flex,
                justifyContent: justify,
                alignItems: align,
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                columnGap: colGap,
                rowGap
            }}
        >
            {children}
        </div>
    );
};

export default Section;
