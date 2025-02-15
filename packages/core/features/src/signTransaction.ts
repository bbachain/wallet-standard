import type { IdentifierString, WalletAccount } from '@wallet-standard/base';

/** Name of the feature. */
export const BBAChainSignTransaction = 'bbachain:signTransaction';

/** TODO: docs */
export type BBAChainSignTransactionFeature = {
    /** Name of the feature. */
    readonly [BBAChainSignTransaction]: {
        /** Version of the feature API. */
        readonly version: BBAChainSignTransactionVersion;

        /** TODO: docs */
        readonly supportedTransactionVersions: readonly BBAChainTransactionVersion[];

        /**
         * Sign transactions using the account's secret key.
         *
         * @param inputs Inputs for signing transactions.
         *
         * @return Outputs of signing transactions.
         */
        readonly signTransaction: BBAChainSignTransactionMethod;
    };
};

/** Version of the feature. */
export type BBAChainSignTransactionVersion = '1.0.0';

/** TODO: docs */
export type BBAChainTransactionVersion = 'legacy' | 0;

/** TODO: docs */
export type BBAChainSignTransactionMethod = (
    ...inputs: readonly BBAChainSignTransactionInput[]
) => Promise<readonly BBAChainSignTransactionOutput[]>;

/** Input for signing a transaction. */
export interface BBAChainSignTransactionInput {
    /** Account to use. */
    readonly account: WalletAccount;

    /** Serialized transaction, as raw bytes. */
    readonly transaction: Uint8Array;

    /** Chain to use. */
    readonly chain?: IdentifierString;

    /** TODO: docs */
    readonly options?: BBAChainSignTransactionOptions;
}

/** Output of signing a transaction. */
export interface BBAChainSignTransactionOutput {
    /**
     * Signed, serialized transaction, as raw bytes.
     * Returning a transaction rather than signatures allows multisig wallets, program wallets, and other wallets that
     * use meta-transactions to return a modified, signed transaction.
     */
    readonly signedTransaction: Uint8Array;
}

/** Options for signing a transaction. */
export type BBAChainSignTransactionOptions = {
    /** Preflight commitment level. */
    readonly preflightCommitment?: BBAChainTransactionCommitment;

    /** The minimum slot that the request can be evaluated at. */
    readonly minContextSlot?: number;
};

/** Commitment level for transactions. */
export type BBAChainTransactionCommitment = 'processed' | 'confirmed' | 'finalized';
