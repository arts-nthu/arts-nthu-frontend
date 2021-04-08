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

    return (
        <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                { props.images.map((data, key) => {
                    return (
                        <div className={key === 0 ? 'active carousel-item' : 'carousel-item'}>
                            <Block
                                style={{
                                background: `url('${data}') no-repeat`,
                                backgroundSize: 'cover'
                                }}
                            >
                                
                            </Block>
                        </div>
                    )
                })}
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            
        </div>
    )
}

export default Carousel;