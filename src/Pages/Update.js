import React, { Component } from 'react'
import { Container , Form, Row, Col, Button} from 'react-bootstrap'
 
export default class Update extends Component {
    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Update Employee</h1>
                <Form style={{ margin: '50px' }}>
                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="Employee Name" value="Joan Louji"/>
                        </Col>
                        <Col>
                        <Form.Control placeholder="Employee Email" value="sjlouji10@gmail.com"/>
                        </Col>
                        <Col>
                        <Form.Control placeholder="Employee Mobile" value="1902348"/>
                        </Col>
                    </Form.Row>
                    <Button style={{ margin: '30px', float: 'right' }}>Add Employee</Button>
                </Form>
            </Container>
        )
    }
}
