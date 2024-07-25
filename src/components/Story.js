import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 18px;
`;

const StoryImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid ${props => props.borderColor || '#ff0000'};
`;

const Story = ({ image, alt,borderColor }) => {
  return (
    <StoryContainer>
      <StoryImage src={image} alt={alt} borderColor={borderColor} />
      <p>{alt}</p>
    </StoryContainer>
  );
};

export default Story;
