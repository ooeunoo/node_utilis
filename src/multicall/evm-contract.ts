import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';

/**
 * 알수없는 문자열
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns 알수없는 문자열
 */
export function getUnknownString(provider: Provider, multiCallAddress: string) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).UNKNOWN_STRING();
}

/**
 * 알수없는 Uint256
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns 알수없는 Uint256
 */
export function getUnknownUint256(
  provider: Provider,
  multiCallAddress: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).UNKNOWN_UINT256();
}

/**
 * 알수없는 Address
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns 알수없는 Address
 */
export function getUnknownAddress(
  provider: Provider,
  multiCallAddress: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).UNKNOWN_ADDRESS();
}

/**
 * 단일 ERC20 잔액 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns ERC20 잔액
 */
export function getSafeERC20BalanceOf(
  provider: Provider,
  multiCallAddress: string,
  tokenAddress: string,
  userAddress: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).safeERC20BalanceOf(tokenAddress, userAddress);
}

/**
 * 단일 ERC20 총 발행량 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트
 * @returns ERC20 총 발행량
 */
export function getSafeERC20TotalSupply(
  provider: Provider,
  multiCallAddress: string,
  tokenAddress: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).safeERC20TotalSupply(tokenAddress);
}

/**
 * 단일 ERC20 메타데이터 정보 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns ERC20 메타데이터 정보 { name, symbol, decimals }
 */
export function getSafeERC20TokenInfo(
  provider: Provider,
  multiCallAddress: string,
  tokenAddress: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getERC20TokenInfos(tokenAddress);
}

/**
 * 다중 ERC20 잔액 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns ERC20 잔액들
 */
export function getBatchERC20TokenBalances(
  provider: Provider,
  multiCallAddress: string,
  userAddresses: string[],
  tokenAddresses: string[],
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchERC20Balances(userAddresses, tokenAddresses);
}

/**
 * 다중 ERC20 메타데이터 정보 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns ERC20 메타데이터 정보들 { name, symbol, decimals }[]
 */
export function getBatchERC20TokenInfos(
  provider: Provider,
  multiCallAddress: string,
  tokenAddresses: string[],
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchERC20Infos(tokenAddresses);
}

/**
 * 다중 ERC20 총 발행량 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트
 * @returns ERC20 총 발행량들
 */
export function getBatchERC20TotalSupply(
  provider: Provider,
  multiCallAddress: string,
  addresses: string[],
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchERC20TotalSupply(addresses);
}

/**
 * 단일 ERC721의 특정 토큰 Id 정보 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress  멀티콜 컨트랙트 주소
 * @returns ERC721 특정 Id 정보 { id , tokenURI, owner }
 */
export function getSafeERC721TokenInfos(
  provider: Provider,
  multiCallAddress: string,
  tokenAddress: string,
  index: number,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getSafeERC721Infos(tokenAddress, index);
}

/**
 * 단일 ERC721의 잔액 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @param tokenAddress 토큰 컨트랙트 주소
 * @param userAddress 유저 주소
 * @returns ERC721 잔액
 */
export function getSafeERC721BalanceOf(
  provider: Provider,
  multiCallAddress: string,
  tokenAddress: string,
  userAddress: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).safeERC721BalanceOf(tokenAddress, userAddress);
}

/**
 * 다중 ERC721의 다중 토큰 Id 정보 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns ERC721 다중 토큰 Id 정보  { id, tokenURI, owner }[]
 */
export function getBatchERC721TokenInfos(
  provider: Provider,
  multiCallAddress: string,
  tokenAddress: string,
  indexes: number[],
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchERC721Infos(tokenAddress, indexes);
}

/**
 * 다중 체인링크 가격 데이터
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @param feeds 체인링크 가격 데이터 피드
 * @returns 체인링크 데이터 피드 { decimal, feed, answer }[]
 */
export function getBatchChainLinkData(
  provider: Provider,
  multiCallAddress: string,
  feeds: string[],
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchChainLinkData(feeds);
}

/**
 * 단일 페어 정보
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns Pair 정보  { reserve0, reserve1 }
 */
export function getSafePairInfos(
  provider: Provider,
  multiCallAddress: string,
  pair: string,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).safePairInfo(pair);
}

/**
 * 다중 페어 정보
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns Pair 정보들 { reserve0, reserve1 }[]
 */
export function getBatchPairInfos(
  provider: Provider,
  multiCallAddress: string,
  pairs: string[],
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchPairInfos(pairs);
}

/**
 * 단일 주소의 CA 여부 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @returns CA 여부
 */
