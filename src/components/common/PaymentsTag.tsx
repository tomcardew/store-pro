import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        backgroundColor: "black",
        color: 'white',
        fontSize: 12,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        maxWidth: 150,
        textAlign: 'center'
    },
});

const PaymentsTag = () => {
    return <div className={css(styles.container)}>Llévatelo a 3 pagos de $156.90*</div>;
};

export default PaymentsTag;
