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
  exampleBls12381G1JwkKeyPair,
  exampleBls12381G1KeyPair
} from "./__fixtures__";

import { Bls12381G1KeyPair } from "../src";
import {
  DEFAULT_BLS12381_PRIVATE_KEY_LENGTH,
  DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
} from "@mattrglobal/bbs-signatures";
import base58 from "bs58";

describe("Bls12381G1KeyPair", () => {
  it("should load public private key from options", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toEqual(
      exampleBls12381G1KeyPair.privateKeyBase58
    );
  });

  it("should load public private key from options using .from()", async () => {
    const myLdKey = await Bls12381G1KeyPair.from(exampleBls12381G1KeyPair);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toEqual(
      exampleBls12381G1KeyPair.privateKeyBase58
    );
  });

  it("should load public private key from options using .fromJwk()", async () => {
    const myLdKey = await Bls12381G1KeyPair.fromJwk(
      exampleBls12381G1JwkKeyPair
    );

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toEqual(
      exampleBls12381G1KeyPair.privateKeyBase58
    );
  });

  it("should load public key from options", async () => {
    let keyOptions = { ...exampleBls12381G1KeyPair };
    delete keyOptions.privateKeyBase58;

    const myLdKey = new Bls12381G1KeyPair(keyOptions);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should load public key from options using .from()", async () => {
    let keyOptions = { ...exampleBls12381G1KeyPair };
    delete keyOptions.privateKeyBase58;

    const myLdKey = await Bls12381G1KeyPair.from(keyOptions);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should load public key from options using .fromJwk()", async () => {
    let keyOptions = { ...exampleBls12381G1JwkKeyPair };
    delete keyOptions.privateKeyJwk;

    const myLdKey = await Bls12381G1KeyPair.fromJwk(keyOptions);

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should throw an error when no JWK from options using .fromJwk()", async () => {
    let keyOptions = { ...exampleBls12381G1JwkKeyPair };
    delete keyOptions.privateKeyJwk;
    delete keyOptions.publicKeyJwk;
    await expect(Bls12381G1KeyPair.fromJwk(keyOptions)).rejects.toThrow(
      "The JWK provided is not a valid"
    );
  });

  it("should load public key from fingerprint", async () => {
    let keyOptions = { ...exampleBls12381G1KeyPair };
    delete keyOptions.privateKeyBase58;

    const myLdKey = Bls12381G1KeyPair.fromFingerprint({
      fingerprint: `z3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM`
    });

    expect(myLdKey.id).toBe(
      "#z3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM"
    );
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe(
      "did:key:z3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM"
    );

    expect(myLdKey.privateKeyBuffer).toBeUndefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.publicKey).toEqual(exampleBls12381G1KeyPair.publicKeyBase58);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should throw error loading public key from fingerprint when it does not start with multibase", async () => {
    expect(() =>
      Bls12381G1KeyPair.fromFingerprint({
        fingerprint: `3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM`
      })
    ).toThrowError(
      "Unsupported fingerprint type: expected first character to be `z` indicating base58 encoding, received `3`"
    );
  });

  it("should throw error loading public key from fingerprint when it does not contain correct key identifier", async () => {
    expect(() =>
      Bls12381G1KeyPair.fromFingerprint({
        fingerprint: `zB1ZL5zsY9YggjXupcFmsv9Vtc58EcXmV9AT2eHKn4o74KHL68CzG8Ar31MTGeSVJtuzZ`
      })
    ).toThrowError(
      "Unsupported public key identifier: expected second character to be `234` indicating BLS12381G1 key pair, received `14`"
    );
  });

  it("should throw error loading public key from fingerprint when it does not contain trailing byte integer", async () => {
    expect(() =>
      Bls12381G1KeyPair.fromFingerprint({
        fingerprint: `z3tjAJuBxTzjVo3XEG3zx2XGtHtr2HkczcaZcwkBYQYzEbyr3gZi5DuZrQ28x2BwwnHfqy`
      })
    ).toThrowError(
      "Missing variable integer trailing byte: expected third character to be `1` indicating trailing integer, received `180`"
    );
  });

  it("should throw error loading public key from fingerprint when length is incorrect", async () => {
    expect(() =>
      Bls12381G1KeyPair.fromFingerprint({
        fingerprint: `z3tzEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycMaaaaaa`
      })
    ).toThrowError(
      "Unsupported public key length: expected `48` received `54`"
    );
  });

  it("should add encoded public key", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const result = myLdKey.addEncodedPublicKey({});

    expect(result.publicKeyBase58).toEqual(myLdKey.publicKey);
  });

  it("should return a jwk public key", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);
    expect(myLdKey.publicKeyJwk).toEqual(
      exampleBls12381G1JwkKeyPair.publicKeyJwk
    );
  });

  it("should return a jwk private key", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);
    expect(myLdKey.privateKeyJwk).toEqual(
      exampleBls12381G1JwkKeyPair.privateKeyJwk
    );
  });

  it("should return undefined for privateKeyJwk when no privateKeyBuffer exists", async () => {
    let keyOptions = { ...exampleBls12381G1JwkKeyPair };
    delete keyOptions.privateKeyJwk;
    const myLdKey = await Bls12381G1KeyPair.fromJwk(keyOptions);
    expect(myLdKey.privateKeyJwk).toBeUndefined();
  });

  it("should return undefined for privateKey when no privateKeyBuffer exists", async () => {
    let keyOptions = { ...exampleBls12381G1KeyPair };
    delete keyOptions.privateKeyBase58;
    const myLdKey = await Bls12381G1KeyPair.from(keyOptions);
    expect(myLdKey.privateKey).toBeUndefined();
  });

  it("should create correct public key fingerprint", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const fingerprint = Bls12381G1KeyPair.fingerprintFromPublicKey({
      publicKeyBase58: myLdKey.publicKey
    });

    expect(fingerprint).toEqual(
      "z3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM"
    );
  });

  it("should create correct public key fingerprint from key", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const fingerprint = myLdKey.fingerprint();

    expect(fingerprint).toEqual(
      "z3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM"
    );
  });

  it("should verify fingerprint", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const result = myLdKey.verifyFingerprint(
      "z3tEGWeoHSJzYmJLezqJsbSBW31o3wuYRusP5Cp7JTkSeNSqQNMbrdZaDupQ7DHWGYoycM"
    );

    expect(result.valid).toBeTruthy();
  });

  it("should throw error when fingerprint does not start with multibase", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const result = myLdKey.verifyFingerprint("aUC6FJ5FE226r");

    expect(result.valid).toBeFalsy();
    expect(result.error).toEqual(
      new Error("`fingerprint` must be a multibase encoded string.")
    );
  });

  it("should throw error when fingerprint does not match", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const result = myLdKey.verifyFingerprint(
      "z3tEFp6vDYGjZZvVsMvoBHqF4gvUxEuBMP1SfeFB9FXa1cocagRM81YrPjd9cxBMzriiM7"
    );

    expect(result.valid).toBeFalsy();
    expect(result.error).toEqual(
      new Error("The fingerprint does not match the public key.")
    );
  });

  it("should throw error when fingerprint not valid base58", async () => {
    const myLdKey = new Bls12381G1KeyPair(exampleBls12381G1KeyPair);

    const result = myLdKey.verifyFingerprint("z------");

    expect(result.valid).toBeFalsy();
    expect(result.error).toEqual(new Error("Non-base58 character"));
  });

  it("should generate new key", async () => {
    const myLdKey = await Bls12381G1KeyPair.generate({
      id: "did:example:489398593#test",
      controller: "did:example:489398593"
    });

    expect(myLdKey.id).toBe("did:example:489398593#test");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("did:example:489398593");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );
  });

  it("should generate new key from seed", async () => {
    const myLdKey = await Bls12381G1KeyPair.generate({
      id: "test-key-id",
      controller: "test-key-controller",
      seed: new Uint8Array(
        base58.decode(
          "2Dk1kmfJaZT2wbWd81piFyKBkd2ip29B3rfEpLud4bCBK3MwUXfk2z3YSLFeNojENkJzW"
        )
      )
    });

    expect(myLdKey.id).toBe("test-key-id");
    expect(myLdKey.type).toBe("Bls12381G1Key2020");
    expect(myLdKey.controller).toBe("test-key-controller");

    expect(myLdKey.privateKeyBuffer).toBeDefined();
    expect(myLdKey.publicKeyBuffer).toBeDefined();

    expect(myLdKey.privateKeyBuffer?.length).toBe(
      DEFAULT_BLS12381_PRIVATE_KEY_LENGTH
    );
    expect(myLdKey.publicKeyBuffer.length).toBe(
      DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH
    );

    expect(myLdKey.privateKeyBuffer).toEqual(
      base58.decode("6DLV2ijYvG7Dh45sP7V9GfprG7sB26GYaJnSuFQX6cD1")
    );
    expect(myLdKey.publicKeyBuffer).toEqual(
      base58.decode(
        "7cJGQwV5XyzUjJEzY5doVhv62Qqou6qW7G4eh9YbUywgyeDCobiXjN8CnQ7wpWBrGR"
      )
    );
  });
});
