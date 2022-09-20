import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import axios from 'axios'
import Pagination from '@/components/Punks/Pagination';

const Punk = ({ punks, pageCount }: {
  punks: Array<any>,
  pageCount: number
}) => {
  return (
    <Main
      meta={
        <Meta
          title="Cryptopunk list | NFTLaunchKit"
          description="All cryptopunks are listed here."
        />
      }
    >
      {/* Cryptopunk images listed here */}
      <div className="flex-1 flex flex-wrap">
        {punks.map((punk: any, index: number) => (
          <div key={index} className="w-1/4 p-12">
            <img src={ punk.image }/>
          </div>
        ))}
      </div>
      <div className="w-full h-20 flex justify-center items-center">
        <Pagination pageCount={pageCount}/>
      </div>
    </Main>
  );
};

// Fetch cryptopunk list from remote api endpoint
Punk.getInitialProps = async ({ query }: { query: { page: string } }) => {
  const page = Number(query.page ?? 1)
  const pageSize = 20
  // Get external data from cryptopunks.herokuapp.com
  const response = await axios.get('https://cryptopunks.herokuapp.com/api/punks')
  // Paginate data with given page number
  const pageCount = Math.ceil(response.data.length / pageSize)
  const punks = response.data.slice(page * pageSize - pageSize, page * pageSize)
  // Pass data to component
  return {
    punks,
    pageCount
  }
}

export default Punk;