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

import exampleBls12381KeyPair from "./exampleBls12381KeyPair.json";

const exampleSingleMessage = "someData";
const exampleSingleMessageSignature =
  "BB941wFBFAR0VBaD/Skk3gx5PbxMc4y1IYN0KiAnLH542Orc1gTuxNnAbh0VU3umboXUv/PZgN95UiYg9SJsp8u+IpnCiPKsKnuK3mpSsBMABoc6TBEwQutvUwdHtaSBPFg7VpF8tBdpk1c9AEiXMw==";

const exampleMultiMessage = ["test", "value"];
const exampleMultiMessageSignature =
  "CWcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";

const badSignature =
  "AdcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";
const badSignatureBadLength =
  "aaaaAdcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";

export {
    exampleBls12381KeyPair,
    exampleSingleMessage,
    exampleSingleMessageSignature,
    exampleMultiMessage,
    exampleMultiMessageSignature,
    badSignature,
    badSignatureBadLength
};
