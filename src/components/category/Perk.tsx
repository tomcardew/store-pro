import { css, StyleSheet } from "aphrodite";
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        border: "1px solid rgba(0, 0, 0, 0.1)",
        marginTop: 10,
    },
    image: {
        height: 100,
        width: 75,
        objectFit: "contain",
    },
    title: {
        fontWeight: 600,
        fontSize: 18,
        margin: 10,
        textAlign: "center",
    },
    description: {
        fontWeight: 400,
        fontSize: 14,
        opacity: 0.75,
        margin: 10,
        textAlign: "center",
    },
    link: {
        color: "#3483fa",
        fontSize: 14,
        fontWeight: 500,
        margin: 10,
        textAlign: "center",
        ":hover": {
            cursor: "pointer",
        },
    },
});

interface IPerk {
    imageUrl?: string;
    title: string;
    description: string;
    link: {
        label: string;
        path: string;
    };
}

const Perk = ({ imageUrl, title, description, link }: IPerk) => {

    const history = useHistory()

    const openLink = (path: string) => {
        history.push(path)
    }

    return (
        <div className={css(styles.container)}>
            {imageUrl && (
                <img src={imageUrl} alt="" className={css(styles.image)} />
            )}
            <span className={css(styles.title)}>{title}</span>
            <span className={css(styles.description)}>{description}</span>
            <span onClick={() => openLink(link.path)} className={css(styles.link)}>{link.label}</span>
        </div>
    );
};

export default Perk;
