import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import type { Chain } from 'viem';

const tea_Sepolia = {
    id: 10218,
    name: 'tea-sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Tea',
        symbol: 'TEA',
    },
    rpcUrls: {
        public: {
            http: ['https://tea-sepolia.g.alchemy.com/public'],
        },
        default: {
            http: ['https://tea-sepolia.g.alchemy.com/public'],
        },
    },
    blockExplorers: {
        default: {
            name: 'tea-sepolia',
            url: 'https://sepolia.tea.xyz',
        },
    },

    testnet: false,
} as const satisfies Chain;


export const wagmiConfig = getDefaultConfig({
    appName: 'tea-sepolia',
    projectId: 'cdddc2c45ee7a243f73916dfe293c0ca',
    chains: [
        tea_Sepolia,
    ],
    transports: {
        [tea_Sepolia.id]: http(),
    },
});
