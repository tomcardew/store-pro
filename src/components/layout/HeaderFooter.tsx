import { css, StyleSheet } from "aphrodite";
import { Footer } from "../footer";
import { Header } from "../header";

const style = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 0,
        paddingBottom: 0,
        "@media (max-width: 600px)": {
            padding: 0,
        },
    },
});

interface IHeaderFooter {
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const HeaderFooter = ({ children }: IHeaderFooter) => {
    return (
        <div className={css(style.container)}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default HeaderFooter;
