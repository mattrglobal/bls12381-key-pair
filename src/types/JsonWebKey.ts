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

export interface JsonWebKey {
  /**
   * Indicates the key type used
   * For BLS12381_G1 and BLS12381_G2 the string "EC" MUST be used
   *
   * @see https://tools.ietf.org/html/rfc7517#section-4.1
   */
  kty: string;

  /**
   * Indicates the curve this key is associated with
   * In the case of BLS12-381, the curve will also indicate if it's a G1 or G2 point
   *
   * For a G1 point, use the string "BLS12381_G1"
   * For a G2 point, use the string "BLS12381_G2"
   */
  crv: string;

  /**
   * This is a compression of the public key point
   *
   * For a G1 public key, X is a 384bit base64url encoding of the octet string representation of the coordinate
   * For a G2 public key, X is a 768bit made up of the concatenation of two 384 bit x coordinates known as
   * x_a and x_b in the following form (x_a || x_b) as a base64url encoding of the octet string representation of the two coordinates
   */
  x: string;

  /**
   * @see https://tools.ietf.org/html/rfc7517#section-4.2
   */
  use?: string;

  /**
   * @see https://tools.ietf.org/html/rfc7517#section-4.3
   */
  key_ops?: string[];

  /**
   * @see https://tools.ietf.org/html/rfc7517#section-4.4
   */
  alg?: string;

  /**
   * @see https://tools.ietf.org/html/rfc7517#section-4.5
   *
   * TODO: Add note about referencing did-jose-extensions when ready
   */
  kid?: string;

  /**
   *
   * IMPORTANT NOTE: d represents the private key value and should not be shared
   * IT IS HIGHLY SENSITIVE DATA AND IF NOT SECURED PROPERLY CONSIDER THE KEY COMPROMISED
   *
   * @see https://tools.ietf.org/html/rfc7517#section-9.2
   */
  d?: string;

  /**
   * This coordinate is not used for BLS Keys, but is kept here to make the interface more standard
   */
  y?: string;

  /**
   * @see https://www.w3.org/TR/WebCryptoAPI/#cryptokey-interface-members
   */
  ext?: boolean;
}
