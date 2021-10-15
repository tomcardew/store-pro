import { useWindowWidth } from "@react-hook/window-size";
import { css, StyleSheet } from "aphrodite";
import { Column } from "../layout";
import { Section } from "../layout";

const style = StyleSheet.create({
    container: {
        backgroundColor: "#F0F0F0",
        fontWeight: 300,
        minHeight: 50,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
    copyright: {
        fontSize: 12,
        textAlign: "center",
    },
    sectionContainer: {
        padding: 10,
        width: '100%'
    },
    section: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 12,
        fontWeight: 600,
        marginBottom: 10,
        ":hover": {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
});

const finalSections = [
    "Acerca de",
    "Términos y condiciones",
    "Cómo cuidamos tu privacidad",
    "Ayuda",
];

const Footer = () => {
    const width = useWindowWidth();

    const calculateSectionCols = (): number => {
        if (width > 800) return finalSections.length;
        return Math.floor(finalSections.length / 2);
    };

    return (
        <Column style={style.container}>
            <Section
                style={style.sectionContainer}
                columns={calculateSectionCols()}
                colGap={10}
                rowGap={10}
            >
                {finalSections.map((section) => (
                    <div className={css(style.section)}>{section}</div>
                ))}
            </Section>
            <div className={css(style.copyright)}>
                El contenido de esta página web está protegido por copyright y
                es propiedad de Dadel Software Solutions.
            </div>
            <div className={css(style.copyright)}>
                ® {new Date().getFullYear()}
            </div>
        </Column>
    );
};

export default Footer;
