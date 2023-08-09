import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='About' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="Nice Interior" />
      <article>
        <div className="title">
          <h2>Our Journey</h2>
          <div className="underline"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sunt nisi nesciunt, officiis, voluptates, illum ab delectus pariatur hic quibusdam beatae nemo itaque incidunt dolores porro provident unde placeat soluta!lorem90
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem, dolor molestias eligendi sed suscipit maiores ab. Fugit molestias aut veritatis iure accusantium nemo dolorem odio deserunt sunt! Corrupti assumenda rerum aut eum debitis atque quisquam eius laborum harum molestiae illo natus, at nostrum. Magni explicabo repellat sapiente adipisci, repellendus delectus maiores minima hic aut nostrum fugiat voluptate provident iste sit ratione, animi itaque cumque maxime ipsa ex nam? Ducimus incidunt aspernatur numquam. Assumenda nihil, et nam quidem quis corrupti in. Repudiandae ducimus nostrum, deleniti voluptatibus magnam ea maxime quo.</p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
