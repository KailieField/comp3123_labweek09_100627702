import React from 'react';

export default function Student(props) {

    return (
        <div>
            <p style={{ textAlign: 'center'}}>
            <h2>React JS Programming Week09 Lab Exercise </h2>
            </p>
            <br/>
            <p style={{ textAlign: 'center' }}>
            <h3>{props.stud.id}</h3>
            <h3>{props.stud.name}</h3>
            <h3>{props.stud.college}</h3>

            </p>
        </div>
    )
}
