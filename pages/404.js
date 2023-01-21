import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image"

export default function PageNotFound({title}) {
  return (
    <div className='pagenf'>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='d-flex justify-content-center align-middle'>
        <div className='wrapper-image w-50'>
          <div className='image-container'>
            <Image src={`/404.svg`} className='image' height='100' width='100' alt="404" />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-middle'>
        <Link href="/" className='back-home'>
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  return{
    props: {
      title : 'Sin - Halaman Tidak Ditemukan'
    }
  }
}