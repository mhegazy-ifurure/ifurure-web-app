/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

import { ContactForm } from "../../../utils/ifuture.types";
import { sendEmail } from "../../../utils/sendEmail";
import { styles } from "../../../utils/style";
import { useTranslation } from "react-i18next";
import { Service } from "../../../utils/payload-types";
import { useCollection } from "../../../utils/apiContext";
import Loading from "../../../Components/Loading";

const RequestServiceForm = () => {
  const initialValues = {
    name: "",
    companyName: "",
    email: "",
    phone: "",
    businessField: "",
    service: "",
    message: "",
    terms: false,
  };
  const { t: tService } = useTranslation("services");

  const { t } = useTranslation("contact");

  const res = useCollection("services");
  if (res.en.isLoading || res.ar.isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  let services: Service[] = [];


  services = tService("data", { returnObjects: true });

  const form: ContactForm = t("form", { returnObjects: true });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .test("is-valid-egypt-phone", "Invalid Egypt phone number", (value) => {
        const phoneRegExp = /^01[0125][0-9]{8}$/gm; // Regular expression for Egyptian phone numbers

        // Return true if the phone number matches the expected format
        // @ts-ignore
        return phoneRegExp.test(value);
      })
      .required("Please enter a valid Egypt phone number"),
    businessField: Yup.string().required("your business category is required"),
    service: Yup.string()
      .oneOf([...services.map((service) => service.title)])
      .default(services[0].title)
      .required("Service is required"),
    message: Yup.string().required("Message is required"),
    terms: Yup.boolean()
      .isTrue("accepting terms is required")
      .required("accepting terms is required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });

          resetForm();
          sendEmail(values, { formtype: "request service" });
        }}
      >
        <Form className="grid grid-cols-1  bg-white gap-4 mt-5 md:p-10 rounded-2xl ">
          <div className=" mb-4 ">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {form.name?.label}
            </label>
            <Field
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              id="name"
              name="name"
              placeholder={form.name?.placeholder}
            />
            <ErrorMessage
              className="text-red-500"
              name="name"
              component={"div"}
            />
          </div>

          <div className=" mb-4 ">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              {form.companyName?.label}
            </label>
            <Field
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              id="companyName"
              name="companyName"
              placeholder={form.companyName?.placeholder}
            />
            <ErrorMessage
              className="text-red-500"
              name="companyName"
              component={"div"}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {form.email?.label}
            </label>
            <Field
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              id="email"
              placeholder={form.email?.placeholder}
            />
            <ErrorMessage
              className="text-red-500"
              name="email"
              component={"div"}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {form.phone?.label}
            </label>
            <Field
              type="text"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              id="phone"
              placeholder={form.phone?.placeholder}
            />
            <ErrorMessage
              className="text-red-500"
              name="phone"
              component={"div"}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="businessField"
              className="block text-sm font-medium text-gray-700"
            >
              {form.businessField?.label}
            </label>
            <Field
              type="text"
              name="businessField"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              id="businessField"
              placeholder={form.businessField?.placeholder}
            />
            <ErrorMessage
              className="text-red-500"
              name="businessField"
              component={"div"}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              {form.service.label}
            </label>
            <Field
              as="select"
              name="service"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              id="service"
            >
              {services &&
                services.length > 0 &&
                //   @ts-ignore
                services.map((service, i) => {
                  return (
                    <option key={i} value={service.title}>
                      {service.title}
                    </option>
                  );
                })}
            </Field>
            <ErrorMessage
              className="text-red-500"
              name="service"
              component={"div"}
            />
          </div>
          <div className="   mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {form.details.label}
            </label>
            <Field
              as="textarea"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              rows={4}
              id="message"
              name="message"
              placeholder={form.details.label}
            />
            <ErrorMessage
              className="text-red-500"
              name="message"
              component={"div"}
            />
          </div>
          <div className=" mb-4 flex items-center">
            <Field
              type="checkbox"
              id="terms"
              name="terms"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="terms" className="mx-2 text-gray-700">
              {form.checkItem}
            </label>
            <ErrorMessage
              className="text-red-500"
              name="terms"
              component={"div"}
            />
          </div>
          <div className=" ">
            <button type="submit" className={styles.primaryBtn}>
              {form.submit}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RequestServiceForm;
