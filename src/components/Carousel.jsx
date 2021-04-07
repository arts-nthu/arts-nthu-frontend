import React from 'react'
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

const LetterBlock = styled.div`
    height: 250px;
    padding: 20px 50px;
`;

const Title = styled.h2`
    font-size: 30px;
    letter-spacing: 3px;
    padding-bottom: 15px;
    color: white;
`;

const Card = styled.div`
    color: white;
    background: rgba(0, 0, 0, 0.5);
    &:hover {
        color: #1DBF21;
    }
`;
const CardTitle = styled.h2`
    font-size: 25px;
    letter-spacing: 3px;
`;

const data = [
    {
        "title": "找問題",
        "icon": "question_answer",
        "url": "/articles"
    },
    {
        "title": "問問題",
        "icon": "help_outline",
        "url": "/articles"
    },
    {
        "title": "看問題",
        "icon": "record_voice_over",
        "url": "/comments"
    }
]
class Introduction extends React.Component {
    render() {
        return (
            <Block
              
              ref={cover => (this.cover = cover)}
              style={{
                background: `url('${this.props.images[0]}') no-repeat`,
                backgroundSize: 'cover'
              }}
            >
              { this.props.children }
            </Block>
        )
    }
}

export default Introduction