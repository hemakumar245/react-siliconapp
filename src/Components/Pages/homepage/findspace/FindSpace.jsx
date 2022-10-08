import React from 'react';
import { Row, Col } from 'react-bootstrap';

function FindSpace(props) {
    const findspace = (
        <Row className="text-center">
            {props.FindSpaceItems.map((items) =>
                <Col lg={4} md={6} sm={12} key={items.id}>
                    <div className="space-content my-5">
                        <h6>{items.title}</h6>
                        <h1 className="section-title">{items.subtitle}</h1>
                    </div>
                </Col>
            )}
        </Row>


    );

    return (
        <React.Fragment>
            {findspace}
        </React.Fragment>
    )
}

export default FindSpace
