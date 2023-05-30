import { useNavigate, useParams } from "react-router-dom";
import { Content, Filters, Hotelscontainer, PageContainer, RightContent } from "./style";
import Header from "../../components/Header/Header";
import Hotel from "../../components/Hotel/Hotel";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HotelsPage() {
    const { cityName } = useParams();
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    function openDetails(id){
        navigate(`/hotels/${cityName}/${id}`);
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/hotels/${cityName}`)
            .then((response)=> {
                console.log(response.data);
                setHotels(response.data);
            })
            .catch((err) => console.log(err));
            // eslint-disable-next-line
    },[])

    return (
        <PageContainer>
            <Header />
            <Content>
                <Filters>
                    <label>Preço Mínimo</label>
                    <input type="text"></input>
                    <label>Preço Máximo</label>
                    <input type="text"></input>
                    <button>Aplicar</button>
                </Filters>

                <RightContent>
                    <h2>Hospedagens em {cityName}</h2>
                    <Hotelscontainer>
                        {hotels.map(h => <Hotel key={h.id} hotel={h} openDetails={openDetails}/>)}
                    </Hotelscontainer>
                </RightContent>
            </Content>
        </PageContainer>
    );
};
