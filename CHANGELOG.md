# [0.6.0](https://github.com/mattrglobal/bls12381-key-pair/compare/v0.5.0...v0.6.0) (2021-05-25)

### Features

- bump bbs-signatures-dep ([#41](https://github.com/mattrglobal/bls12381-key-pair/issues/41)) ([6556d27](https://github.com/mattrglobal/bls12381-key-pair/commit/6556d27d82f45e6b149fc355d8512eb928ccd953))

# [0.5.0](https://github.com/mattrglobal/bls12381-key-pair/compare/v0.4.0...v0.5.0) (2021-02-24)

### Features

- add async api support for bbs-signatures ([#33](https://github.com/mattrglobal/bls12381-key-pair/issues/33)) ([6b18486](https://github.com/mattrglobal/bls12381-key-pair/commit/6b1848617875d9db16b22f746c897614c8df0d90))
- add support to convert to and from JWKs ([#25](https://github.com/mattrglobal/bls12381-key-pair/issues/25)) ([98235ce](https://github.com/mattrglobal/bls12381-key-pair/commit/98235ce2e2b0a8bdaa4aec85f3008ad057dbcade)), closes [#12](https://github.com/mattrglobal/bls12381-key-pair/issues/12)
- adds support for G1 key pairs ([#26](https://github.com/mattrglobal/bls12381-key-pair/issues/26)) ([aeea218](https://github.com/mattrglobal/bls12381-key-pair/commit/aeea2183df7d7cf5d2599c42489f4b33cda62d22)), closes [#15](https://github.com/mattrglobal/bls12381-key-pair/issues/15)
- bump bbs signatures version ([#34](https://github.com/mattrglobal/bls12381-key-pair/issues/34)) ([ad69446](https://github.com/mattrglobal/bls12381-key-pair/commit/ad69446b1941277c0af89911d14bcec6d527da9d))
- update bls12381G2 names and add keylength check to the constructor ([#27](https://github.com/mattrglobal/bls12381-key-pair/issues/27)) ([3e11f99](https://github.com/mattrglobal/bls12381-key-pair/commit/3e11f99870de14b190a72ff05faae7d90fab1f18))

# [0.4.0](https://github.com/mattrglobal/bls12381-key-pair/compare/v0.3.0...v0.4.0) (2020-08-27)

### Bug Fixes

- linting ([046a371](https://github.com/mattrglobal/bls12381-key-pair/commit/046a37110a1bc1f30d90a6bbca19a03cd9732a70))

### Features

- add fromFingerprint ([09a5403](https://github.com/mattrglobal/bls12381-key-pair/commit/09a5403e566b76d98d7eae3dfcfdf89065d534a1))
- switch to use bbs-signatures ([#19](https://github.com/mattrglobal/bls12381-key-pair/issues/19)) ([ca85df2](https://github.com/mattrglobal/bls12381-key-pair/commit/ca85df2310266a46a17c0c423d667a471b194dbb))
- update bbs dependency to latest ([#5](https://github.com/mattrglobal/bls12381-key-pair/issues/5)) ([03a6db8](https://github.com/mattrglobal/bls12381-key-pair/commit/03a6db802c97d08bd9e441a5300b82415976bde5))
- update sign and verify apis to use Uint8Arrays ([#22](https://github.com/mattrglobal/bls12381-key-pair/issues/22)) ([e7b615a](https://github.com/mattrglobal/bls12381-key-pair/commit/e7b615adf9c16a850575ac7f8469ba77da1ca6d3))

### BREAKING CHANGES

- All operations involving messages and nonces for bbs signatures are now in terms of Uint8Array's rather than strings

# [0.3.0](https://github.com/mattrglobal/bls12381-key-pair/compare/v0.2.0...v0.3.0) (2020-05-25)

### Features

- update bbs dependency to latest ([#5](https://github.com/mattrglobal/bls12381-key-pair/issues/5)) ([03a6db8](https://github.com/mattrglobal/bls12381-key-pair/commit/03a6db802c97d08bd9e441a5300b82415976bde5))

# [0.2.0](https://github.com/mattrglobal/bls12381-key-pair/compare/v0.1.0...v0.2.0) (2020-05-09)

### Features

- add .from() method on key pair ([#2](https://github.com/mattrglobal/bls12381-key-pair/issues/2)) ([7a646be](https://github.com/mattrglobal/bls12381-key-pair/commit/7a646be2ed4f2432e4fac9b7830e086c1b9bb89d))

# 0.1.0 (2020-05-07)

### Features

- initial implementation ([d835902](https://github.com/mattrglobal/bls12381-key-pair/commit/d835902a6e0ce981fba5ce60202b05cdc9ce63d2))
