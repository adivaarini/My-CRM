import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from '../components/Review';

class CS extends Component {
    render() {
        return ( <
            ChatBot steps = {
                [{
                        id: '1',
                        message: 'Siapa Nama Anda?',
                        trigger: 'name',
                    },
                    {
                        id: 'name',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}! Apa Jenis Kelaminmu?',
                        trigger: 'gender',
                    },
                    {
                        id: 'gender',
                        options: [
                            { value: 'Pria', label: 'Pria', trigger: '5' },
                            { value: 'Wanita', label: 'Wanita', trigger: '5' },
                        ],
                    },
                    {
                        id: '5',
                        message: 'Berapa Umurmu?',
                        trigger: 'age',
                    },
                    {
                        id: 'age',
                        user: true,
                        trigger: '7',
                        validator: (value) => {
                            if (isNaN(value)) {
                                return 'value must be a number';
                            } else if (value < 0) {
                                return 'value must be positive';
                            } else if (value > 120) {
                                return `${value}? Come on!`;
                            }

                            return true;
                        },
                    },
                    {
                        id: '7',
                        message: 'Mari check kembali....',
                        trigger: 'review',
                    },
                    {
                        id: 'review',
                        component: < Review / > ,
                        asMessage: true,
                        trigger: 'update',
                    },
                    {
                        id: 'update',
                        message: 'Apakah Datanya Benar?',
                        trigger: 'update-question',
                    },
                    {
                        id: 'update-question',
                        options: [
                            { value: 'yes', label: 'Ya', trigger: 'update-yes' },
                            { value: 'no', label: 'Tidak', trigger: 'end-message' },
                        ],
                    },
                    {
                        id: 'update-yes',
                        message: 'Apa yang ingin Anda Lakukan?',
                        trigger: 'update-fields',
                    },
                    {
                        id: 'update-fields',
                        options: [
                            { value: 'fb', label: 'Feedback', trigger: 'update-fb' },
                            { value: 'faq', label: 'FAQ', trigger: 'update-faq' },
                            { value: 'cs', label: 'Berbicara dengan CS', trigger: 'update-cs' },
                        ],
                    },
                    {
                        id: 'update-fb',
                        update: 'Feedback',
                        trigger: '7',
                    },
                    {
                        id: 'update-faq',
                        update: 'FAQ',
                        trigger: '7',
                    },
                    {
                        id: 'update-cs',
                        update: 'Berbicara dengan CS',
                        trigger: '7',
                    },
                    {
                        id: 'end-message',
                        message: 'Terimakasih! Semoga harimu selalu senang!',
                        end: true,
                    },
                ]
            }
            />
        );
    }
}

export default CS;