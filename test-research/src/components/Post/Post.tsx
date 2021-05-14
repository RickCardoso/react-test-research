import { Typography } from '@loft/copan-components';
import React, { FC, ReactElement } from 'react';

export type PostProps = {
  post: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

export const Post: FC<PostProps> = ({ post }: PostProps): ReactElement => {
  return (
    <>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="subtitle">{post.date}</Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </Typography>
    </>
  );
};
