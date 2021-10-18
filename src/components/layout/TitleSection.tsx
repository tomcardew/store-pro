import { css, StyleSheet } from "aphrodite";
import { Section } from ".";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20
    },
    section: {
        marginBottom: 20
    },
    title: {
        fontWeight: 700,
        fontSize: 20
    },
    addendums: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
});

interface ITitleSection {
    title: string;
    noBorder?: boolean;
    utilities?: JSX.Element | JSX.Element[] | string | string[];
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const TitleSection = ({
    utilities,
    title,
    children,
    noBorder
}: ITitleSection) => {
    return (
        <div
            className={css(styles.container)}
            style={{
                border: noBorder ? "unset" : "1px solid rgba(0, 0, 0, 0.1)"
            }}
        >
            <Section columns={2} style={styles.section}>
                <span className={css(styles.title)}>{title}</span>
                <div className={css(styles.addendums)}>{utilities}</div>
            </Section>
            {children}
        </div>
    );
};

export default TitleSection;
