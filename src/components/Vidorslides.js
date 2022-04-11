import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import hkmap from '../img/hkmap.webp';
import styled from 'styled-components';

function Vidorslides() {
  return (

            <Mapsize>
            <img src={hkmap} className="hkmap" alt="logo"  />
            </Mapsize>

  )
}

export default Vidorslides

const Mapsize = styled.div`
    img{
        width: 900px;
        height: auto;
    }
    `;