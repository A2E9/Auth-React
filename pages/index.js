import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">

      <main className="center">
        <h1 className="title">
          Welcome to <a href="https://valentyn.live">Me!</a>
        </h1>

        <p className="description">
          Visit my cool site - - - {' '}
          <code className="code">
          <a href="https://valentyn.live">HERE</a>
          </code>
        </p>

      </main>

    </div>
  )
}
