import Link from "next/link"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



export default function Wallet({ isLogged, fontSize, linkTo }:
    { isLogged: boolean, fontSize: string, linkTo: string }) {
    return (
        <Link href={linkTo}>{linkTo}<AccountBalanceWalletIcon ></ AccountBalanceWalletIcon></Link>
    )
}