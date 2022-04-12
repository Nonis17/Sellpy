import styled from 'styled-components';
import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { AiTwotonePhone } from 'react-icons/ai';

const Background = styled.div`
   width: 100%;
height: 100%;  
  position: fixed; 
  z-index: 50; 
display: flex; 
justify-content: center;  
align-items: center;
margin: 0 auto;
background-color: #00000056;

top: 0;
left: 0;
right: 0;
bottom: 0;
`;

const ModalWrapper = styled.div`
width: 420px;
height: 764px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #f3f3fa; 
color: #000;
display: grid; 
position: relative; 
z-index: 51; 
border-radius: 10px;
margin-top: 10px;

@media (min-width: 400px) and (max-width: 428px) {
    margin-top: 60px;
    width: 340px;
height: 640px;
  }

  @media (max-width: 390px) {
    margin-top: 60px;
    width: 320px;
height: 630px;
  }
`;

const ModalBanner = styled.div`
width: 100%;
height: 90%;
background-color: #0762C8; 
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

div{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute; 
    z-index: 2;
    color: white;
p{
    font-size: 12px;
    padding: 0px 0px 0px 5px;
}
}
`;

const TelephoneIcon = styled(AiTwotonePhone)`
font-size: 1.5rem;
`;

const TruckIcon = styled(FaTruck)`
position: relative;
color: white;
font-size: 10rem;
opacity: 0.2;
z-index: 1;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column; 
line-height: 1.8;
color: #141414; 
padding: 0px 40px 0px 40px;
overflow: scroll;

h3 { 
   margin: 10px 0px 0px 0px; 

   @media (max-width: 428px) {
font-size: 12px;
  }
}

p{ 
    font-size: 12px;
    margin: 0;
}

hr { 
    margin: 10px 0px 0px;
    width: 100%;
    border: 0.5px solid #eeeeee;
}
`;

const TransportMeasurmentsBox = styled.div`
 
margin: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;

    div {
        margin: 0 auto;
        border: 1px solid black; 
        text-align: center;
        padding: 10px;
        border-radius: 5px;
    
    p{
        font-weight: bold;
    }}
`;

const BalanceIcon = styled(FaBalanceScale)`
font-size: 4rem;

@media (max-width: 428px) {
 font-size: 2rem;
  }
`;

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute; 
top: 20px; 
right: 20px;
width: 32px; 
height: 32px;
padding: 0; 
z-index: 10;

`


const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    //Close modal with esc-key
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return (
        <>

            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalBanner><TruckIcon /><div><TelephoneIcon /><p>08-123 456 67</p></div></ModalBanner>
                            <ModalContent>
                                <h3>Önskar du transporthjälp?</h3>
                                <p>Vi erbjuder transporthjälp inom en radie av fem mil från vår reparationslokal! Kontakta oss så kommer vi överens om en tid som passar. Tänk på att du endast kan boka transport för nästkommande dag.</p>

                                <p>Du behöver en redan bokad tid för att kunna boka transport. Boka en tid <Link to='/booking'> här!</Link></p>
                                <hr />
                                <h3>Kostnad</h3>
                                <p>Du betalar alltid för tiden du har bokat, ombokning och avbokning sker senast 24 timmar innan. Betalning debiteras vid utebliven närvaro!</p>
                                <p>Priset för transport är fastpris på 350 SEK</p>
                                <hr />
                                <h3>Maximala mått</h3>
                                <p>Din vara får inte överskrida nedan beskrivna mått. Betalning debiteras även vid utebliven körning!</p>
                                <TransportMeasurmentsBox>
                                    <div>
                                        <BalanceIcon />
                                        <p>Längd: 200cm</p>
                                        <p>Bredd: 500cm</p>
                                        <p>Vikt: 70kg</p>
                                    </div>
                                </TransportMeasurmentsBox>

                            </ModalContent>
                            <CloseModalButton aria-label='close pop up' onClick={() => setShowModal
                                (prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}



        </>
    );
}

export default Modal;