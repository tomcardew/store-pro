import { css, StyleSheet } from "aphrodite";
import { useHistory, useLocation } from "react-router-dom";

import { HeaderLink, IconButton } from "../button";
import { Section } from "../layout";
import { links } from "./HeaderMobile";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'fixed',
        left: 0,
        backgroundColor: 'white',
        zIndex: 1000
    },
    logo: {
        height: 30,
        objectFit: "contain",
        cursor: 'pointer'
    }
});

// interface IHeader {
//     activePath?: string;
// }

const Header = () => {
    const location = useLocation()
    const history = useHistory();

    const handleLinkClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={css(styles.container)}>
            <Section columns={3} flex={1} justify="flex-start">
                <div style={{ paddingLeft: 20 }}>
                    <img
                        className={css(styles.logo)}
                        src="/logo.svg"
                        alt="Logo"
                        onClick={() => handleLinkClick('/')}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {links.map((item) => (
                        <HeaderLink
                            active={item.path === location.pathname}
                            onClick={() => handleLinkClick(item.path)}
                        >
                            {item.name}
                        </HeaderLink>
                    ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 20 }}>
                    <IconButton imagePath="/assets/icons/search.svg" />
                    <IconButton imagePath="/assets/icons/shopping-cart.svg" badgeCount={2} />
                    <IconButton
                        circular
                        imagePath="/assets/icons/user-male-circle.svg"
                    />
                </div>
            </Section>
        </div>
    );
};

export default Header;
