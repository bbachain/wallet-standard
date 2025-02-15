import type { BBAChainTransactionVersion } from './signTransaction.js';
import type {
    BBAChainSignAndSendTransactionInput,
    BBAChainSignAndSendTransactionOutput,
} from './signAndSendTransaction.js';

/** Name of the feature */
export const SignAndSendAllTransactions = 'bbachain:signAndSendAllTransactions';

/** TODO: docs */
export type BBAChainSignAndSendAllTransactionsFeature = {
    /** Name of the feature. */
    readonly [SignAndSendAllTransactions]: {
        /** Version of the feature API. */
        readonly version: BBAChainSignAndSendAllTransactionsVersion;

        /** TODO: docs */
        readonly supportedTransactionVersions: readonly BBAChainTransactionVersion[];

        /**
         * Sign transactions using the account's secret key and send them to the chain.
         *
         * @param inputs {BBAChainSignAndSendTransactionInput[]} Inputs for signing and sending multiple transactions.
         * @param options {BBAChainSignAndSendAllTransactionsOptions} Options for signing and sending transactions.
         *
         * @return Outputs of signing and sending transactions.
         */
        readonly signAndSendAllTransactions: BBAChainSignAndSendAllTransactionsMethod;
    };
};

/** Version of the feature. */
export type BBAChainSignAndSendAllTransactionsVersion = '1.0.0';

/** TODO: docs */
export type BBAChainSignAndSendAllTransactionsMethod = (
    inputs: readonly BBAChainSignAndSendTransactionInput[],
    options?: BBAChainSignAndSendAllTransactionsOptions
) => Promise<readonly PromiseSettledResult<BBAChainSignAndSendTransactionOutput>[]>;

/** Options for signing and sending multiple transactions. */
export type BBAChainSignAndSendAllTransactionsOptions = {
    /** Mode for signing and sending transactions. */
    readonly mode?: BBAChainSignAndSendAllTransactionsMode;
};

/** Mode for signing and sending transactions. */
export type BBAChainSignAndSendAllTransactionsMode = 'parallel' | 'serial';
