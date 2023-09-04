import React, { FC } from 'react'
import styled from 'styled-components/native'

interface PostItemProps {
  imageUrl: string
  title: string,
  data: string
}

export const PostItem: FC<PostItemProps> = ({ imageUrl, title, data }) => {
  return (
    <Post>
      <PostImage source={{ uri: imageUrl }} />
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
  margin-right: 15px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostTitle = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;

const PostData = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;
