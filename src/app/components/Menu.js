import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from 'next/link';

import Wallet from "./Menu/Wallet"


export function Menu() {
    return (
        <>
            <Wallet linkTo={"wallet"} ></Wallet>
            <Wallet linkTo={"wallet"} ></Wallet>
            <Wallet linkTo={"wallet"} ></Wallet>
            <Wallet linkTo={"wallet"} ></Wallet>
        </>
    )
}