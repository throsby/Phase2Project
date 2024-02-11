export default function DemoPopup({setShowDemoPopup}){
return(
    <div className="demo-popup">
        <button className="demo-popup-close" onClick={()=>{setShowDemoPopup(false)}}>✖</button>
        <h1>Welcome in!</h1>
        <div><h2>This is a little app that pulls data from the NYC Department of Health's most recent inspections. <br/><br/>The data will change slightly each time you see it. There's info for the health department rating if it's an A, B, or C but if it's got a shruggy emoji, it might be worth avoiding for now!<br/>You can add restaurants that you're interested in to the list that comes up on the left.</h2></div>
    </div>
    )
    

}