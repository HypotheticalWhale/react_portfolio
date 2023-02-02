import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.725346363041!2d103.83664991536497!3d1.341145499021858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1746ac063a67%3A0x7f247ded91adb1d8!2s808%20Thomson%20Rd%2C%20Singapore%20298190!5e0!3m2!1sen!2ssg!4v1665819686926!5m2!1sen!2ssg"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-2/5 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                808 Thomson Road <br />
                #12-20 <br />
                S298190
              </p>
            </div>
            <div className="lg:w-3/5 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                samueltan.9803@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">83820207</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Work With Me:
            </h2>
          </div>
          <div className="inline-flex py-1 px-3 my-6">
            <SocialIcon
              url="https://github.com/HypotheticalWhale"
              className="mr-4"
              target="_blank/"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="mailto:samueltan.9803@gmail.com"
              className="mr-4"
              target="_blank/"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/tanzhiweisamuel/"
              className="mr-4"
              target="_blank/"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div>
            <a
              download
              //put the path of your pdf file
              href="./Samuel Tan Zhi Wei_Resume.pdf"
              //reactstrap classes. add green button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
