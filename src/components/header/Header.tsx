import { css, StyleSheet } from "aphrodite";
import { useHistory } from "react-router-dom";

import { HeaderLink, IconButton } from "../button";
import { Section } from "../layout";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 40,
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

const Header = ({ activePath = "/" }: IHeader) => {
    const history = useHistory();

    const handleLinkClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={css(styles.container)}>
            <Section columns={3} flex={1} justify="flex-start">
                <div>
                    <img
                        className={css(styles.logo)}
                        src="https://logos-marcas.com/wp-content/uploads/2020/04/HM-Logo.png"
                        alt="Logo"
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {links.map((item) => (
                        <HeaderLink
                            active={item.path === activePath}
                            onClick={() => handleLinkClick(item.path)}
                        >
                            {item.name}
                        </HeaderLink>
                    ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton imagePath="assets/icons/search.png" />
                    <IconButton imagePath="assets/icons/shopping-cart.png" />
                    <IconButton
                        circular
                        imagePath="assets/icons/user-male-circle.png"
                    />
                </div>
            </Section>
            {/* <Section columns={3} flex={2}>
                {links.map((item) => (
                    <HeaderLink
                        active={item.path === activePath}
                        onClick={() => handleLinkClick(item.path)}
                    >
                        {item.name}
                    </HeaderLink>
                ))}
            </Section>
            <Section columns={4} flex={1} justify="flex-end">
                <IconButton imagePath="assets/icons/search.png" />
                <IconButton imagePath="assets/icons/shopping-cart.png" />
                <IconButton
                    circular
                    imagePath="assets/icons/user-male-circle.png"
                />
            </Section> */}
        </div>
    );
};

export default Header;
