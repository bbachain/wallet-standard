// This is copied with modification from @wallet-standard/wallet

import {
    BBAChainSignAndSendTransaction,
    BBAChainSignMessage,
    BBAChainSignTransaction,
} from '@bbachain/wallet-standard-features';
import type { WalletAccount } from '@wallet-standard/base';
import { BBACHAIN_CHAINS } from './solana.js';

const chains = BBACHAIN_CHAINS;
const features = [BBAChainSignAndSendTransaction, BBAChainSignTransaction, BBAChainSignMessage] as const;

export class GhostWalletAccount implements WalletAccount {
    readonly #address: WalletAccount['address'];
    readonly #publicKey: WalletAccount['publicKey'];
    readonly #chains: WalletAccount['chains'];
    readonly #features: WalletAccount['features'];
    readonly #label: WalletAccount['label'];
    readonly #icon: WalletAccount['icon'];

    get address() {
        return this.#address;
    }

    get publicKey() {
        return this.#publicKey.slice();
    }

    get chains() {
        return this.#chains.slice();
    }

    get features() {
        return this.#features.slice();
    }

    get label() {
        return this.#label;
    }

    get icon() {
        return this.#icon;
    }

    constructor({ address, publicKey, label, icon }: Omit<WalletAccount, 'chains' | 'features'>) {
        if (new.target === GhostWalletAccount) {
            Object.freeze(this);
        }

        this.#address = address;
        this.#publicKey = publicKey;
        this.#chains = chains;
        this.#features = features;
        this.#label = label;
        this.#icon = icon;
    }
}
