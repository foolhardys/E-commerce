import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = () => {
  return <h4>page hero</h4>
}

const Wrapper = styled.section`
  background: var(--primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--primary-1);
  a {
    color: var(--primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-1);
  }
`

export default PageHero