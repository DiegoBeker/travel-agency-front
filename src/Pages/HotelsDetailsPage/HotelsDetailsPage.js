import { useParams } from "react-router-dom";
import { AmenitiesContainer, Content, HotelContent, InfoContainer, PageContainer, PicturesContainer } from "./style";
import Header from "../../components/Header/Header";

export default function HotelsDetailsPage() {
    const { cityName, hotelId } = useParams();

    return (
        <PageContainer>
            <Header />
            <Content>
                <h2>Hotel 1</h2>
                <PicturesContainer>
                    <img src="https://img.freepik.com/vetores-premium/fundo-de-edificio-de-hotel-flat_23-2148146118.jpg?w=2000" alt="" />
                    <img src="https://img.freepik.com/vetores-premium/fundo-de-edificio-de-hotel-flat_23-2148146118.jpg?w=2000" alt="" />
                    <img src="https://img.freepik.com/vetores-premium/fundo-de-edificio-de-hotel-flat_23-2148146118.jpg?w=2000" alt="" />
                    <img src="https://img.freepik.com/vetores-premium/fundo-de-edificio-de-hotel-flat_23-2148146118.jpg?w=2000" alt="" />
                    <img src="https://img.freepik.com/vetores-premium/fundo-de-edificio-de-hotel-flat_23-2148146118.jpg?w=2000" alt="" />
                </PicturesContainer>
                <HotelContent>
                    <InfoContainer>
                        <h3>Características</h3>
                        <ul>
                            <li>Local: Salvador</li>
                            <li>Descrição: mslamls mlsmalms mmsmsmsmmla mmslamsmsm </li>
                            <li>Preço: R$ 199.00</li>
                        </ul>
                    </InfoContainer>
                    <AmenitiesContainer>
                        <h3>Comodidades</h3>
                        <ul>
                            <li>Piscina</li>
                            <li>Estacionamento</li>
                            <li>Wifi</li>
                        </ul>
                    </AmenitiesContainer>
                </HotelContent>
            </Content>
        </PageContainer>
    );
};
