import React, { useState } from 'react'
import { Col, Row, Form, Button, Modal } from 'react-bootstrap'
import FormInput from './FormInput'
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/reducer'
import './FormContact.css'


function FormContact() {

    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    const [dataForm, setdataForm] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
    })

    const inputForm = (e) => {
        setdataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        style={{height: '150px'}}
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