import { useWindowWidth } from "@react-hook/window-size";
import { css, StyleSheet } from "aphrodite";
import { Footer } from "../footer";
import { Header, HeaderMobile } from "../header";

const style = StyleSheet.create({
    container: {
        padding: 0,
        paddingTop: 60,
        paddingBottom: 0,
        minWidth: 400
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
