import data from "./data";


function Yangi_maqolalar(){
    return(
        <div className="data_box">
                {
                    data.map(item => {
                        return (
                            <div className="container" key={item.id} >
                                <h5>{item.name}</h5>
                                <div className="box">
                                    <p>{item.text} <a href="#">davomi</a></p>
                                    <img src={item.img} alt="" srcset="" />
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}
export default Yangi_maqolalar;