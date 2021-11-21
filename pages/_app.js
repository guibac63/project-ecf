import 'tailwindcss/tailwind.css';
import "/style/navbar.css";
import "/style/home.css";
import '/style/gallery.css';
import '/style/prestations.css';
import '/style/contact.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
