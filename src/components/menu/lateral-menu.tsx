import { css, StyleSheet } from "aphrodite";
import { Column } from "../layout";

const styles = StyleSheet.create({
    backdrop: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000000C0",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 100,
    },
    icon: {
        position: "fixed",
        right: "calc(12.5vw - 12px)",
        top: "calc(12.5vw - 12px)",
        zIndex: 101,
        height: 24,
        width: 24,
        filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(106%) contrast(102%)",
        ":hover": {
            cursor: "pointer",
        },
    },
    container: {
        height: "100vh",
        width: "75%",
        backgroundColor: "white",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 101,
    },
});

interface ILateralMenu {
    children?: JSX.Element | JSX.Element[] | string | string[];

    onClose?: () => void
}

const LateralMenu = ({ children, onClose = () => {} }: ILateralMenu) => {
    return (
        <div>
            <div className={css(styles.backdrop) + " fadeIn"} />
            <img
                className={css(styles.icon) + " fadeIn"}
                src="assets/icons/close.svg"
                alt="Cerrar menú"
                onClick={onClose}
            />
            <div className={css(styles.container) + " slideInLeft"}>
                <Column>{children}</Column>
            </div>
        </div>
    );
};

export default LateralMenu;
