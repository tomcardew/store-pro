import HeaderFooter from "../../components/layout/HeaderFooter";
import {
    // useHistory,
    useParams,
} from "react-router-dom";
import { ImageSelector } from "../../components/image-selector";
import { Section } from "../../components/layout";
import { useWindowWidth } from "@react-hook/window-size";

type ProductViewParams = {
    slug: string;
};

const ProductView = () => {
    // const history = useHistory()
    const { slug } = useParams<ProductViewParams>();

    const width = useWindowWidth();

    const calculateSectionCols = (): number => {
        if (width > 800) return 2;
        return 1;
    };

    return (
        <HeaderFooter>
            <Section columns={calculateSectionCols()}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ImageSelector
                        width={400}
                        images={[
                            "https://lp2.hm.com/hmgoepprod?set=source[/34/a8/34a80d2bb6ab679d811745ade10a77bbb85027d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
                            "https://lp2.hm.com/hmgoepprod?set=source[/e0/8b/e08ba7be49bcaa06a6d112254fcc35d88b460e5a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
                            "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/ladies_s04/magazine-2021-s04/1084A-3x2-Magazine-Landscape-1688x11264_72ppi_1.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]",
                        ]}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {slug}
                </div>
            </Section>
        </HeaderFooter>
    );
};

export default ProductView;
