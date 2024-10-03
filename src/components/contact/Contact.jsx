import "../contact/contact.css";
import msg_icon from "../../assets/img/msg-icon.png";
import mail_icon from "../../assets/img/mail-icon.png";
import phone_icon from "../../assets/img/phone-icon.png";
import location_icon from "../../assets/img/location-icon.png";
import white_arrow from "../../assets/img/white-arrow.png";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");
   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_YOUR_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className="contact">
        <div className="contact_col">
            <h3>Send us a message
                <img src={msg_icon} alt="" />
            </h3>
            <p>Feel free to reach out through contact form or find our contact information below.
                Your feeback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 9833770694</li>
                <li><img src={location_icon} alt="" />88 Massachusetts Ave, Cambridge<br/> MA 08944, United States</li>
            </ul>
        </div>
        <div className="contact_col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                <label>Write your messagess here</label>
                <textarea name="message" rows="6" placeholder="Enter your message here" required></textarea>
                 <button className="btn dark_btn" type="submit">Submit now
                    <img src={white_arrow} alt="" />
                 </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact