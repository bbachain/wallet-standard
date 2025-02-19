import {
    isWalletAdapterCompatibleStandardWallet,
    type StandardWalletAdapter,
    type WalletAdapterCompatibleStandardWallet,
} from '@bbachain/wallet-adapter-base';

/**
 * @deprecated Use `StandardWalletAdapter` from `@bbachain/wallet-adapter-base` instead.
 *
 * @group Deprecated
 */
export type StandardAdapter = StandardWalletAdapter;

/**
 * @deprecated Use `WalletAdapterCompatibleStandardWallet` from `@bbachain/wallet-adapter-base` instead.
 *
 * @group Deprecated
 */
export type WalletAdapterCompatibleWallet = WalletAdapterCompatibleStandardWallet;

/**
 * @deprecated Use `isWalletAdapterCompatibleStandardWallet` from `@bbachain/wallet-adapter-base` instead.
 *
 * @group Deprecated
 */
export const isWalletAdapterCompatibleWallet = isWalletAdapterCompatibleStandardWallet;
