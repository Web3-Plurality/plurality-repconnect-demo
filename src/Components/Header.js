import ParticlesBg from 'particles-bg'
import React, { useRef, useState } from 'react'
import ReactModal from 'react-modal'
import Fade from 'react-reveal'
// import PluralitySocialConnect from 'plurality-social-connect'

import PluralitySocialConnect from './../plurality-modal/PluralitySocialConnect'
const Header = () => {
    const [state, setState] = useState({
        showModal: false,
        returnedValue: null,
        name: "",
        hobbies: [],
    })

    const childRef = useRef(null);

    const handleOpenModal = () => {
        setState({
            ...setState,
            showModal: true
        });
    }

    const handleCloseModal = () => {
        setState({
            ...setState,
            showModal: false
        });
    }

    const handleProfileDataReturned = (data) => {
        console.log(data.data[0])
        setState({
            ...setState,
            showModal: true,
            hobbies: [...data.data[0].assetData]
        });
        console.log([...data.data[0].assetData])
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get profile data:", receivedData);
        // alert(JSON.stringify(data));
        childRef?.current?.closeSocialConnectPopup();
    };

    // Web3 function handles
    const handleGetAllAccounts = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get all accounts:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleGetConnectedAccount = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get connected account:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleMessageSignature = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get message signature:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleVerifyMessageSignature = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Verify message signature:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleGetBalance = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get balance:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleSendTransaction = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Send transaction:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleGetBlockNumber = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get block number:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleGetTransactionCount = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get transaction count:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleReadFromContract = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Read from contract:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleWriteToContract = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Write to contract:", receivedData);
        alert(JSON.stringify(data));
    };
    const handleErrorMessage = (data) => {
        handleOpenModal();
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("Get error message:", receivedData);
        alert(JSON.stringify(data));
    };

    const name = "Social Verse";
    const description = "A demo social media platform built on Plurality Network which enables you to bind your real world personality to your web3 account";


    return (
        <header id="home">
            <ParticlesBg type="circle" bg={true} />
            <div className="row banner">
                <div className="banner-text">
                    <Fade bottom>
                        <h1 className="responsive-headline">{name}</h1>
                    </Fade>
                    <Fade bottom duration={1200}>
                        <h3>{description}.</h3>
                    </Fade>
                    <hr />
                    <Fade bottom duration={2000}>
                        <div className="social">
                            <PluralitySocialConnect
                                options={{ apps: 'facebook,twitter' }}
                                onProfileDataReturned={handleProfileDataReturned}
                                onGetAllAccounts={handleGetAllAccounts}
                                onGetConnectedAccount={handleGetConnectedAccount}
                                onGetMessageSignature={handleMessageSignature}
                                onVerifyMessageSignature={handleVerifyMessageSignature}
                                onGetBalance={handleGetBalance}
                                onSendTransaction={handleSendTransaction}
                                onGetBlockNumber={handleGetBlockNumber}
                                onGetTransactionCount={handleGetTransactionCount}
                                onReadFromContract={handleReadFromContract}
                                onWriteToContract={handleWriteToContract}
                                onErrorMessage={handleErrorMessage}
                                ref={childRef}
                            />
                        </div>
                    </Fade>
                </div>
            </div>

            <ReactModal
                isOpen={state.showModal}
                contentLabel="Hello!"
                appElement={document.getElementById('app')}
            >
                <h3>Hello! </h3>{state.name} 👋
                <h3 style={{ marginTop: "20px" }}>Based on your social activity you might be interested in:</h3>
                <ul style={{ marginLeft: "20px", marginTop: "20px", listStyleType: "circle" }}>
                    {state?.hobbies?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={handleCloseModal} style={{ marginTop: "20px" }}>Close</button>
            </ReactModal>
        </header>
    )
}

export default Header
