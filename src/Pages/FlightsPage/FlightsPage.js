import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Content, Filters, Flightscontainer, PageContainer } from "./style";
import Flight from "../../components/Flight/Flight";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FlightsPage() {
    const { cityId,cityName } = useParams();
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/flights/to/${cityId}`)
            .then((response) => setFlights(response.data))
            .catch((err)=> console.log(err));
    // eslint-disable-next-line
    }, []);

    function viewDetails(id){
        navigate(`/flights/${id}`);
    }

    return (
        <PageContainer>
            <Header />
            <Content>
                <Filters />
                <Flightscontainer>
                    <h2>Passagens para {cityName}</h2>
                    {flights.map((f) => <Flight key={f.id} flight={f} viewDetails={viewDetails} />)}
                </Flightscontainer>
            </Content>
        </PageContainer>
    );
};