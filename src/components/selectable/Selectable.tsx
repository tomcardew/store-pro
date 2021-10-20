import { css, StyleSheet } from "aphrodite";
import { SelectableButton } from "../button";
import Column from "../layout/Columns";

const styles = StyleSheet.create({
    horizontal: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10
    },
    title: {
        fontWeight: 500,
        fontSize: 16,
        marginRight: 10
    },
    unselected: {
        fontWeight: 400,
        fontSize: 12,
        opacity: 0.25
    }
});

interface ISelectable {
    list?: any[]
    selectedIndex?: number;
    utilities?: JSX.Element | JSX.Element[] | string | string[];
}

const Selectable = ({ list = [], selectedIndex = 0, utilities }: ISelectable) => {

    return (
        <Column justify="flex-start" align="flex-start">
            <div className={css(styles.horizontal)}>
                <span className={css(styles.title)}>Talla:</span>
                <span className={css(styles.unselected)}>Selecciona una talla</span>
            </div>
            {list && <div className={css(styles.horizontal)}>
                {list.map( (item: any, index: number) => <SelectableButton active={selectedIndex === index} >{ item }</SelectableButton> )}
                {utilities}
            </div>}
        </Column>
    );
};

export default Selectable;
