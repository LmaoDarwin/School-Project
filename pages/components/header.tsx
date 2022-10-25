import { NextPage } from 'next';
import Image from 'next/image';

const Header: NextPage = () => {
  return (
    <div >
      <div>
        <Image src={'/logo.svg'} width={120} height={120} priority/>
      </div>
    </div>
  );
};

export default Header;
