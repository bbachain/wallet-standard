import type { BBAChainTransactionCommitment } from '@bbachain/wallet-standard-features';

// Copied from @bbachain/web3.js
type Commitment = 'processed' | 'confirmed' | 'finalized' | 'recent' | 'single' | 'singleGossip' | 'root' | 'max';

/**
 * TODO: docs
 */
export function getCommitment(commitment?: Commitment): BBAChainTransactionCommitment | undefined {
    switch (commitment) {
        case 'processed':
        case 'confirmed':
        case 'finalized':
        case undefined:
            return commitment;
        case 'recent':
            return 'processed';
        case 'single':
        case 'singleGossip':
            return 'confirmed';
        case 'max':
        case 'root':
            return 'finalized';
        default:
            return undefined;
    }
}
