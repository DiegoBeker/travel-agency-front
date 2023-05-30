import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Content, Details, PageContainer } from "./style";
import dayjs from "dayjs";

export default function FlightDetailPage() {
    const {cityId,id} = useParams();
    const [flight, setFlight] = useState({});
    const navigate = useNavigate();
    const date = dayjs(flight.departure_time).format("DD/MM/YYYY");
    const departureTime = dayjs(flight.departure_time).format("HH:mm");
    const arrivalTime = dayjs(flight.arrival_time).format("HH:mm");

    console.log(flight);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/flights/${id}`)
            .then((response) => setFlight(response.data))
            .catch((err)=> console.log(err));
    // eslint-disable-next-line
    },[]);

    return (
        <PageContainer>
            <Header/>
            <Content>
                <h2>Passagem para {flight.to_city}</h2>
                <Details>
                    <li>Data: {date}</li>
                    <li>Cidade de destino: {flight.to_city}</li>
                    <li>Cidade de origem: {flight.from_city}</li>
                    <li>Companhia aérea: {flight.airline}</li>
                    <li>Horário de partida: {departureTime}</li>
                    <li>Horário previsto de chegada: {arrivalTime}</li>
                    <li>Preço: R$ {(flight.price/100).toFixed(2)}</li>
                </Details>
                <button onClick={()=>navigate(`/hotels/${flight.to_city}`)}>Ver Hospedagens</button>
                <button onClick={()=>navigate(`/flights/to/${flight.to_city}/${cityId}`)}>Voltar</button>
            </Content>
        </PageContainer>
    );
};
