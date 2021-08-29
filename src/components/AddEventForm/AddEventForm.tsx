import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import "./AddEventForm.scss";

interface InitialValues {
	firstName: string;
	lastName: string;
	email: string;
	event: string;
}

export const prettyDateString = (date: Date) => new Date(date).toISOString().split("T")[0];

export default function AddEventForm(props: any) {
	return (
		<Formik
			initialValues={{ firstName: "", lastName: "", email: "", event: prettyDateString(new Date()) } as InitialValues}
			validate={(values) => {
				const errors = {} as any;

				if (!values.firstName) errors.firstName = "Required!";
				if (!values.lastName) errors.lastName = "Required!";
				if (!values.email) errors.email = "Required!";
				else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Invalid email address";
				if (!values.event) errors.event = "Required!";

				return errors;
			}}
			onSubmit={async (values, { setSubmitting }) => {
				await props.onsubmit(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form className="Form">
					<div className="Form__group">
						<Field type="text" name="firstName" placeholder="First Name" />
						<ErrorMessage name="firstName" component="div" className="ErrorMessage" />
					</div>
					<div className="Form__group">
						<Field type="text" name="lastName" placeholder="Last Name" />
						<ErrorMessage name="lastName" component="div" className="ErrorMessage" />
					</div>
					<div className="Form__group">
						<Field type="email" name="email" placeholder="Email Address" />
						<ErrorMessage name="email" component="div" className="ErrorMessage" />
					</div>
					<div className="Form__group">
						<Field type="date" name="event" />
						<ErrorMessage name="event" component="div" className="ErrorMessage" />
					</div>
					<div className="Form__group">
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
