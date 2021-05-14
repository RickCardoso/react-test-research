import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../../components/Layout';
import { Post } from '../../components/Post/Post';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const PostPage = ({ postData }) => {
  return (
    <Layout withHeader>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post post={postData} />
      <Link href="/posts">
        <a>← Back to posts</a>
      </Link>
    </Layout>
  );
};

export default PostPage;
