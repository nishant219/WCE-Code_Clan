import React from "react";
import MetaTags from 'react-meta-tags';
import StoreAsset from "../assets/img/store.png";
import TransferAsset from "../assets/img/transfer.png";


import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home position-relative"  >
      <MetaTags>
      <title>MED-ON-CHAIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta id="meta-description" name="description" content="Ethereum x IPFS DApp." />
        <meta id="og-title" property="og:title" content="MyApp" />
      </MetaTags>
   
<div className=" container pb-5  pt-5 mt-0 ">

    < h1 className="mb-5 mt-5">Welcome to <span className=" bg-info p-3 border rounded-circle ">MED-ON-CHAIN</span></h1>
    <br></br>
    <h3 className="mb-5 mt-5">A web based Decentralized Application (Dapp)</h3>
    
    <p className="lead mt-5 mb-5">
    MED-ON-CHAIN is  <span className="fw-bold text-danger"></span> that allows patients and mediacl field employees to store and share important assets,reports,documents on our <span className="fw-bold text-danger">InterPlanetary File System (IPFS)</span> instance.
      Ownership of owners files is securely recorded on the <span className="fw-bold text-danger">Ethereum</span> blockchain making MED-ON-CHAIN <span className="fw-bold text-danger"></span> the best platform to store your assets.
      As your asset management system, MED-ON-CHAIN also has some interesting features such as ownership transfer, asset retrieval.<br /><br />
      
     <span className="fw-bold "> Let's Dive !!!</span>
    </p>
    
   
    </div>
    <div className="pt-5 mt-5">
     <section id="store" className="p-5 bg-info text-dark">
<div className="container">
<div className="row align-items-center justify-content-between">
  <div className="col-md">
    <img src={StoreAsset} className="img-fluid" alt="" />
  </div>
  <div className="col-md p-5">
    <h2>Store Your Medical Records Here!</h2>
    <p className="lead">
    In The Pursuit Of Privacy...
    </p>
    <p>
      The first step is the easiest. We are fully aware that simplicity is everything
      so we make the process of saving your files as simple as saving your money in your piggy bank.
      IPFS will take care of your files while our smart contracts will record your transactions
      securely on the blockchain.
    </p>
    <a href="/store" className="btn btn-dark mt-3">
      <i className="bi bi-chevron-right"></i> Store
    </a>
  </div>
</div>
</div>
</section>

<section id="ownership" className="p-5 bg-light">
<div className="container">
<div className="row align-items-center justify-content-between ">
  <div className="col-md p-5">
    <h2>Ownership?</h2>
    <p className="lead">
      You own everything.
    </p>
    <p>
      Thanks to the blockchain technology and <span className="fw-bold text-danger">InterPlanetary File System</span>,
      your files are safe with us. This ownership page lets you manage all your files,
      and amazingly allows you to transfer ownership of those files.
      Other users on this network can receive the files you transfer and again, blockchain will take care of the rest.
    </p>
    <a href="/ownership" className="btn btn-info mt-3">
      <i className="bi bi-chevron-right"></i> Ownership
    </a>
  </div>
  <div className="col-md ml-5">
    <img src="https://img.freepik.com/free-photo/smiling-doctor-with-big-first-aid-kit-cartoon-medical-character_195742-861.jpg?w=360" className="w-75" alt="" />
  </div>
</div>
</div>
</section>

<section id="transfer" className="p-5 bg-info text-dark">
<div className="container">
<div className="row align-items-center justify-content-between">
  <div className="col-md">
    <img src={TransferAsset} className="img-fluid" alt="" />
  </div>
  <div className="col-md p-5">
    <h2>Transfer Files !!!</h2>
    <p className="lead">
      From you to your trustworthy's...
    </p>
    <p>
      Yes you can do ownership transfer!
      MED-ON-CHAIN lets you transfer ownership of your stored files.
      We thank our sole developer who have grown us to this extent.
      All you need is your file and address of the recipient.
      Don't worry, it's all free because we implement ownership transfer with non-payable rules.
    </p>
    <a href="/transfer" className="btn btn-dark mt-3">
      <i className="bi bi-chevron-right"></i> Transfer
    </a>
  </div>
</div>
</div>
</section>

<section id="me" className="p-5  bg-light">
<div className="container">
<div className="row align-items-center justify-content-between ">
  <div className="col-md p-5">
    <h2>MEET OUR TEAM</h2>
    <p className="lead">
    MED-ON-CHAIN
    </p>
    <p>
      No need for registration, everything will be taken care of by <span className="fw-bold text-danger">Metamask</span>.
      Just set up your wallet, connect to our network and you are ready to go.
      All you need is to keep your private key safe with you.
      We can handle everything but your account is yours, so make sure you don't make any fatal mistake.
    </p>
    <a href="/me" className="btn btn-info mt-3">
      <i className="bi bi-chevron-right"></i> TEAM
    </a>
  </div>
  <div className="col-md pl-5 ml-5">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ6_wTx-Vm9CGx-o6txoO_J0HIMHqh4NpNw&usqp=CAU" className="w-75" alt="" />
  </div>
</div>
</div>
</section>
</div>
  

</div>





     
  );
}

export default Home;