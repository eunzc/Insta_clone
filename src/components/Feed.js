import React from 'react';
import styled from 'styled-components';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const FeedContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Post = styled.div`
  background-color: #fff;
  border: 0.5px solid #dbdbdb;
 margin-top: 0px;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostText = styled.div`
  margin-left: 15px;
  margin-top: 10px;
  flex-grow: 1;
`;

const PostTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top:0px;
`;

const Profile = styled.img`
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  margin-top:10px;
`;
const IconContainer = styled.div`
  margin-top: 10px; 
`;


const Feed = () => {
  return (
    <FeedContainer>
      <Post>
      <PostTextContainer>
          <Profile src="https://i.pinimg.com/564x/e4/a5/e7/e4a5e75827905fb1cebbf6718b751109.jpg" alt="Icon" />
          <PostText>i_s2_alien</PostText>
          <IconContainer>
            <MoreHorizIcon />
          </IconContainer>
        </PostTextContainer>
        <PostImage src="https://i.pinimg.com/564x/b0/cf/d6/b0cfd6655729ba23904d983e6c2b43ff.jpg" alt="Post" />
      </Post>
    </FeedContainer>
  );
};

export default Feed;
