import { Wrapper } from "./style";
import Ins from "./rasmlar/ins.png"
import Yuotube from "./rasmlar/youtube.png"

function Buttom(){
    return(
        <Wrapper>
            <div>
             <h2>Bizning ijtimoiy sahifalarimiz</h2>  
             <img src={Ins} alt="" srcset="" />  
             <img src={Yuotube} alt="" srcset="" />  
            </div>      
            <div>
              <h2>Bizning manzilimiz</h2>
              <p>Ўзбекистон, Тошкент, 100185
                Сўгалли ота кўчаси, 5-уй</p>
            </div>      
            <div>
              <h2>Biz bilan bog'lanish</h2>  
            </div>      
        </Wrapper>
    )
}
export default Buttom;