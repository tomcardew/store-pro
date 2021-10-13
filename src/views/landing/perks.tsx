import { useWindowWidth } from "@react-hook/window-size";
import { Perk } from "../../components/category";
import { Section } from "../../components/layout";

const data = [
    {
        imageUrl: "https://img.icons8.com/fluency-systems-regular/75/000000/card-in-use.png",
        title: "Elige cómo pagar",
        description: "Paga con tarjeta, débito o efectivo. También puedes pagar en hasta 12 mensualidades sin tarjeta con Crédito+.",
        link: {
            label: "Ver métodos de pago",
            path: "/about/payment-methods",
        },
    },
    {
        imageUrl: "https://img.icons8.com/fluency-systems-regular/75/000000/in-transit.png",
        title: "Envío gratis desde $ 299",
        description: "Con solo estar registrado, tienes envíos gratis en millones de productos seleccionados.",
        link: {
            label: "Conoce más sobre este beneficio",
            path: "/about/free-shipping",
        },
    },
    {
        imageUrl: "https://img.icons8.com/fluency-systems-regular/75/000000/keyhole-shield.png",
        title: "Seguridad, de principio a fin",
        description: "¿No te gusta? ¡Devuélvelo! No hay nada que no puedas hacer, porque estás siempre protegido.",
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
