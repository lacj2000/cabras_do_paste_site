import React from 'react';
import { NavigationBar } from './NavigationBar';
import styles from '../styles/components/BasePage.module.css';


export const BasePage = ({children}) => {
  return (
    <>
      <NavigationBar/>
      {children}
    </>
  )
}