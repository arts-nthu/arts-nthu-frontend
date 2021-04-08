import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(0deg, rgba(36, 44, 51, 0.5), rgba(36, 44, 51, 0.5));
    align-items: center;
`;


function Carousel(props) {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log(count);
        let id = setInterval(()=>{
            if(count <= props.images.length) setCount(count => count+1);
            else setCount(0);
        }, 5000);
        
        return () => clearInterval(id)
    }, [count])

    return (
        <Block
            style={{
            background: `url('${props.images[count]}') no-repeat`,
            backgroundSize: 'cover'
            }}
        >
            {count}
        </Block>
    )
}

export default Carousel;