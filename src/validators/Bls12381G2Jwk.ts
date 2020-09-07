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

import { assertPrivateBlsJwk, assertPublicBlsJwk } from "./JsonWebKey";
import { BlsCurveName, JsonWebKey } from "../types";

export const assertBls12381G2PublicJwk = (jwk: JsonWebKey): boolean => {
  // Returns false because the BLS12-381 G2 x coordinate is not the proper length
  return (
    assertPublicBlsJwk(jwk) &&
    jwk.crv === BlsCurveName.G2 &&
    jwk.x.length === 128
  );
};

export const assertBls12381G2PrivateJwk = (jwk: JsonWebKey): boolean => {
  // Returns false because the BLS12-381 G2 x coordinate is not the proper length
  return (
    assertPrivateBlsJwk(jwk) &&
    jwk.crv === BlsCurveName.G2 &&
    jwk.x.length === 128
  );
};
