import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import type { Chain } from 'viem';

const tea_Assam = {
    id: 93384,
    name: 'tea-assam',
    nativeCurrency: {
        decimals: 18,
        name: 'Tea',
        symbol: 'TEA',
    },
    rpcUrls: {
        public: {
            http: ['https://assam-rpc.tea.xyz'],
        },
        default: {
            http: ['https://assam-rpc.tea.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'tea-assam',
            url: 'https://assam.tea.xyz',
        },
    },

    testnet: false,
} as const satisfies Chain;


export const wagmiConfig = getDefaultConfig({
    appName: 'tea-assam',
    projectId: 'cdddc2c45ee7a243f73916dfe293c0ca',
    chains: [
        tea_Assam,
    ],
    transports: {
        [tea_Assam.id]: http(),
    },
});
