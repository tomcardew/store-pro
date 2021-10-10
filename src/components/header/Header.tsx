import { css, StyleSheet } from "aphrodite";
import { useHistory } from "react-router-dom";

import { HeaderLink } from "../button";
import Section from "../layout/Section";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40
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
    activePath?: string
}

const Header = ({ activePath = "/" }: IHeader) => {

    const history = useHistory()

    const handleLinkClick = (path: string) => {
        history.push(path)
    };

    return (
        <div className={css(styles.container)}>
            <Section flex={1} justify="flex-start">
                <img
                    className={css(styles.logo)}
                    src="https://logos-marcas.com/wp-content/uploads/2020/04/HM-Logo.png"
                    alt="Logo"
                />
            </Section>
            <Section flex={2}>
                {links.map((item) => (
                    <HeaderLink
                        active={item.path === activePath}
                        onClick={() => handleLinkClick(item.path)}
                    >
                        {item.name}
                    </HeaderLink>
                ))}
            </Section>
            <Section flex={1} justify="flex-end">
                3
            </Section>
        </div>
    );
};

export default Header;