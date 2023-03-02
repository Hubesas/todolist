import React from 'react';
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const Users = ({user}) => {

    let style = {
        eyes: user.eyeColor,
        height: ``,
        gender: ``,
        weight: ``,
    }

    if (user.height > 170) {
        style.height = `orange`
    }
    else {
        style.height = `green`}

    if (user.gender === `male`) {
        style.gender = `blue`
    }
    else {
        style.gender = `pink`
    }

    if (user.weight > 80) {
        style.weight = `2px solid black`
    }

    return (
        <Row className="d-flex" >
            <Col className="d-flex gap-2" style={{backgroundColor: style.gender, border:style.weight}} >
                <img src={user.image} alt=""/>
                <div>
                    <h1>{user.firstName}</h1>
                    <div>
                        <h3 style={{backgroundColor: style.eyes}} >Eyes Color: {user.eyeColor}</h3>
                    </div>
                    <div style={{backgroundColor: style.height}} >
                        <h3>Height: {user.height} cm</h3>
                    </div>

                    <h3>Gender: {user.gender}</h3>
                    <h3>Weight: {user.weight} kg</h3>
                </div>
            </Col>


        </Row>
    );
};

export default Users;