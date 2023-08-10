import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <h3>Join our community and  <br /> become a Comfy member</h3>
      <div className="content">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nam, fuga aliquam magnam commodi quae, eos laudantium quia omnis id cupiditate! Cupiditate quaerat, inventore eum officiis incidunt quidem totam consequatur?</p>
        <form
          className='contact-form'
          action="https://formspree.io/f/myyqeern"
          method="POST">
          <input
            type="email"
            className='form-input'
            placeholder='Enter Email'
            name="email" />
          <button type="submit" className='submit-btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--black);
  }
  .form-input {
    border-right: none;
    color: var(--grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border: 2px solid var(--primary-9);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    border: 2px solid var(--primary-8);
    cursor: pointer;
    transition: var(--transition);
    color: var(--black);
  }
  .submit-btn:hover {
    color: var(--white);
    background: var(--primary-8);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
