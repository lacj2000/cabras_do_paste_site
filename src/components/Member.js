import React from 'react';
import Image from 'react-bootstrap/Image';
import { AiFillGithub } from "react-icons/ai";

// import { Col, Row } from 'react-bootstrap';
import Styles from '../styles/components/Member.module.css';  

function Member({member}){
  const { member_image, name, email, github } = member;
  return (
    <div className={Styles.memberComponent}>
      <Image src={`/${member_image}`} width='200px' height='200px' roundedCircle/>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <a href={`https://github.com/${github}`}><AiFillGithub size='1.5em' />{github}</a>
      </div>
    </div>
  );
}


export default Member;