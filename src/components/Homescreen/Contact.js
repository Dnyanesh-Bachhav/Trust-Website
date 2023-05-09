import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL, LOCATION, PHONE_NUMBER } from './constants';
import styles from "../../styles/contact.module.css";


function Contact(props){
    const form = useRef();
    const sendMail = (e)=>{
        e.preventDefault();
        emailjs.sendForm( props.EMAIL_JS_SERVICE_ID,  props.EMAIL_JS_TEMPLATE_ID, form.current,  props.EMAIL_JS_PUBLIC_KEY)
        .then((result)=>{
             console.log("Result: "+result.text);
             alert("Email send...");
        },(error)=>{
            console.log("Error: "+error.text);
        });
    }
    
    return (
        
      <section className={`${styles.contact} ${styles.section}`} id="contact">
        <div className="title-container text-center mt-8 mb-8 ">
          <div
            className="text-center z-0 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="section-title text-center">Contact Us</h1>
          </div>
          {/* <div className="border border-b-1 border-b-gray-400 w-full z-2"></div> */}
          {/* <br /> */}
        </div>
        <div className={`${styles.contact__container} ${styles.container} ${styles.grid}`}>
          <div>
            <div className={`${styles.contact__information}`}>
              <i className={`bi bi-telephone ${styles.contact__icon}`}></i>

              <div>
                <h3 className={`${styles.contact__title}`}>Call Me</h3>
                <span className={`${styles.contact__subtitle}`}>{PHONE_NUMBER}</span>
              </div>
            </div>

            <div className={`${styles.contact__information}`}>
              <i className={`bi bi-envelope ${styles.contact__icon}`}></i>

              <div>
                <h3 className={`${styles.contact__title}`}>Email</h3>
                <span className={`${styles.contact__subtitle}`}>{EMAIL}</span>
              </div>
            </div>

            <div className={`${styles.contact__information}`}>
              <i className={`bi bi-geo-alt ${styles.contact__icon}`}></i>

              <div>
                <h3 className={`${styles.contact__title}`}>Location</h3>
                <span className={`${styles.contact__subtitle}`}>{LOCATION}</span>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendMail} className={`${styles.contact__form} ${styles.grid}`}>
            <div className={`${styles.contact__inputs} ${styles.grid}}`}>
              <div className={`${styles.contact__content}`}>
                <label htmlFor="" className={`${styles.contact__label}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`${styles.contact__input}`}
                  required
                />
              </div>
              <div className={`${styles.contact__content} mt-4`}>
                <label htmlFor="" className={`${styles.contact__label}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`${styles.contact__input}`}
                  required
                />
              </div>
            </div>
            <div className={`${styles.contact__content}`}>
              <label htmlFor="" className={`${styles.contact__label}`}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className={`${styles.contact__input}`}
                required
              />
            </div>
            <div className={`${styles.contact__content}`}>
              <label htmlFor="" className={`${styles.contact__label}`}>
                Message
              </label>
              <textarea
                name="message"
                id=""
                cols="0"
                rows="7"
                className={`${styles.contact__input}`}
              ></textarea>
            </div>
            <div>
              {/* <a href="" onClick={sendMail} className="button button__flex"> */}
              <button className={`${styles.button} ${styles.button__flex}`} >
                Send Me <i className={`bi bi-send-fill ${styles.button__icon}`} ></i>
              </button>
              {/* </a> */}
            </div>
          </form>
        </div>
      </section>
    );
}

export async function getServerSideProps(context) {
    return {
      props: {
        EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
        EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,

      }, // will be passed to the page component as props
    }
  }


export default Contact;