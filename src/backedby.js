import './backedby.css';
function Backedby(){
    return(
        <div>
            <div className='backed'>
                <div  className='ourServicePage'><h1 id='bh'>BACKED BY</h1></div>
                <div className='backedimages'>
                    <img height={'100vh'} src='riidl.png' alt='hi'/>
                    <img height={'100vh'} src='startup.png ' alt='hi'/>
                    <img height={'100vh'} src='msis.png' alt='hi'/>
                    <img height={'100vh'} src='dpiit.png' alt='hi'/>
                </div>
            </div>
        </div>
    );
}
export default Backedby;