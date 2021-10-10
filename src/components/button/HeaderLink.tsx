import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    element: {
        marginLeft: 10,
        marginRight: 10,
        ":hover": {
            cursor: "pointer",
        },
    },
});

interface IHeaderLink {
    active?: boolean;
    link?: string;
    children?: JSX.Element | JSX.Element[] | string | string[];

    onClick?: () => void;
}

const HeaderLink = ({ active, children, onClick = () => {} }: IHeaderLink) => {
    return (
        <span
            className={css(styles.element)}
            style={{
                fontWeight: active ? 700 : 500,
            }}
            onClick={onClick}
        >
            {children}
        </span>
    );
};

export default HeaderLink;
