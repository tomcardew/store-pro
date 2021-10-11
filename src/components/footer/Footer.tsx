import { css, StyleSheet } from "aphrodite";
import { Column } from "../layout";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        fontWeight: 300,
        height: 50
    },
    copyright: {
        fontSize: 12
    }
})

const Footer = () => {
    return (
        <Column style={style.container}>
            <div className={css(style.copyright)}>El contenido de esta página web está protegido por copyright y es propiedad de Dadel Software Solutions.</div>
            <div className={css(style.copyright)}>® { new Date().getFullYear() }</div>
        </Column>
    );
};

export default Footer;
