import React, { FC } from 'react'
import styled from 'styled-components/native'

interface PostItemProps {
  title: string,
  data: string
}

export const PostItem: FC<PostItemProps> = ({title, data}) => {
  return (
    <Post>
      <PostImage source={{ uri: 'https://vignette.wikia.nocookie.net/simpsons/images/2/28/200px-Orville_Simpson.png/revision/latest?cb=20120325155243' }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostData>{data}</PostData>
      </PostDetails>
    </Post>
  );
};

const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostTitle = styled.Text`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const PostData = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;
