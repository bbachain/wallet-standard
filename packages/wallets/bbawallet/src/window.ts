import { type BBAChainSignInInput, type BBAChainSignInOutput } from '@bbachain/wallet-standard-features';
import type {
    PublicKey,
    SendOptions,
    Transaction,
    TransactionSignature,
    VersionedTransaction,
} from '@bbachain/web3.js';

export interface BBAWalletEvent {
    connect(...args: unknown[]): unknown;
    disconnect(...args: unknown[]): unknown;
    accountChanged(...args: unknown[]): unknown;
}

export interface BBAWalletEventEmitter {
    on<E extends keyof BBAWalletEvent>(event: E, listener: BBAWalletEvent[E], context?: any): void;
    off<E extends keyof BBAWalletEvent>(event: E, listener: BBAWalletEvent[E], context?: any): void;
}

export interface BBAWallet extends BBAWalletEventEmitter {
    publicKey: PublicKey | null;
    connect(options?: { onlyIfTrusted?: boolean }): Promise<{ publicKey: PublicKey }>;
    disconnect(): Promise<void>;
    signAndSendTransaction<T extends Transaction | VersionedTransaction>(
        transaction: T,
        options?: SendOptions
    ): Promise<{ signature: TransactionSignature }>;
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>;
    signIn(input?: BBAChainSignInInput): Promise<BBAChainSignInOutput>;
}
