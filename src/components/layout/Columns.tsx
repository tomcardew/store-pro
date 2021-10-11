import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
});

interface IColumn {
    style?: any;
    justify?: "flex-start" | "center" | "flex-end";
    align?: "flex-start" | "center" | "flex-end";
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const Column = ({
    children,
    justify = "center",
    align = "center",
    style
}: IColumn) => {
    return (
        <div
            className={css(styles.container, style)}
            style={{
                justifyContent: justify,
                alignItems: align,
            }}
        >
            {children}
        </div>
    );
};

export default Column;
