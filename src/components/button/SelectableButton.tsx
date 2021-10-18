import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        border: "1px solid black",
        color: "black",
        fontSize: 12,
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
        transition: "100ms linear all",
        marginRight: 10,
        paddingRight: 10,
        paddingLeft: 10,
        ":hover": {
            border: "3px solid black",
        },
    },
    selected: {
        backgroundColor: "black",
        color: "white",
    },
});

interface ISelectableButton {
    label?: string;
    active?: boolean;
    size?: number;
    children?: JSX.Element | JSX.Element[] | string | string[];
    onClick?: () => void;
}

const SelectableButton = ({
    active,
    size = 45,
    children,
    onClick = () => {},
}: ISelectableButton) => {
    return (
        <div
            onClick={onClick}
            className={css(styles.container, active ? styles.selected : null)}
            style={{
                minWidth: size,
                height: size
            }}
        >
            {children}
        </div>
    );
};

export default SelectableButton;
