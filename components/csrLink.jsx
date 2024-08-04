import Link from 'next/link';
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export default function MessengerLink() {
    return (
        <div className='flex flex-col mx-auto items-center'>
            <div className='flex flex-row gap-4'>
                <Link href="https://m.me/albert.andulte.5" passHref target="_blank" rel="noopener noreferrer"
                    className='my-4'>
                    <FaFacebookMessenger className='text-2xl' />
                </Link>
                <Link href="https://t.me/TEAMTGFCSR" passHref target="_blank" rel="noopener noreferrer"
                    className='my-4'>
                    <FaTelegram className='text-2xl' />
                </Link>
            </div>
            <p>Chat Us</p>
        </div>

    );
}
