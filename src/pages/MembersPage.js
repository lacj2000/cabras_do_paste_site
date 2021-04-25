import React from 'react';
import { BasePage } from '../components/BasePage';
import Members from '../components/Members';
import styles from '../styles/pages/MembersPage.module.css';

export default function  MembersPage ()  {
  return (
    <BasePage>
      <Members/>
    </BasePage>
  )
}