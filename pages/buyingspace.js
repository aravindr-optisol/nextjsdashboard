import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BuyingSpace = (page) => {
  const router = useRouter();
  return (
    <div className="container-fluid p-2">
    <div className='row'>
      <div className='col-md-3'>
        <h1>Channels  </h1>
      </div>
      <div className='col-md-6'>
      <h1>Kentico Kontent - </h1>
      </div>
      <div className='col-md-3'>
      <h1>Tristan Wells</h1>
      </div>
    </div>
    </div>
  );
}

export default BuyingSpace;