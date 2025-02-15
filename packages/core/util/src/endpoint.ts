import type { BBAChain } from '@bbachain/wallet-standard-chains';
import {
    BBACHAIN_LOCALNET_CHAIN,
    BBACHAIN_MAINNET_CHAIN,
    BBACHAIN_TESTNET_CHAIN,
} from '@bbachain/wallet-standard-chains';

/** TODO: docs */
export const MAINNET_ENDPOINT = 'https://api-mainnet.bbachain.com';
/** TODO: docs */
export const TESTNET_ENDPOINT = 'https://api-testnet.bbachain.com';
/** TODO: docs */
export const LOCALNET_ENDPOINT = 'http://localhost:8899';

/**
 * TODO: docs
 */
export function getChainForEndpoint(endpoint: string): BBAChain {
    if (endpoint.includes(MAINNET_ENDPOINT)) return BBACHAIN_MAINNET_CHAIN;
    if (/\btestnet\b/i.test(endpoint)) return BBACHAIN_TESTNET_CHAIN;
    if (/\blocalhost\b/i.test(endpoint) || /\b127\.0\.0\.1\b/.test(endpoint)) return BBACHAIN_LOCALNET_CHAIN;
    return BBACHAIN_MAINNET_CHAIN;
}

/**
 * TODO: docs
 */
export function getEndpointForChain(chain: BBAChain, endpoint?: string): string {
    if (endpoint) return endpoint;
    if (chain === BBACHAIN_MAINNET_CHAIN) return MAINNET_ENDPOINT;
    if (chain === BBACHAIN_TESTNET_CHAIN) return TESTNET_ENDPOINT;
    if (chain === BBACHAIN_LOCALNET_CHAIN) return LOCALNET_ENDPOINT;
    return MAINNET_ENDPOINT;
}
