import type { IdentifierString } from '@wallet-standard/base';
import type {
    BBAChainSignTransactionInput,
    BBAChainSignTransactionOptions,
    BBAChainTransactionCommitment,
    BBAChainTransactionVersion,
} from './signTransaction.js';

/** Name of the feature. */
export const BBAChainSignAndSendTransaction = 'bbachain:signAndSendTransaction';

/** TODO: docs */
export type BBAChainSignAndSendTransactionFeature = {
    /** Name of the feature. */
    readonly [BBAChainSignAndSendTransaction]: {
        /** Version of the feature API. */
        readonly version: BBAChainSignAndSendTransactionVersion;

        /** TODO: docs */
        readonly supportedTransactionVersions: readonly BBAChainTransactionVersion[];

        /**
         * Sign transactions using the account's secret key and send them to the chain.
         *
         * @param inputs Inputs for signing and sending transactions.
         *
         * @return Outputs of signing and sending transactions.
         */
        readonly signAndSendTransaction: BBAChainSignAndSendTransactionMethod;
    };
};

/** Version of the feature. */
export type BBAChainSignAndSendTransactionVersion = '1.0.0';

/** TODO: docs */
export type BBAChainSignAndSendTransactionMethod = (
    ...inputs: readonly BBAChainSignAndSendTransactionInput[]
) => Promise<readonly BBAChainSignAndSendTransactionOutput[]>;

/** Input for signing and sending a transaction. */
export interface BBAChainSignAndSendTransactionInput extends BBAChainSignTransactionInput {
    /** Chain to use. */
    readonly chain: IdentifierString;

    /** TODO: docs */
    readonly options?: BBAChainSignAndSendTransactionOptions;
}

/** Output of signing and sending a transaction. */
export interface BBAChainSignAndSendTransactionOutput {
    /** Transaction signature, as raw bytes. */
    readonly signature: Uint8Array;
}

/** Options for signing and sending a transaction. */
export type BBAChainSignAndSendTransactionOptions = BBAChainSignTransactionOptions & {
    /** Desired commitment level. If provided, confirm the transaction after sending. */
    readonly commitment?: BBAChainTransactionCommitment;

    /** Disable transaction verification at the RPC. */
    readonly skipPreflight?: boolean;

    /** Maximum number of times for the RPC node to retry sending the transaction to the leader. */
    readonly maxRetries?: number;
};
