import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
const BySpaceNavItem = () => {
    const router = useRouter();
    return (
        <div className="BuyingSpaceNav">
        <span className={router.pathname==="/buyingspace/channels" ? "BuyingSpaceNavActive" : ""}>
        <Link href="/buyingspace/channels">Channels</Link>
        </span>
        <span className={router.pathname==="/buyingspace/spaces" ? "BuyingSpaceNavActive" : ""}>
          <Link href="/buyingspace/spaces">Spaces</Link>
        </span>
      </div>
    );
}

export default BySpaceNavItem;