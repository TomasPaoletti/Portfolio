import React from 'react'
import { Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

export default function FormInput({controlId, labelText, type, name, value, as, style, onChange}) {
    return (
        <FormGroup className="m-3" controlId={controlId}>
            <Row>
                <FormLabel md={2}>
                    {labelText}
                </FormLabel>
                <Col>
                    <FormControl 
                        type={type}
                        name={name}
                        value={value}
                        as={as}
                        style={style}
                        onChange={onChange}
                        required
                    />
                </Col>
            </Row>
        </FormGroup>
    )
}
