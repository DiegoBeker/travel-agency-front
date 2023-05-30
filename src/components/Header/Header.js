import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo } from "./style";
import { ImAirplane } from "react-icons/im";

export default function Header() {
    const navigate = useNavigate();
    
    function goToHome(){
        navigate("/");
    }

    return (
        <HeaderContainer>
            <Logo>
                <ImAirplane />
                <h1>Viagens Alucinantes</h1>
            </Logo>
            <span onClick={goToHome}>Home</span>
        </HeaderContainer>
    );
};
