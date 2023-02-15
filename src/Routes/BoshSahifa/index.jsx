import data from "./data";
import { Wrapper } from "./style";


function BoshSahifa() {
    return (
        <Wrapper>
            {
                data.map(item =>{
                    return (
                    <div className="container" key={item.id} >
                        <h1>{item.name}</h1>
                        <p>{item.text}</p>
                        <img src={item.img} alt="" srcset="" />
                    </div>
                )})
            }
        </Wrapper>
    )
}

export default BoshSahifa;