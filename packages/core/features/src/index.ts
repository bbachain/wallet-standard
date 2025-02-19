import type { WalletWithFeatures } from '@wallet-standard/base';
import type { BBAChainSignAndSendTransactionFeature } from './signAndSendTransaction.js';
import type { BBAChainSignInFeature } from './signIn.js';
import type { BBAChainSignMessageFeature } from './signMessage.js';
import type { BBAChainSignTransactionFeature } from './signTransaction.js';

/** TODO: docs */
export type BBAChainFeatures =
    | BBAChainSignAndSendTransactionFeature
    | BBAChainSignInFeature
    | BBAChainSignMessageFeature
    | BBAChainSignTransactionFeature;

/** TODO: docs */
export type WalletWithBBAChainFeatures = WalletWithFeatures<BBAChainFeatures>;

export * from './signAndSendTransaction.js';
export * from './signIn.js';
export * from './signMessage.js';
export * from './signTransaction.js';
