import { useWindowWidth } from "@react-hook/window-size";
import { css, StyleSheet } from "aphrodite";
import { Footer } from "../footer";
import { Header } from "../header";
import HeaderMobile from '../header/HeaderMobile';

const style = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 0,
        paddingBottom: 0,
        minWidth: 400,
        "@media (max-width: 600px)": {
            padding: 0,
        },
    },
});

interface IHeaderFooter {
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const HeaderFooter = ({ children }: IHeaderFooter) => {

    const width = useWindowWidth()

    const showMobileHeader = (): boolean => {
        if (width > 800) return false
        return true
    }

    return (
        <div className={css(style.container)}>
            { showMobileHeader() ? <HeaderMobile /> :  <Header />}
            {children}
            <Footer />
        </div>
    );
};

export default HeaderFooter;
