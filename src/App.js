// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import './styles/globals.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductFeed from './components/ProductFeed';
import FirebaseApp from './firebase';
import Layout from './components/Layout';

function App() {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    (async () => {
      const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      setProducts(products)
    })()
  }, [])

  React.useEffect(()=>{
(()=>{
  try {
    const fs=FirebaseApp.name
    console.log("firebase Connected ",fs)
  } catch (error) {
    console.error(error)
  }
 
})()
  },[])

  return (
    <Layout>
    <div className='bg-gray-100 '>
      <head><title>Amazon 2.0</title></head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
    </Layout>
  );
}

export default App;
// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }
