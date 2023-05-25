import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { CitiesContainer, PageContainer, Step, StepsContainer, StepsInfo } from "./style";
import axios from "axios";
import City from "../../components/City/City";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/cities`)
            .then((response)=> {
                console.log(response.data);
                setCities(response.data);
            })
            .catch((err) => console.log(err))
    },[]);

    function visitCity(name,id){
        navigate(`/flights/to/${name}/${id}`);
    }

    return (
        <PageContainer>
            <Header />
            <StepsInfo>
                <h2>Planeje sua viagem</h2>
                <StepsContainer>
                    <Step><p>1. Escolha uma cidade que deseja visitar</p></Step>
                    <Step><p>2. Veja as passagens disponíveis</p></Step>
                    <Step><p>3. Veja as opções de hospedagem com todo o conforto que você merece</p></Step>
                </StepsContainer>
                <CitiesContainer>
                    {cities.map((c) => <City key={c.id} id={c.id} city={c} visitCity={visitCity}/>)}
                </CitiesContainer>
            </StepsInfo>
        </PageContainer>
    );
};
