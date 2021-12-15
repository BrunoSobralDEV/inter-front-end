import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

import logoInter from '../../assets/images/Inter-orange.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                    circulo
                    <div>
                        <p>Olá. <span className="primary-color font-bold">Bruno Sobral</span></p>
                        <strong>22201651-10</strong>
                        <a href="#">Logout</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header