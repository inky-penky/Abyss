import Image from "next/image"
import Arrow from "../public/images/down-arrow.png"





const Navigation = ({otherStyle}:{otherStyle?:any}) => {

    return (
        <div className="canvasNav" style={{...otherStyle}}>
            <Image src={Arrow} alt="arrow" />
        </div>
    )
}


export default Navigation