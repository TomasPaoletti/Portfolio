import React, { useState } from 'react'
import { Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './FormInput'
import { setModal } from '../../redux/reducer'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import './FormContact.css'


function FormContact() {

    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });


    const [dataForm, setdataForm] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    const inputForm = (e) => {
        setdataForm(currentValue => ({
            ...currentValue,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_e4w08mi', 'template_3nz5pra', e.target, 'qO_Pev5gjhoxroc-A')
            .then((resolve, reject) => {
                resolve(
                    toast.fire({
                        icon: 'success',
                        title: 'Mensaje enviado',
                    })
                )
                reject(
                    toast.fire({
                        icon: 'error',
                        title: 'Error al enviar. Intentelo nuevamente'
                    })
                )
            });
        setdataForm({
            from_name: '',
            from_email: '',
            message: '',
        });
        dispatch(setModal())
    }

    return (
        <Modal show={modal} onHide={() => dispatch(setModal())}>
            <Modal.Header>
                <Modal.Title>Contactame</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <FormInput
                        controlId="formGroupName"
                        labelText="Nombre"
                        type="text"
                        name="from_name"
                        value={dataForm.from_name}
                        onChange={inputForm}
                    />
                    <FormInput
                        controlId="formGroupEmail"
                        labelText="Email"
                        type="Email"
                        name="from_email"
                        value={dataForm.from_email}
                        onChange={inputForm}
                    />
                    <FormInput
                        controlId="formGroupMessage"
                        labelText="Mensaje"
                        as="textarea"
                        name="message"
                        value={dataForm.message}
                        onChange={inputForm}
                        style={{ height: '150px' }}
                    />
                    <Row className='m-4 justify-content-center'>
                        <Col xs={4}>
                            <Button type="submit" className="btn-form">Enviar</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default FormContact