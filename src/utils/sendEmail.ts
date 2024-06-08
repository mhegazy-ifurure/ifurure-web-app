import emailjs from "@emailjs/browser";

export const sendEmail = ({ name, email, message }) => {
  emailjs
    .send(
        "service_qtepexd",
        "template_iajkl63",
      { from_name: name, from_email: email, message: message },
      {
        publicKey: 'n1l8BA5gqrW_lyJp-',
      }
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        return response
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};
