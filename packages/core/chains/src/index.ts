import type { IdentifierString } from '@wallet-standard/base';

/** BBAChain Mainnet cluster, e.g. https://api-mainnet.bbachain.com */
export const BBACHAIN_MAINNET_CHAIN = 'bbachain:mainnet';

/** BBAChain Testnet cluster, e.g. https://api-testnet.bbachain.com */
export const BBACHAIN_TESTNET_CHAIN = 'bbachain:testnet';

/** BBAChain Localnet cluster, e.g. http://localhost:8899 */
export const BBACHAIN_LOCALNET_CHAIN = 'bbachain:localnet';

/** Array of all BBAChain clusters */
export const BBACHAIN_CHAINS = [BBACHAIN_MAINNET_CHAIN, BBACHAIN_TESTNET_CHAIN, BBACHAIN_LOCALNET_CHAIN] as const;

/** Type of all BBAChain clusters */
export type BBAChain = (typeof BBACHAIN_CHAINS)[number];

/**
 * Check if a chain corresponds with one of the BBAChain clusters.
 */
export function isBBAChain(chain: IdentifierString): chain is BBAChain {
    return BBACHAIN_CHAINS.includes(chain as BBAChain);
}
