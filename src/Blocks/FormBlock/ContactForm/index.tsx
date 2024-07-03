import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

import { ContactForm, ContactFormValues } from "../../../utils/ifuture.types";
import { sendEmail } from "../../../utils/sendEmail";
import { styles } from "../../../utils/style";
import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const initialValues: ContactFormValues = {
    name: "",
    email: "",
    message: "",
    terms: false,
  };
  const { t } = useTranslation("contact");
  const form: ContactForm = t("form", { returnObjects: true });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          message: Yup.string().required("Message is required"),
          terms: Yup.boolean().required("accepting terms is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          sendEmail(values);
        }}
      >
        <Form className="grid grid-cols-1  gap-4 mt-5 md:p-10 rounded-2xl ">
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

          <div className="   mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {form.message?.label}
            </label>
            <Field
              as="textarea"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 sm:text-sm"
              rows={4}
              id="message"
              name="message"
              placeholder={form.message?.label}
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
              id="termsCheckbox"
              name="terms"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="termsCheckbox" className="mx-2 text-gray-700">
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

export default ContactUsForm;
