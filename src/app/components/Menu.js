import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {Link} from 'next/link';
const Wallet = () => {
    return <AccountBalanceWalletIcon fontSize={small}></AccountBalanceWalletIcon>
}

export const Menu = () => {
    return <Link><Wallet /> </ Link>
}