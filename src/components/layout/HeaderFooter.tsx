import { Header } from "../header"

interface IHeaderFooter {
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const HeaderFooter = ({ children }: IHeaderFooter) => {
    return (
        <div style={{
            padding: 40,
            paddingTop: 0,
            paddingBottom: 0
        }}>
            <Header />
            {children}
        </div>
    )
};

export default HeaderFooter;
