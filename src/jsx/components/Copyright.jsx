import React from 'react';

const currentYear = new Date().getFullYear()

export default function Copyright() {
  return <span>&copy; {currentYear} David Minnerly</span>
}
