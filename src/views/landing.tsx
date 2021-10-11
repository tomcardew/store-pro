import { HeaderFooter } from "../components/layout"
import { FullscreenSlider } from "../components/slider"
import { FullscreenSliderElement } from "../interfaces/Sliders"

const defaultItems: FullscreenSliderElement[] = [
    {
        title: "For The Love of Art",
        subtitle: "Descubre nuestra colaboración con tres vibrantes artistas, ¡disponible ahora!",
        image: "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/ladies_s04/magazine-2021-s04/1084A-3x2-Magazine-Landscape-1688x11264_72ppi_1.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]"
    }
] 

const LandingView = () => {

    return (
        <HeaderFooter>
            <FullscreenSlider items={defaultItems} />
        </HeaderFooter>
    )

}

export default LandingView