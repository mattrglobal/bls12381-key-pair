![Mattr logo](./docs/assets/mattr-black.svg)

# bls12381-key-pair

![npm-version](https://badgen.net/npm/v/@mattrglobal/bls12381-key-pair)
![npm-unstable-version](https://badgen.net/npm/v/@mattrglobal/bls12381-key-pair/unstable)
![push-master](https://github.com/mattrglobal/bls12381-key-pair/workflows/push-master/badge.svg)
![push-release](https://github.com/mattrglobal/bls12381-key-pair/workflows/push-release/badge.svg)
![codecov](https://codecov.io/gh/mattrglobal/bls12381-key-pair/branch/master/graph/badge.svg)

This library supports generating [BLS12-381](https://tools.ietf.org/html/draft-irtf-cfrg-pairing-friendly-curves-02#section-2.4) key pairs and supports the
signing and verification of [BBS+ signatures](https://github.com/mattrglobal/bbs-signatures-spec).

## Getting started

To use this package within your project simply run

```
npm install @mattrglobal/bls12381-key-pair
```

Or with [Yarn](https://yarnpkg.com/)

```
yarn add @mattrglobal/bls12381-key-pair
```

## Getting started as a contributor

The following describes how to get started as a contributor to this project

### Prerequisites

The following is a list of dependencies you must install to build and contribute to this project

- [Yarn](https://yarnpkg.com/)

For more details see our [contribution guidelines](./docs/CONTRIBUTING.md)

#### Install

To install the package dependencies run:

```
yarn install --frozen-lockfile
```

#### Build

To build the project run:

```
yarn build
```

#### Test

To run the test in the project run:

```
yarn test
```

## Security Policy

Please see our [security policy](./SECURITY.md) for additional details about responsible disclosure of security related issues.
