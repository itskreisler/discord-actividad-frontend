// Next Imports
import { Inter } from '@next/font/google'

// Components Imports
import MainLayout from '@/layouts/mainLayout/mainLayout'

// StylesImports
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App ({ Component, pageProps }) {
  return (
    <MainLayout className={`${inter.className}`}>
      <Component {...pageProps} />
    </MainLayout>
  )
}
