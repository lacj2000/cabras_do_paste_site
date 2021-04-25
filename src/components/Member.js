import React from 'react';
import Image from 'react-bootstrap/Image';
// import { Col, Row } from 'react-bootstrap';
import Styles from '../styles/components/Member.module.css';

function Member({member}){
  const { member_image, name, email } = member;
  return (
    <div className={Styles.memberComponent}>
      <Image src={`/${member_image}`} width='200px' height='200px' roundedCircle/>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}


export default Member;