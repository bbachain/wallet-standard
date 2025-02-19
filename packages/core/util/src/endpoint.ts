import type { BBAChain } from '@bbachain/wallet-standard-chains';
import {
    SOLANA_DEVNET_CHAIN,
    SOLANA_LOCALNET_CHAIN,
    SOLANA_MAINNET_CHAIN,
    SOLANA_TESTNET_CHAIN,
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
    if (endpoint.includes(MAINNET_ENDPOINT)) return SOLANA_MAINNET_CHAIN;
    if (/\btestnet\b/i.test(endpoint)) return SOLANA_TESTNET_CHAIN;
    if (/\blocalhost\b/i.test(endpoint) || /\b127\.0\.0\.1\b/.test(endpoint)) return SOLANA_LOCALNET_CHAIN;
    return SOLANA_MAINNET_CHAIN;
}

/**
 * TODO: docs
 */
export function getEndpointForChain(chain: BBAChain, endpoint?: string): string {
    if (endpoint) return endpoint;
    if (chain === SOLANA_MAINNET_CHAIN) return MAINNET_ENDPOINT;
    if (chain === SOLANA_TESTNET_CHAIN) return TESTNET_ENDPOINT;
    if (chain === SOLANA_LOCALNET_CHAIN) return LOCALNET_ENDPOINT;
    return MAINNET_ENDPOINT;
}
