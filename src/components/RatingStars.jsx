import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';

const RatingStars = ({stars, reviews}) => {
    const Stars = Array.from({length: 5}, (value, key)=>{
        let number = key + 0.5
        return(
            <span key={key}>
                {
                    stars >= key + 1 ? (<FaStar className='icon'/>): stars >= number ? (<FaStarHalfAlt className='icon'/>): (<AiOutlineStar className='icon'/>)
                }
            </span>
        )
    })
    return (
        <Wrapper>
            <div className="icon-style">
                {Stars}
                <p>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    )
    
};

const Wrapper = styled.section`
    .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default RatingStars;