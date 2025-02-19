import {
    createSignInMessage,
    createSignInMessageText,
    deriveSignInMessage,
    deriveSignInMessageText,
    parseSignInMessage,
    parseSignInMessageText,
    verifySignIn,
} from '../signIn.js';

const signInMessageTests = {
    'with `domain` and `address`': {
        parsed: {
            domain: 'bbachain.com',
            address: 'A',
        },
        text: 'bbachain.com wants you to sign in with your BBAChain account:\nA',
    },
    'with `statement`': {
        parsed: {
            domain: 'bbachain.com',
            address: 'A',
            statement: 'S',
        },
        text: 'bbachain.com wants you to sign in with your BBAChain account:\nA\n\nS',
    },
    'with multi-line `statement`': {
        parsed: {
            domain: 'bbachain.com',
            address: 'A',
            statement: 'S\n\nS',
        },
        text: 'bbachain.com wants you to sign in with your BBAChain account:\nA\n\nS\n\nS',
    },
    'with fields': {
        parsed: {
            domain: 'bbachain.com',
            address: 'A',
            uri: 'https://bbachain.com',
        },
        text: 'bbachain.com wants you to sign in with your BBAChain account:\nA\n\nURI: https://bbachain.com',
    },
    'with `statement` and fields': {
        parsed: {
            domain: 'bbachain.com',
            address: 'A',
            statement: 'S',
            uri: 'https://bbachain.com',
        },
        text: 'bbachain.com wants you to sign in with your BBAChain account:\nA\n\nS\n\nURI: https://bbachain.com',
    },
    'with multi-line `statement` and fields': {
        parsed: {
            domain: 'bbachain.com',
            address: 'A',
            statement: 'S\n\nS',
            uri: 'https://bbachain.com',
        },
        text: 'bbachain.com wants you to sign in with your BBAChain account:\nA\n\nS\n\nS\n\nURI: https://bbachain.com',
    },
};

describe.skip('verifySignIn()', () => {});

describe.skip('deriveSignInMessage()', () => {});

describe.skip('deriveSignInMessageText()', () => {});

describe.skip('parseSignInMessage()', () => {});

describe('parseSignInMessageText()', () => {
    for (const [name, test] of Object.entries(signInMessageTests)) {
        it(name, () => {
            const parsed = parseSignInMessageText(test.text);
            expect(parsed).toEqual(test.parsed);
        });
    }
});

describe.skip('createSignInMessage()', () => {});

describe('createSignInMessageText()', () => {
    for (const [name, test] of Object.entries(signInMessageTests)) {
        it(name, () => {
            const text = createSignInMessageText(test.parsed);
            expect(text).toBe(test.text);
        });
    }
});
