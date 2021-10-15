import { css, StyleSheet } from "aphrodite";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
        height: 40,
        objectFit: "contain",
    },
    menuIcon: {
        height: 24,
        width: 24,
        objectFit: "contain",
    },
});

const links = [
    {
        name: "HOME",
        path: "/",
    },
    {
        name: "COLLECTIONS",
        path: "/collections",
    },
    {
        name: "FEATURED",
        path: "/featured",
    },
];

interface IHeader {
    activePath?: string;
}

const HeaderMobile = ({ activePath = "/" }: IHeader) => {
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
                        imagePath="assets/icons/menu.svg"
                        onClick={toggleMenu}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        className={css(styles.logo)}
                        src="icon.svg"
                        alt="Logo"
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: 20,
                    }}
                >
                    <IconButton imagePath="assets/icons/search.png" />
                    <IconButton imagePath="assets/icons/shopping-cart.png" />
                    <IconButton
                        circular
                        imagePath="assets/icons/user-male-circle.png"
                    />
                </div>
            </Section>
            {menuOpen && (
                <LateralMenu onClose={toggleMenu}>
                    {links.map((item) => (
                        <div style={{ marginTop: 40 }}>
                            <HeaderLink
                                active={item.path === activePath}
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
