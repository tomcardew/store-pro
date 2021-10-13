import { useWindowWidth } from "@react-hook/window-size";
import { Section, TitleSection } from "../../components/layout";
import { StoreItem } from "../../components/store-item";

const items = [
    {
        label: "Chamarra impermeable acolchada",
        price: 799,
        prevPrice: 1099,
        slug: "chamarra-impermable-acolchada-s1hg",
        imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/5f/d1/5fd177133f08e43c2e1de0fc1b959f33c0f54763.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        liked: false,
    },
    {
        label: "Sobrecamisa afieltrada",
        price: 399,
        slug: "sobrecamisa-afieltrada",
        imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/e0/8b/e08ba7be49bcaa06a6d112254fcc35d88b460e5a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        liked: true,
    },
    {
        label: "Camisa Muscle Fit cuello mao",
        price: 399,
        slug: "camisa-muscle-fit-cuello-mao",
        imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/b0/c4/b0c45fc713c6503e7cd14c3d24950e0947a5577f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        liked: false,
    },
    {
        label: "Jeans Slim",
        price: 299.5,
        slug: "jeans-slim",
        imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/45/81/4581ecab3f6146f4d7ad6093d433a01db7774cc5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        liked: true,
    },
    {
        label: "3-pack playeras Regular Fit",
        price: 549,
        slug: "3-pack-playeras-regular-fit",
        imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/34/a8/34a80d2bb6ab679d811745ade10a77bbb85027d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        liked: false,
    },
    {
        label: "Sudadera con gorro",
        price: 549,
        slug: "sudadera-con-gorro",
        imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=source[/c7/88/c78858ca6d3b7e926f0650c0889147d91103621f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        liked: false,
    },
];

const Featured = () => {
    const width = useWindowWidth();

    const calculateSectionCols = (): number => {
        if (width > 1000) return 6;
        if (width > 750) return 4;
        return 2
    };

    return (
        <TitleSection title="Lo más vendido">
            <Section colGap={20} rowGap={20} columns={calculateSectionCols()}>
                {items.map((element) => (
                    <StoreItem
                        label={element.label}
                        prevPrice={element.prevPrice}
                        price={element.price}
                        slug={element.slug}
                        imageUrl={element.imageUrl}
                        liked={element.liked}
                    />
                ))}
            </Section>
        </TitleSection>
    );
};

export default Featured;
