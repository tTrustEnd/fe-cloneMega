import { IUudai } from "..";
import { getUudaiSV } from "../../../../../service/api";
import { useState, useEffect } from 'react'
import './index.scss'
import Slider from "react-slick";


const AllUudai = () => {
    const [listUudai, setListUudai] = useState([])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    };
    const GetAllUudai = async () => {
        const res = await getUudaiSV();
        setListUudai(res.data)
    }
    useEffect(() => {
        GetAllUudai()
    }, [])
    return (
        <div className="all-uudai">
            <Slider
                {...settings}>
                {listUudai && listUudai.length > 0 &&
                    listUudai.map((item: IUudai, index) => {
                        return (
                            <div className="box" style={{ display: 'flex' }} key={`${index}`} >
                                <a href={`/uu-dai/${item._id}`}>

                                    <div>
                                        <img src={`${import.meta.env.VITE_BASE_URL}/images/uudai/${item.image}`} alt="" />
                                    </div>
                                    <div className="content-uudai">
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.time}
                                        </div>
                                    </div>
                                </a>


                            </div>

                        )
                    })
                }
            </Slider>
            <div>
            </div>
        </div>
    )
}
export default AllUudai;