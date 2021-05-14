import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../components';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const PostPage = ({ allPostsData }) => {
  return (
    <Layout withHeader={true} withFooter={true}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default PostPage;
