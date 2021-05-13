import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { Post } from '../../components/Post'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  };
};

const PostPage = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post post={postData} />
    </Layout>
  );
};

export default PostPage;