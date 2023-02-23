import { Link } from "react-router-dom";
import Yangi_maqolalar from "./maqolaalr";
import BasicTabs from "./menu";
import { Wrapper } from "./style";


function BoshSahifa() {
    return (
        <Wrapper>
            <div className="maqolalar">
                <BasicTabs />
            </div>
            <div className="yangiliklar">
                <h1>Yangiliklar</h1>
            </div>
            <div className="xadislar">
                <h1>Xadislar</h1>
            </div>
        </Wrapper>
    )
}
export default BoshSahifa;