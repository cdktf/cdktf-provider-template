# `dataTemplateCloudinitConfig` Submodule <a name="`dataTemplateCloudinitConfig` Submodule" id="@cdktf/provider-template.dataTemplateCloudinitConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTemplateCloudinitConfig <a name="DataTemplateCloudinitConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config template_cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  part: typing.Union[IResolvable, typing.List[DataTemplateCloudinitConfigPart]],
  base64_encode: typing.Union[bool, IResolvable] = None,
  gzip: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.part">part</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]</code> | part block. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.base64Encode">base64_encode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.gzip">gzip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.part"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]

part block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#part DataTemplateCloudinitConfig#part}

---

##### `base64_encode`<sup>Optional</sup> <a name="base64_encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.base64Encode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}.

---

##### `gzip`<sup>Optional</sup> <a name="gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.gzip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart">put_part</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode">reset_base64_encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip">reset_gzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_part` <a name="put_part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart"></a>

```python
def put_part(
  value: typing.Union[IResolvable, typing.List[DataTemplateCloudinitConfigPart]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]

---

##### `reset_base64_encode` <a name="reset_base64_encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode"></a>

```python
def reset_base64_encode() -> None
```

##### `reset_gzip` <a name="reset_gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip"></a>

```python
def reset_gzip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataTemplateCloudinitConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataTemplateCloudinitConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataTemplateCloudinitConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataTemplateCloudinitConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTemplateCloudinitConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part">part</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered">rendered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput">base64_encode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput">gzip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput">part_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode">base64_encode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip">gzip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part"></a>

```python
part: DataTemplateCloudinitConfigPartList
```

- *Type:* <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a>

---

##### `rendered`<sup>Required</sup> <a name="rendered" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered"></a>

```python
rendered: str
```

- *Type:* str

---

##### `base64_encode_input`<sup>Optional</sup> <a name="base64_encode_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput"></a>

```python
base64_encode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gzip_input`<sup>Optional</sup> <a name="gzip_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput"></a>

```python
gzip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `part_input`<sup>Optional</sup> <a name="part_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput"></a>

```python
part_input: typing.Union[IResolvable, typing.List[DataTemplateCloudinitConfigPart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]

---

##### `base64_encode`<sup>Required</sup> <a name="base64_encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode"></a>

```python
base64_encode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gzip`<sup>Required</sup> <a name="gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip"></a>

```python
gzip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataTemplateCloudinitConfigConfig <a name="DataTemplateCloudinitConfigConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  part: typing.Union[IResolvable, typing.List[DataTemplateCloudinitConfigPart]],
  base64_encode: typing.Union[bool, IResolvable] = None,
  gzip: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part">part</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]</code> | part block. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode">base64_encode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip">gzip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part"></a>

```python
part: typing.Union[IResolvable, typing.List[DataTemplateCloudinitConfigPart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]

part block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#part DataTemplateCloudinitConfig#part}

---

##### `base64_encode`<sup>Optional</sup> <a name="base64_encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode"></a>

```python
base64_encode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}.

---

##### `gzip`<sup>Optional</sup> <a name="gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip"></a>

```python
gzip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTemplateCloudinitConfigPart <a name="DataTemplateCloudinitConfigPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.Initializer"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart(
  content: str,
  content_type: str = None,
  filename: str = None,
  merge_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content DataTemplateCloudinitConfig#content}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#filename DataTemplateCloudinitConfig#filename}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType">merge_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content DataTemplateCloudinitConfig#content}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#filename DataTemplateCloudinitConfig#filename}.

---

##### `merge_type`<sup>Optional</sup> <a name="merge_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType"></a>

```python
merge_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTemplateCloudinitConfigPartList <a name="DataTemplateCloudinitConfigPartList" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataTemplateCloudinitConfigPartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataTemplateCloudinitConfigPart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]]

---


### DataTemplateCloudinitConfigPartOutputReference <a name="DataTemplateCloudinitConfigPartOutputReference" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_template import data_template_cloudinit_config

dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType">reset_merge_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_merge_type` <a name="reset_merge_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType"></a>

```python
def reset_merge_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput">merge_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType">merge_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `merge_type_input`<sup>Optional</sup> <a name="merge_type_input" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput"></a>

```python
merge_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `merge_type`<sup>Required</sup> <a name="merge_type" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType"></a>

```python
merge_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataTemplateCloudinitConfigPart]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>]

---



