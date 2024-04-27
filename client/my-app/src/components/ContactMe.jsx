import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal
 from "sweetalert2";
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_pwdgpns", "template_biptwdb", form.current, {
                publicKey: "zTdhlE9SzsVH8drfn",
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Message send successfully",
                        icon: "success"
                      });
                },
                (error) => {
                    Swal.fire({
                        title: "Message send unsuccessful",
                        icon: "error"
                      });
                }
            );
            e.target.reset()
    };

    return (

   <div className="mt-8"> 
         
         <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-abc ">
         <p className="font-abc font-bold text-6xl mb-2 text-center ">Contact Me</p>
            <div className="mb-4">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="user_name">Name</label>
                <input required className=" shadow appearance-none text-2xl border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_name" type="text" name="to_name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="user_email">Email</label>
                <input required className="shadow appearance-none  text-2xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="from_name" placeholder="Your Email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="message">Message</label>
                <textarea required className="shadow appearance-no text-2xl ne border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send
                </button>
            </div>
        </form>
   </div>
    );
};
