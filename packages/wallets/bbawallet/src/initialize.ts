import { registerWallet } from './register.js';
import { BBAWalletWallet } from './wallet.js';
import type { BBAWallet } from './window.js';

export function initialize(bbaWallet: BBAWallet): void {
    registerWallet(new BBAWalletWallet(bbaWallet));
}
