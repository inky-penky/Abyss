import Navigation from "./Navigation"
import ParentNode from "./Parentnode"

const Canvas:React.FC = () => {
    return (
        <div className="canvas">
            <div className="topCanvasNav">
                <Navigation otherStyle={{left:"45%"}} />
                <Navigation otherStyle={{bottom:"50%", rotate:"270deg", left: "-1.5%"}} />
                <Navigation otherStyle={{bottom:"50%", rotate:"90deg", right: "-1.5%"}} />
                <Navigation otherStyle={{bottom:"0", rotate:"180deg", left: "45%"}} />

            </div>
            <ParentNode />

        </div>
    )
}



export default Canvas