import data from "./data";
import { Wrapper } from "./style";


function BoshSahifa() {
    return (
        <Wrapper>
            <div className="maqolalar">
                <h1>Maqolalar</h1>
                {
                    data.map(item => {
                        return (
                            <div className="container" key={item.id} >
                                <h5>{item.name}</h5>
                                <div className="box">
                                    <p>{item.text}</p>
                                    <img src={item.img} alt="" srcset="" />
                                </div>
                            </div>
                        )
                    })
                }
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