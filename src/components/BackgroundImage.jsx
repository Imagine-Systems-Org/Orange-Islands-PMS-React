const imageUrl = "public/Background.png"

function BackgroundImage() {
    return (
        <img className="object-contain fixed z-[-1] top-0" src={imageUrl}></img>
    )
}
    
export default BackgroundImage