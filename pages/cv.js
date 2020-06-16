import Layout from '../components/layout';
import { getCVData } from '../lib/cv';
import CV from '../components/cv';

export async function getStaticProps() {
  const data = getCVData();
  return {
    props: {
      data,
    },
  };
}

export default function CVPage({ data }) {
  return (
    <Layout title={data.title}>
      <CV data={data} />
    </Layout>
  );
}
