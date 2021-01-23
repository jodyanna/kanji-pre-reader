// Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import Loading from "../Loading";
// Utility functions
import { renderPreview } from "../../utils/renderPreview";

const Canvas = styled.div`
  margin: 0.5em;
  
  border: 1px solid #000000;
`;

const Image = styled.img`
  width: 255px;
  height: 300px;
`;

export default function Preview() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ img, setImg ] = useState({});

  useEffect(() => {
    renderPreview()
      .then(img => setImg(img))
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {isLoading ?
        <Loading message={"Generating preview..."} />
        :
        <Canvas id="canvas">
          <Image src={img.src} alt={"preview.png"} />
        </Canvas>
      }
    </div>
  )
}
