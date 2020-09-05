import React, { Component } from 'react'
import { Container , Form, Row, Col, Button} from 'react-bootstrap'
 
export default class Create extends Component {
    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Add Employee</h1>
                <Form style={{ margin: '50px' }}>
                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="Employee Name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Employee Email" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Employee Mobile" />
                        </Col>
                    </Form.Row>
                    <Button style={{ margin: '30px', float: 'right' }}>Add Employee</Button>
                </Form>
            </Container>
        )
    }
}
