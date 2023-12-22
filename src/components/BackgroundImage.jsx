import assets from "./Image"

function BackgroundImage() {
    return (
        <img className="object-contain fixed z-[-1] top-0" src={assets.Background}></img>
    )
}
    
export default BackgroundImage