import { css, StyleSheet } from "aphrodite";
import { Column } from "../layout";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        fontWeight: 300,
        height: 50,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    copyright: {
        fontSize: 12,
        textAlign: 'center'
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
