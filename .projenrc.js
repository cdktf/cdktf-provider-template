/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: false,
  terraformProvider: "hashicorp/template@~> 2.2",
  cdktfVersion: "^0.18.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "18.12.0",
  jsiiVersion: "^5.0.1",
  devDeps: ["@cdktf/provider-project@^0.2.95"],
});

project.synth();
