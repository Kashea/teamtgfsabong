import Link from 'next/link';
import { FaFacebookMessenger } from "react-icons/fa6";

export default function MessengerLink() {
    return (
        <div className='flex flex-col mx-auto items-center'>
            <Link href="https://m.me/albert.andulte.5" passHref target="_blank" rel="noopener noreferrer"
                className='my-4'>
                <FaFacebookMessenger />
            </Link>
            <p>Chat us on Messenger</p> 
        </div>

    );
}
