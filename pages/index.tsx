import { NextPage } from 'next';
import Form from './components/form';
import Styles from '../styles/home.module.css'
import Navbar from './components/header';

const Home: NextPage = () => {
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
      <Navbar/>
      <Form />
      {/* Footer */}
      </main>
      
      <section className={Styles.bg}>
      {/* Background */}
      </section>
    </div>
  );
};

export default Home;
