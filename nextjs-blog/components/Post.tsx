import classes from '../styles/utils.module.scss';
import React from 'react';
import { Date } from './Date';

export const Post = ({ post }) => {
  return (
    <article>
      <h1 className={classes.headingXl}>{post.title}</h1>
      <div className={classes.lightText}>
        <Date dateString={post.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
};