export default function Header(){
    const handleOnClick = () => {
        document.querySelector(".header-icon").style.animation= "spin 1s";
    }
    return(
    <div className="header">
        <div className="header-top">
            <img className="header-icon" src="imgs/restaurant.png" onClick={handleOnClick}/>
            <h1 className="header-title">HotsPot</h1>
        </div>
        <p className="header-desc"> Your one stop shop for the hot spot hot pot in crop top, top knot and flip flops or not! </p>
    </div>)
}