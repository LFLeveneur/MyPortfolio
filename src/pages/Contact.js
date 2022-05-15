import React from "react";

// Fill data
import { dataContact } from '../data';

// Fill React component
import Footer from "../compenents/react/Footer";
import Navigation from "../compenents/react/Navigation";

// 
import { Controller, useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { type } from "@testing-library/user-event/dist/type";

type formValues = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {

    const validationSchema = Yup.object().shape({
            name: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string()
                .required('Required')
        }).required('Required');

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return (
        <div className="contact">
            <Navigation />
            <div className="contact-content">
                <form action="/my-handling-form-page" method="post">
                    <ul>
                        <li>
                            <label htmlFor="name"><p>Name:</p></label>
                            <Controller control={control} name='name' render={({field: { onChange, value }})=> (
                                <input type="text" placeholder="Name..." onChangeText={onChange} value={value} />
                            )} />
                        </li>
                        <li>
                            <label htmlFor="email"><p>E-mail:</p></label>
                            <Controller control={control} name='email' render={({field: { onChange, value }})=> (
                                <input type="text" placeholder="E-mail..." onChangeText={onChange} value={value} />
                            )} />
                        </li>
                        <li>
                            <label htmlFor="message"><p>Message:</p></label>
                            <Controller control={control} name='message' render={({field: { onChange, value }})=> (
                                <textarea placeholder="Message..." onChangeText={onChange} value={value} />
                            )} />
                        </li>
                        <li>
                            <button><h3>Send</h3></button>
                        </li>
                    </ul>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;