import React from 'react'
import ListCollection from './ListCollection';
import './styles.css'



function Home() {
  return (
    <>
      < ListCollection />
      <div>
        <img style={{ width: '90%', height: '300px', margin: '20px', borderRadius: '5px' }}
          src="https://www.dhresource.com/0x0/f2/albu/g1/M00/A1/43/rBVaGVoeZ9qAKTjjAADQ8PcaYIM686.jpg"></img>


        <div style={{ margin: '20px', flexWrap: "colum", display: "flex" }}>
          <img style={{ width: '95%', height: '400px', margin: '20px' }}
            src="https://dos.ny.gov/sites/g/files/oee926/files/media/2021/11/shopping.jpg"></img>
        </div>

        <h3 style={{ textAlign: "center", color: "#2217D5", fontFamily: "Lucida Console", padding: '5px' }}>We are your best choice </h3>
        <div style={{ width: '300', height: '250px', justifyContent: "space-between", margin: '20px', flexWrap: "colum", display: "flex" }}>
          <img height="250" width="250" src="https://larevuedestransitions.fr/wp-content/uploads/2019/06/carte-bancaire-1280x720.jpg"></img>
          <img height="250" width="250" src="https://previews.123rf.com/images/valeriikhadeiev/valeriikhadeiev1904/valeriikhadeiev190400479/123347955-online-delivery-service-tracking-online.jpg"></img>
          <img height="250" width="250" src="https://donnees-rgpd.fr/wp-content/uploads/2019/04/mesures-rgpd-protection-donnees.jpg"></img>
          <img height="250" width="250" src="data:image/jpeg;base64,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"></img>
        </div>



        <div className="img-con">
  <h5>Contact us</h5>

  <a href="https://www.facebook.com/" target="-blank">
    <img
      src="https://pic.clubic.com/v1/images/1727832/raw?width=1200&fit=max&hash=fe2737bb5364336a95fe4f869a4ec48f27c7c724"
      alt=""
    />
  </a>
  <a href="https://twitter.com/" target="-blank">
    <img
      src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
      alt=""
    />
  </a>
  <a href="https://www.instagram.com/" target="-blank">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
      alt=""
    />
  </a>
  <a href="https://fr.linkedin.com/" target="-blank">
    <img
      src="data:image/png;base64,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"
      alt=""
    />
  </a>
</div>



        <footer className="bg-light text-center text-white">
         
          <div className="text-center p-3 bg-dark" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2022 All rights reserved
  </div>
        </footer>
      </div>
    </>)
}

export default Home;