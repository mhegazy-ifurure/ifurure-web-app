import emailjs from "@emailjs/browser";

export const sendEmail  = (
  { name, email, message, companyName, phone, businessField, service },
  { formtype }
) => {
  if (formtype == "contact us") {
    emailjs
      .send(
        "service_qtepexd",
        "template_iajkl63",
        { from_name: name, from_email: email, message: message },
        {
          publicKey: "n1l8BA5gqrW_lyJp-",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          return response;
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  } else {
    emailjs
      .send(
        "service_qtepexd",
        "template_n2gvknj",
        {
          from_name: name,
          from_email: email,
          message: message,
          companyName,
          businessField,
          service,
          phone,
        },
        {
          publicKey: "n1l8BA5gqrW_lyJp-",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          return response;
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }
};
