import { useRouter } from 'next/router'

// Pagination component
export default ({ pageCount }: {
  pageCount: number
}) => {
  const router = useRouter()
  // Parse current page from url query param
  const currentPage = Number(router.query.page ?? 1)

  // Get page number range to display
  const startPage = currentPage > 2 ? currentPage - 2 : 1
  const endPage = startPage + 5 < pageCount ? startPage + 5: pageCount

  // Navigate to the given page number
  const setCurrentPage = (page: number) => {
    router.push(`/punk?page=${page}`)
  }


  return (
    <nav>
      <ul className="inline-flex -space-x-px">
        <li>
          <a className="cursor-pointer py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              if(currentPage > 1)
                setCurrentPage(currentPage - 1)
            }}
          >
            Previous
            </a>
        </li>
        {Array(endPage - startPage + 1).fill(0).map((_, index) => {
          const page = startPage + index
          return (
            <li key={index}>
              <a className={
                page == currentPage ? 
                'cursor-pointer py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' :
                'cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }
              onClick={() => {
                setCurrentPage(page)
              }}
              >
                {page}
              </a>
            </li>
          )
        })}
        <li>
          <a className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              if(currentPage < pageCount)
                setCurrentPage(currentPage + 1)
            }}
          >
            Next
            </a>
        </li>
      </ul>
    </nav>
  )
}