export function getSafeCheckCA(
  provider: Provider,
  multiCallAddress: string,
  targetAddress: string,
): Promise<boolean> {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).checkCA(targetAddress);
}

/**
 * 다중 주소의 CA 여부 조회
 * @param provider 노드 프로바이더
 * @param multiCallAddress  멀티콜 컨트랙트 주소
 * @returns CA 여부들
 */
export function getBatchCheckCA(
  provider: Provider,
  multiCallAddress: string,
  targetAddress: string[],
): Promise<boolean[]> {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).getBatchCheckCA(targetAddress);
}

/**
 * 다중 정적 호출
 * @param provider 노드 프로바이더
 * @param multiCallAddress 멀티콜 컨트랙트 주소
 * @param calls 콜 데이터들
 * @param requireSuccess 필수 성공 여부
 * @returns 정적 호출
 */
export function getBatchStaticAggregator(
  provider: Provider,
  multiCallAddress: string,
  calls: any[][],
  requireSuccess = false,
) {
  return new ethers.Contract(
    multiCallAddress,
    MULTI_CALL_ABI,
    provider,
  ).staticAggregate(requireSuccess, calls);
}

// 멀티콜 컨트랙트 ABI
export const MULTI_CALL_ABI = [
  {
    inputs: [],
    name: 'UNKNOWN_ADDRESS',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UNKNOWN_STRING',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UNKNOWN_UINT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'requireSuccess',
        type: 'bool',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct Aggregator.Call[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'aggregate',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'returnData',
            type: 'bytes',
          },
        ],
        internalType: 'struct Aggregator.Result[]',
        name: 'returnData',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'checkCA',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_targetFeeds',
        type: 'address[]',
      },
    ],
    name: 'getBatchChainLinkData',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'answer',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256',
          },
        ],
        internalType: 'struct ChainLink.ChainLinkData[]',
        name: '_chainLinkData',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_targetAddress',
        type: 'address[]',
      },
    ],
    name: 'getBatchCheckCA',
    outputs: [
      {
        internalType: 'bool[]',
        name: 'result',
        type: 'bool[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'users',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
    ],
    name: 'getBatchERC20Balances',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'addrBalances',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'getBatchERC20Infos',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256',
          },
        ],
        internalType: 'struct ERC20.ERC20Info[]',
        name: 'tokenInfos',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'getBatchERC20TotalSupply',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'totalSupplies',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_indexes',
        type: 'uint256[]',
      },
    ],
    name: 'getBatchERC721Infos',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
        ],
        internalType: 'struct ERC721.ERC721Info[]',
        name: 'erc721Infos',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_targetAddress',
        type: 'address[]',
      },
    ],
    name: 'getBatchGetCode',
    outputs: [
      {
        internalType: 'bytes[]',
        name: 'code',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_pairs',
        type: 'address[]',
      },
    ],
    name: 'getBatchIsPairs',
    outputs: [
      {
        internalType: 'bool[]',
        name: '_isPairs',
        type: 'bool[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_pairs',
        type: 'address[]',
      },
    ],
    name: 'getBatchPairInfos',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
        ],
        internalType: 'struct Pair.PairInfo[]',
        name: '_pairInfos',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBlockBaseFee',
    outputs: [
      {
        internalType: 'uint256',
        name: 'baseFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
    ],
    name: 'getBlockHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'blockHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainId',
    outputs: [
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'getCode',
    outputs: [
      {
        internalType: 'bytes',
        name: 'code',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [
      {
        internalType: 'address',
        name: 'coinbase',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [
      {
        internalType: 'uint256',
        name: 'difficulty',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'gaslimit',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getERC20TokenInfos',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256',
          },
        ],
        internalType: 'struct ERC20.ERC20Info',
        name: 'tokenInfos',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'blockHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getSafeERC721Infos',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
        ],
        internalType: 'struct ERC721.ERC721Info',
        name: 'erc721Infos',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    name: 'isPair',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'feed',
        type: 'address',
      },
    ],
    name: 'safeChainLinkData',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'answer',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256',
          },
        ],
        internalType: 'struct ChainLink.ChainLinkData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
    ],
    name: 'safeERC20BalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'safeERC20Decimals',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'safeERC20Name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'safeERC20Symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'safeERC20TotalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
    ],
    name: 'safeERC721BalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'safeERC721OwnerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'safeERC721TokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'safeERC721TokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    name: 'safePairInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
        ],
        internalType: 'struct Pair.PairInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'requireSuccess',
        type: 'bool',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct Aggregator.Call[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'staticAggregate',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'returnData',
            type: 'bytes',
          },
        ],
        internalType: 'struct Aggregator.Result[]',
        name: 'returnData',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
