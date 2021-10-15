import { HeaderFooter } from "../../components/layout";
import { FullscreenSlider } from "../../components/slider";
import { FullscreenSliderElement } from "../../interfaces/Sliders";
import Categories from "./categories";
import Featured from "./featured";
import Perks from "./perks";

const defaultItems: FullscreenSliderElement[] = [
    {
        title: "Gran rebaja",
        subtitle: "Aprovecha hasta un 50% de descuento en toda la tienda",
        image: "https://i.pinimg.com/originals/32/01/98/320198b81b16a7eb44f0a2f9dbdbabc5.png",
        callToAction: {
            label: "Ver ofertas",
            url: "",
        },
    },
    {
        title: "For The Love of Art",
        subtitle:
            "Descubre nuestra colaboración con tres vibrantes artistas, ¡disponible ahora!",
        image: "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/ladies_s04/magazine-2021-s04/1084A-3x2-Magazine-Landscape-1688x11264_72ppi_1.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]",
    },
    {
        title: "La sudadera con capucha",
        subtitle: "Es la prenda urbana de moda, lúcela a tu manera",
        image: "https://www2.hm.com/content/dam/men_s04/juli_2021/3214e/3214E-3x2-the-hoodie.jpg",
        callToAction: {
            label: "Compra ahora",
            url: "",
        },
    },
    {
        title: "For The Love of Art",
        subtitle:
            "Descubre nuestra colaboración con tres vibrantes artistas, ¡disponible ahora!",
        image: "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/ladies_s04/magazine-2021-s04/1084A-3x2-Magazine-Landscape-1688x11264_72ppi_1.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]",
    },
];

const LandingView = () => {
    return (
        <HeaderFooter>
            <FullscreenSlider items={defaultItems} />
            <Categories />
            <Featured />
            <Perks />
        </HeaderFooter>
    );
};

export default LandingView;
