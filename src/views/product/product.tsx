import HeaderFooter from "../../components/layout/HeaderFooter";
import {
    // useHistory,
    useParams,
} from "react-router-dom";
import { ImageSelector } from "../../components/image-selector";
import { Section } from "../../components/layout";
import { useWindowWidth } from "@react-hook/window-size";
import TitleSection from "../../components/layout/TitleSection";
import { IconButton } from "../../components/button";
import ProductDesc from "./product-desc";
import { slugToProductName } from "../../utils";

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

    const favButton = () => {
        return <IconButton imagePath="/assets/icons/like.png" />;
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
                            "https://img.ltwebstatic.com/images3_pi/2021/07/21/162685022499ec3a0b5599c6f3ed574474e5f2f2fa_thumbnail_600x.webp",
                            "https://img.ltwebstatic.com/images3_pi/2021/07/21/16268502264955f6e96647eb90ed06c6cfec2315eb_thumbnail_600x.webp",
                            "https://img.ltwebstatic.com/images3_pi/2021/07/21/16268502279078196e3e6f429d91ab99da977c4614_thumbnail_600x.webp",
                            "https://img.ltwebstatic.com/images3_pi/2021/07/21/1626850230092cf26784ff8a871a32be4a57d4775a_thumbnail_600x.webp",
                            "https://img.ltwebstatic.com/images3_pi/2021/07/21/162685023310c8bcb7e7496b5d363e25d2d296175c_thumbnail_600x.webp",
                            "https://img.ltwebstatic.com/images3_pi/2021/07/21/1626850235ce50d7d0c7c3d18cd487cfbc30f0090b_thumbnail_600x.webp",
                        ]}
                    />
                </div>
                <TitleSection
                    title={slugToProductName(slug)}
                    noBorder
                    utilities={favButton()}
                >
                    <ProductDesc />
                </TitleSection>
            </Section>
        </HeaderFooter>
    );
};

export default ProductView;
