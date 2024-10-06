import './about.css';
function About(){
    return(
        <div className='ABOUT'>
            <div id='about'>
                <div  className='ourServicePage'><h1>ABOUT US!</h1></div>
                <p> Welcome to 24buy7, your trusted partner in delivering top-notch snack and beverage vending solutions. We cater to a diverse range of environments including corporate offices, schools, colleges, and industrial settings. Our goal is to ensure that you have access to your favorite snacks and drinks whenever you need them, 24/7.</p>
            </div>
            <div id='aboutvideo'>
            <video autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
            </div>
        </div>
    );
}
export default About;