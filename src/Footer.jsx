import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styles
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

const MyCard = () => {
    return (
        <div className="myCard">
            <div className="innerCard">
                <div className="frontSide">
                    <p className="title">Aditya Praveen</p>
                    <p>RV University</p>
                </div>
                <div className="backSide">
                    <p className="title"><FaPhone /> 7349240444</p>
                    <p>Tap the WhatsApp icon to share feedback. <a href='https://wa.me/917349240444'><FaWhatsapp /> </a></p>
                </div>
            </div>
        </div>
    );
};

export default MyCard;
