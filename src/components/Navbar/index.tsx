import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { useAccount, useConnect } from 'wagmi'

export default function() {
  const router = useRouter()
  const curSection = router.pathname == "/punk" ? 0 : ( router.pathname == "/about" ? 1 : -1 )

  // Use wagmi hooks to interact with Metamask wallet
  const { isConnected, address } = useAccount({})
  const { connect, connectors } = useConnect()

  // Navigate to Cryptopunk page
  const onClickPunk = useCallback(() => {
    router.push('/punk')
  }, [])
  // Navigate to About page
  const onClickAbout = useCallback(() => {
    router.push('/about')
  }, [])

  // Connec to the Metamask wallet
  const onConnect = useCallback(async () => {
    if(connectors.length > 0)
      connect({ connector: connectors[0] })
  }, [])

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white font-bold text-lg">
              <span className="hidden h-8 w-auto lg:block">NFTLaunchKit</span>
            </div>
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex space-x-4">
                <a className={`${curSection == 0 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium cursor-pointer`} onClick={onClickPunk}>CryptoPunks</a>
                <a className={`${curSection == 1 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium cursor-pointer`} onClick={onClickAbout}>About</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!isConnected ? (
              <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={onConnect}
              >
                <span>Connect to a wallet</span>
              </button>
            ) : (
              <span className="text-gray-400 rounded-full bg-gray-900 p-2 pl-4 pr-4">{ address }</span>
            )
            }
              

            <div className="relative ml-3">
              <div>
                <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={onClickPunk}>CryptoPunks</a>

          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={onClickAbout}>About</a>
        </div>
      </div>
    </nav>
  )
}