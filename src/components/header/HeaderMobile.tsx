import { css, StyleSheet } from "aphrodite";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { HeaderLink, IconButton } from "../button";
import { Section } from "../layout";
import { LateralMenu } from "../menu";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'fixed',
        backgroundColor: 'white',
        zIndex: 1000
    },
    logo: {
        height: 30,
        objectFit: "contain",
        cursor: 'pointer'
    },
    menuIcon: {
        height: 24,
        width: 24,
        objectFit: "contain",
    },
});

export const links = [
    {
        name: "INICIO",
        path: "/",
    },
    {
        name: "COLECCIONES",
        path: "/collections",
    },
    {
        name: "OFERTAS",
        path: "/featured",
    },
];

const HeaderMobile = () => {
    const location = useLocation()
    const history = useHistory();

    const handleLinkClick = (path: string) => {
        history.push(path);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={css(styles.container)}>
            <Section columns={3} justify="flex-start">
                <div style={{ paddingLeft: 0 }}>
                    <IconButton
                        imagePath="/assets/icons/menu.svg"
                        onClick={toggleMenu}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        className={css(styles.logo)}
                        src="/icon.svg"
                        alt="Logo"
                        onClick={() => handleLinkClick('/')}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: 20,
                    }}
                >
                    <IconButton imagePath="/assets/icons/search.svg" />
                    <IconButton imagePath="/assets/icons/shopping-cart.svg" />
                    <IconButton
                        circular
                        imagePath="/assets/icons/user-male-circle.svg"
                    />
                </div>
            </Section>
            {menuOpen && (
                <LateralMenu onClose={toggleMenu}>
                    {links.map((item) => (
                        <div style={{ marginTop: 40 }}>
                            <HeaderLink
                                active={item.path === location.pathname}
                                onClick={() => handleLinkClick(item.path)}
                            >
                                {item.name}
                            </HeaderLink>
                        </div>
                    ))}
                </LateralMenu>
            )}
        </div>
    );
};

export default HeaderMobile;
