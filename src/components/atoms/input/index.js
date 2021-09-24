import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './style.css'

export default function Input({ controlId, title, type, placeholder,onChange, name, value, pattern }) {
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId={controlId}>
                <Form.Label column sm="2" className="text-algn">{title}</Form.Label>
                <Col sm="10">
                    <Form.Control type={type} placeholder={placeholder} onChange={onChange} name={name} value={value} pattern={pattern}/>
                </Col>
            </Form.Group>
        </div>
    )
}
