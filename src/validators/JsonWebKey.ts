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

import { BlsCurveName, JsonWebKey } from "../types";

const checkCommonBlsJwkValues = (jwk: JsonWebKey): boolean => {
  return (
    // A BLS key type MUST be set to "EC"
    typeof jwk !== "undefined" &&
    jwk.kty === "EC" &&
    // The curve property should indicate either "BLS12381_G1" or "BLS12381_G2"
    (jwk.crv === BlsCurveName.G1 || jwk.crv === BlsCurveName.G2)
  );
};

export const assertPublicBlsJwk = (jwk: JsonWebKey): boolean => {
  // Performs common checks, but also checks to make sure a d value is not included
  // If a d value is included then this is a private key not a public key
  return checkCommonBlsJwkValues(jwk) && typeof jwk.d === "undefined";
};

export const assertPrivateBlsJwk = (jwk: JsonWebKey): boolean => {
  return checkCommonBlsJwkValues(jwk);
};
