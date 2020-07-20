/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  exampleBls12381KeyPair,
  exampleMultiMessage,
  exampleMultiMessageSignature,
  exampleSingleMessage,
  exampleSingleMessageSignature,
  badSignature,
  badSignatureBadLength
} from "./__fixtures__";

import { Bls12381G2KeyPair } from "../src";
import {
  DEFAULT_BLS12381_PRIVATE_KEY_LENGTH,
  DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
} from "@mattrglobal/bbs-signatures";
import base58 from "bs58";

const key = new Bls12381G2KeyPair(exampleBls12381KeyPair);
const { sign } = key.signer();
const { verify } = key.verifier();

describe("Bls12381G2KeyPair", () => {
  it("should load public private key from options", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toEqual(exampleBls12381KeyPair.privateKeyBase58);
  });

  it("should load public private key from options using .from()", async () => {
    const myLdKey = await Bls12381G2KeyPair.from(exampleBls12381KeyPair);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toEqual(exampleBls12381KeyPair.privateKeyBase58);
  });

  it("should load public key from options", async () => {
    let keyOptions = { ...exampleBls12381KeyPair };
    delete keyOptions.privateKeyBase58;

    const myLdKey = new Bls12381G2KeyPair(keyOptions);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should load public key from options using .from()", async () => {
    let keyOptions = { ...exampleBls12381KeyPair };
    delete keyOptions.privateKeyBase58;

    const myLdKey = await Bls12381G2KeyPair.from(keyOptions);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should load public key from fingerprint", async () => {
    let keyOptions = { ...exampleBls12381KeyPair };
    delete keyOptions.privateKeyBase58;

    const myLdKey = Bls12381G2KeyPair.fromFingerprint({
      fingerprint: `zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD`
    });

    expect(myLdKey.id).toBe(
      "#zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD"
    );
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe(
      "did:key:zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD"
    );

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should throw error loading public key from fingerprint when it does not start with multibase", async () => {
    expect(() =>
      Bls12381G2KeyPair.fromFingerprint({
        fingerprint: `aUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD`
      })
    ).toThrowError(
      "Unsupported fingerprint type: expected first character to be `z` indicating base58 encoding, received `a`"
    );
  });

  it("should throw error loading public key from fingerprint when it does not contain correct key identifier", async () => {
    expect(() =>
      Bls12381G2KeyPair.fromFingerprint({
        fingerprint: `zxC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD`
      })
    ).toThrowError(
      "Unsupported public key identifier: expected second character to be `235` indicating BLS12381G2 key pair, received `8`"
    );
  });

  it("should throw error loading public key from fingerprint when it does not contain trailing byte integer", async () => {
    expect(() =>
      Bls12381G2KeyPair.fromFingerprint({
        fingerprint: `zUC93gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD`
      })
    ).toThrowError(
      "Missing variable integer trailing byte: expected third character to be `1` indicating trailing integer, received `2`"
    );
  });

  it("should throw error loading public key from fingerprint when length is incorrect", async () => {
    expect(() =>
      Bls12381G2KeyPair.fromFingerprint({
        fingerprint: `zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WDaaaaa`
      })
    ).toThrowError(
      "Unsupported public key length: expected `96` received `100`"
    );
  });

  it("should add encoded public key", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const result = myLdKey.addEncodedPublicKey({});

    expect(result.publicKeyBase58).toEqual(myLdKey.publicKey);
  });

  it("should create correct public key fingerprint", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const fingerprint = Bls12381G2KeyPair.fingerprintFromPublicKey({
      publicKeyBase58: myLdKey.publicKey
    });

    expect(fingerprint).toEqual(
      "zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD"
    );
  });

  it("should create correct public key fingerprint from key", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const fingerprint = myLdKey.fingerprint();

    expect(fingerprint).toEqual(
      "zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD"
    );
  });

  it("should verify fingerprint", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const result = myLdKey.verifyFingerprint(
      "zUC73gNPc1EnZmDDjYJzE8Bk89VRhuZPQYXFnSiSUZvX9N1i7N5VtMbJyowDR46rtARHLJYRVf7WMbGLb43s9tfTyKF9KFF22vBjXZRomcwtoQJmMNUSY7tfzyhLEy58dwUz3WD"
    );

    expect(result.valid).toBeTruthy();
  });

  it("should throw error when fingerprint does not start with multibase", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const result = myLdKey.verifyFingerprint("aUC6FJ5FE226r");

    expect(result.valid).toBeFalsy();
    expect(result.error).toEqual(
      new Error("`fingerprint` must be a multibase encoded string.")
    );
  });

  it("should throw error when fingerprint does not match", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const result = myLdKey.verifyFingerprint(
      "zUC6FJ5FE226r7W1P1nsWdx8gnRQJhsAFZLooRZnsSwpUdgd8p5gVR4h2u7U5dFubNrBexHM6yipZP4SD2nnn5hXqto5cJ8fCknxAchK9LDmquE"
    );

    expect(result.valid).toBeFalsy();
    expect(result.error).toEqual(
      new Error("The fingerprint does not match the public key.")
    );
  });

  it("should throw error when fingerprint not valid base58", async () => {
    const myLdKey = new Bls12381G2KeyPair(exampleBls12381KeyPair);

    const result = myLdKey.verifyFingerprint("z------");

    expect(result.valid).toBeFalsy();
    expect(result.error).toEqual(new Error("Non-base58 character"));
  });

  it("should generate new key", async () => {
    const myLdKey = await Bls12381G2KeyPair.generate({
      id: "test-key-id",
      controller: "test-key-controller"
    });

    expect(myLdKey.id).toBe("test-key-id");
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe("test-key-controller");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );
  });

  it("should generate new key from seed", async () => {
    const myLdKey = await Bls12381G2KeyPair.generate({
      id: "test-key-id",
      controller: "test-key-controller",
      seed: new Uint8Array(
        base58.decode(
          "2Dk1kmfJaZT2wbWd81piFyKBkd2ip29B3rfEpLud4bCBK3MwUXfk2z3YSLFeNojENkJzW"
        )
      )
    });

    expect(myLdKey.id).toBe("test-key-id");
    expect(myLdKey.type).toBe("Bls12381G2Key2020");
    expect(myLdKey.controller).toBe("test-key-controller");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.privateKeyBuffer).toEqual(
      base58.decode("6DLV2ijYvG7Dh45sP7V9GfprG7sB26GYaJnSuFQX6cD1")
    );
    expect(myLdKey.publicKeyBuffer).toEqual(
      base58.decode(
        "22ChK6FX33MgZtQ9yzTMHTYin7X3yfwHstNvZQ4ScJsodX7H75h9t3VCZhE6EaSpAeUeWrfy9PPPcMzWKQ7zsxXG7tigKqoxGgtyeAjpaJSTcNSXAj2YKRwHYQ1dfLv6ZuHq"
      )
    );
  });

  it("should throw error on sign when no private key", async () => {
    let keyOptions = exampleBls12381KeyPair;
    delete keyOptions.privateKeyBase58;
    const badKey = new Bls12381G2KeyPair(keyOptions);
    const { sign } = badKey.signer();
    expect(typeof sign).toBe("function");
    await expect(sign({ data: exampleSingleMessage })).rejects.toThrowError(
      "No private key to sign with."
    );
  });

  it("should sign single message", async () => {
    expect(typeof sign).toBe("function");
    const signature = await sign({ data: exampleSingleMessage });
    expect(signature).toBeDefined();
  });

  it("should sign multiple messages", async () => {
    expect(typeof sign).toBe("function");
    const signature = await sign({ data: exampleMultiMessage });
    expect(signature).toBeDefined();
  });

  it("should verify single message", async () => {
    expect(typeof verify).toBe("function");
    expect(
      await verify({
        data: exampleSingleMessage,
        signature: exampleSingleMessageSignature
      })
    ).toBe(true);
  });

  it("should verify multiple messages", async () => {
    expect(typeof verify).toBe("function");
    expect(
      await verify({
        data: exampleMultiMessage,
        signature: exampleMultiMessageSignature
      })
    ).toBe(true);
  });

  it("should not verify bad signature of correct length", async () => {
    expect(typeof verify).toBe("function");
    expect(
      await verify({ data: exampleSingleMessage, signature: badSignature })
    ).toBe(false);
  });

  it("should not verify bad signature of incorrect length", async () => {
    expect(typeof verify).toBe("function");
    expect(
      await verify({
        data: exampleSingleMessage,
        signature: badSignatureBadLength
      })
    ).toBe(false);
  });

  it("should sign and verify multiple messages", async () => {
    expect(typeof sign).toBe("function");
    const signature = await sign({ data: exampleMultiMessage });
    expect(signature).toBeDefined();
    expect(typeof verify).toBe("function");
    expect(await verify({ data: exampleMultiMessage, signature })).toBe(true);
  });
});
