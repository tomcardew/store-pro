import { css, StyleSheet } from "aphrodite";
import { Section } from ".";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#F1F1F1",
        marginTop: 20
    },
    title: {
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 20
    },
    addendums: {
        display: "flex",
        justifyContent: "flex-end",
    },
});

interface ITitleSection {
    title: string;
    utilities?: JSX.Element | JSX.Element[] | string | string[];
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const TitleSection = ({ utilities, title, children }: ITitleSection) => {
    return (
        <div className={css(styles.container)}>
            <Section columns={2}>
                <span className={css(styles.title)}>{title}</span>
                <div className={css(styles.addendums)}>{utilities}</div>
            </Section>
            {children}
        </div>
    );
};

export default TitleSection;
