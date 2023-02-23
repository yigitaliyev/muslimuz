import { Wrapper } from "./style";
import Logo from "../navbar/rasmlar/loggo.jpg"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Wrapper>
            <div className="top_container" >
                <div className="logo_container">
                    <img src={Logo} alt="" srcset="" />
                    <input type="search" name="" id="" placeholder="Qidirish....." />
                    <button>Qidirish</button>
                </div>
                <div className="login-container">
                    <Link to="/login"><button>Kirish</button></Link>
                    <Link to="/signup"><button>Ro'yxatdan o'tish</button></Link>
                </div>
            </div>
            <div className="line"></div>
            <div className="pages">
                <ul>
                    <li>
                        <Link to="/">Bosh sahifa</Link>
                    </li>
                    <li>
                        <Link to="/maqolalar">Maqolalar</Link>
                    </li>
                    <li>
                        <Link to="/islom">Islom</Link>
                    </li>
                    <li>
                        <Link to="/oila">Oila va jamiat</Link>
                    </li>
                    <li>
                        <Link to="/bekajon">Bekajon</Link>
                    </li>
                    <li>
                        <Link to="/yangiliklar">Yangiliklar</Link>
                    </li>
                    <li>
                        <Link to="/salomatlik">Salomatlik</Link>
                    </li>
                    <li>
                        <Link to="/kutubxona">Kutubxona</Link>
                    </li>
                </ul>
                <button>Savol berish</button>
            </div>

        </Wrapper>
    )
}
export default Navbar;