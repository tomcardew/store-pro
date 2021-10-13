import { useWindowWidth } from "@react-hook/window-size";
import { Perk } from "../../components/category";
import { Section } from "../../components/layout";

const data = [
    {
        imageUrl: "https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg",
        title: "Elige cómo pagar",
        description: "Con Mercado Pago, paga con tarjeta, débito o efectivo. También puedes pagar en hasta 12 mensualidades sin tarjeta con Mercado Crédito.",
        link: {
            label: "Cómo pagar con Mercado Pago",
            path: "/about/payment-methods",
        },
    },
    {
        imageUrl: "https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg",
        title: "Envío gratis desde $ 299",
        description: "Con solo estar registrado en Mercado Libre, tienes envíos gratis en millones de productos seleccionados.",
        link: {
            label: "Conoce más sobre este beneficio",
            path: "/about/free-shipping",
        },
    },
    {
        imageUrl: "https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg",
        title: "Seguridad, de principio a fin",
        description: "¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.",
        link: {
            label: "Cómo te protegemos",
            path: "/about/security",
        },
    },
];

const Perks = () => {
    const width = useWindowWidth();

    const calculateSectionCols = (): number => {
        if (width > 1000) return 3;
        if (width > 750) return 2;
        return 1
    };
    return (
        <Section columns={calculateSectionCols()} colGap={10} rowGap={10}>
            {data.map((item) => (
                <Perk
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                />
            ))}
        </Section>
    );
};

export default Perks;
