import { Category } from "../../components/category";
import { Section } from "../../components/layout";
import { useWindowWidth } from '@react-hook/window-size'

const list = [
    {
        imageUrl: "assets/images/categories/women.jpg",
        path: "/category/women",
        label: "Para mujer"
    },
    {
        imageUrl: "assets/images/categories/men.jpg",
        path: "/category/men",
        label: "Para hombre"
    },
    {
        imageUrl: "assets/images/categories/children.jpg",
        path: "/category/children",
        label: "Para niños"
    },
    {
        imageUrl: "assets/images/categories/accessories.jpeg",
        path: "/category/accessories",
        label: "Accesorios"
    },
]

const Categories = () => {

    const width = useWindowWidth()

    const calculateSectionCols = (): number => {
        if (width > 800) return 4
        return 2
    }

    return (
        <Section columns={calculateSectionCols()}>
            {list.map( item => <Category imageUrl={item.imageUrl} label={item.label} path={item.path} /> )}
        </Section>
    );
};

export default Categories;
