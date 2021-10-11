import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        color: "white",
        border: "2px solid transparent",
        padding: 6,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 0,
        transition: "100ms linear all",
        fontWeight: 600,
        transform: "scale(1)",
        ":hover": {
            cursor: "pointer",
            borderBottom: "2px solid white"
        },
        ":active": {
            transform: "scale(0.95)"
        }
    },
});

interface IButton {
    style?: any;
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const Button = ({ style, children }: IButton) => {
    return <button className={css(styles.container, style)}>{children}</button>;
};

export default Button;
