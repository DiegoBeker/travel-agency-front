import { useParams } from "react-router-dom";
import { AmenitiesContainer, Content, HotelContent, InfoContainer, PageContainer, PicturesContainer } from "./style";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HotelsDetailsPage() {
    const { cityName, hotelId } = useParams();
    const [info, setInfo] = useState(undefined);
    console.log(info);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/hotels/${cityName}/${hotelId}`)
            .then((response)=> {
                setInfo(response.data);
            })
            .catch((err) => console.log(err));
    },[]);

    if(info === undefined) return(
        <PageContainer>
            <Header/>
        </PageContainer>
    );

    return (
        <PageContainer>
            <Header />
            <Content>
                <h2>Hotel 1</h2>
                <PicturesContainer>
                    {
                    info.pictures 
                    ? info.pictures.map((p, index) => <img key={index} src={p} alt=""/>)
                    : ""
                    }
                </PicturesContainer>
                <HotelContent>
                    <InfoContainer>
                        <h3>Características</h3>
                        <ul>
                            <li>Local: {cityName}</li>
                            <li>Descrição: {info.description}</li>
                            <li>Preço: R$ {(info.price_per_day/100).toFixed(2)}</li>
                        </ul>
                    </InfoContainer>
                    <AmenitiesContainer>
                        <h3>Comodidades</h3>
                        <ul>
                            {info.amenities.map((a,index) => <li key={index}>{a}</li>)}
                        </ul>
                    </AmenitiesContainer>
                </HotelContent>
            </Content>
        </PageContainer>
    );
};
