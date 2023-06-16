import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo1.png" alt="logo" width={200} height={30} />
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header;