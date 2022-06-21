import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <div className="container bg-slate-300np">
    <Component {...pageProps} />
  </div>
}
