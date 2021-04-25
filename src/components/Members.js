import React from 'react';

import Member from './Member';

import members from '../../members.json';

import {  Nav } from 'react-bootstrap'
import styles from '../styles/components/Members.module.css';


function Members (){
  return (
    <>
      <div className={styles.membersComponent}>
        {members.map((member)=>{
          return <Member member={member}/>
        })}

      </div>
    </>
  )
}

export default Members;