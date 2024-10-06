import './brand.css';

function Brand() {
  return (
    <div className='brandpage'>
        <div id='brand'>
          <div className='ourServicePage'><h1>MAKING INDIA FUTURE READY WITH UNMANNED QUICK BUYING SOLUTIONS</h1></div>
                <p> Enabling last mile distribution through retailers & franchise partners through intelligent retail offerings.</p></div>
        <div className='brandPic'>
            <div className='storeGroup'>
            <img src='store.png' alt='hi'/>
            <h2 >200+</h2>
            <p >Stores</p>
            </div>
            <div className='storeGroup'>
            <img src='cities.png' alt='hi'/>
            <h2>200+</h2>
            <p>Cities</p>
            </div>
            <div className='storeGroup'>
            <img src='franchises.png' alt='hi'/>
            <h2 >200+</h2>
            <p >Franchises</p>
            </div>
            <div className='storeGroup'>
            <img src='cloud_kitchens.png' alt='hi'/>
            <h2>200+</h2>
            <p>Brands/Cloud Kitchen</p>
            </div>
        </div>
  </div>
  );
}
export default Brand;