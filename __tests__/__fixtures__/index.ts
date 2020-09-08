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

import exampleBls12381G2JwkKeyPair from "./exampleBls12381G2JwkKeyPair.json";
import exampleBls12381G2KeyPair from "./exampleBls12381G2KeyPair.json";

const exampleSingleMessage = new Uint8Array(Buffer.from("someData"));
const exampleSingleMessageG2KeySignature =
  "o6eLL+eFfvSdh+vyNCsyZxmVJTLe2DuqD93W6hG7M7se+9MdoyEdPRNiB6aM5XjVBaJQ6wSt41HTVcHTnq3aOCDAVlc27m70SJwVCUgbsqA9J/tBEqfZF7VEGs79765wIubvyed/WQR/wZGUlRSg/w==";

const exampleMultiMessage = [
  new Uint8Array(Buffer.from("test")),
  new Uint8Array(Buffer.from("value"))
];
const exampleMultiMessageG2KeySignature =
  "gTeYNYnogNM2En/YLq7pEtDDOi1PIlVtKBevXQjIMZtk1KdOtApAw2HUNV0eFG5mXhD28X0tmXbubLqwQb0K/lKxVZJvTS2MyuP1bRDnsyJB9tOE/AnpoNDWKnjjVu6tQNgG3YNQsJZhVgvHyUAo8A==";

const badSignature =
  "AdcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";
const badSignatureBadLength =
  "aaaaAdcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";

export {
  exampleBls12381G2JwkKeyPair,
  exampleBls12381G2KeyPair,
  exampleSingleMessage,
  exampleSingleMessageG2KeySignature,
  exampleMultiMessage,
  exampleMultiMessageG2KeySignature,
  badSignature,
  badSignatureBadLength
};
