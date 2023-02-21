# `cloudinitConfig` Submodule <a name="`cloudinitConfig` Submodule" id="@cdktf/provider-template.cloudinitConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudinitConfig <a name="CloudinitConfig" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config template_cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  part: typing.Union[IResolvable, typing.List[CloudinitConfigPart]],
  base64_encode: typing.Union[bool, IResolvable] = None,
  gzip: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.part">part</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]</code> | part block. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.base64Encode">base64_encode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#base64_encode CloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.gzip">gzip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#gzip CloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#id CloudinitConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.part"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#part CloudinitConfig#part}

---

##### `base64_encode`<sup>Optional</sup> <a name="base64_encode" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.base64Encode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#base64_encode CloudinitConfig#base64_encode}.

---

##### `gzip`<sup>Optional</sup> <a name="gzip" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.gzip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#gzip CloudinitConfig#gzip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#id CloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.putPart">put_part</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetBase64Encode">reset_base64_encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetGzip">reset_gzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_part` <a name="put_part" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.putPart"></a>

```python
def put_part(
  value: typing.Union[IResolvable, typing.List[CloudinitConfigPart]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.putPart.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]

---

##### `reset_base64_encode` <a name="reset_base64_encode" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetBase64Encode"></a>

```python
def reset_base64_encode() -> None
```

##### `reset_gzip` <a name="reset_gzip" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetGzip"></a>

```python
def reset_gzip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.part">part</a></code> | <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList">CloudinitConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.rendered">rendered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.base64EncodeInput">base64_encode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.gzipInput">gzip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.partInput">part_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.base64Encode">base64_encode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.gzip">gzip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.part"></a>

```python
part: CloudinitConfigPartList
```

- *Type:* <a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList">CloudinitConfigPartList</a>

---

##### `rendered`<sup>Required</sup> <a name="rendered" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.rendered"></a>

```python
rendered: str
```

- *Type:* str

---

##### `base64_encode_input`<sup>Optional</sup> <a name="base64_encode_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.base64EncodeInput"></a>

```python
base64_encode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gzip_input`<sup>Optional</sup> <a name="gzip_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.gzipInput"></a>

```python
gzip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `part_input`<sup>Optional</sup> <a name="part_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.partInput"></a>

```python
part_input: typing.Union[IResolvable, typing.List[CloudinitConfigPart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]

---

##### `base64_encode`<sup>Required</sup> <a name="base64_encode" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.base64Encode"></a>

```python
base64_encode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gzip`<sup>Required</sup> <a name="gzip" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.gzip"></a>

```python
gzip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudinitConfigConfig <a name="CloudinitConfigConfig" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  part: typing.Union[IResolvable, typing.List[CloudinitConfigPart]],
  base64_encode: typing.Union[bool, IResolvable] = None,
  gzip: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.part">part</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]</code> | part block. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.base64Encode">base64_encode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#base64_encode CloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.gzip">gzip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#gzip CloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#id CloudinitConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.part"></a>

```python
part: typing.Union[IResolvable, typing.List[CloudinitConfigPart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#part CloudinitConfig#part}

---

##### `base64_encode`<sup>Optional</sup> <a name="base64_encode" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.base64Encode"></a>

```python
base64_encode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#base64_encode CloudinitConfig#base64_encode}.

---

##### `gzip`<sup>Optional</sup> <a name="gzip" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.gzip"></a>

```python
gzip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#gzip CloudinitConfig#gzip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#id CloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudinitConfigPart <a name="CloudinitConfigPart" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.Initializer"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfigPart(
  content: str,
  content_type: str = None,
  filename: str = None,
  merge_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#content CloudinitConfig#content}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#content_type CloudinitConfig#content_type}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#filename CloudinitConfig#filename}. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.mergeType">merge_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#merge_type CloudinitConfig#merge_type}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#content CloudinitConfig#content}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#content_type CloudinitConfig#content_type}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#filename CloudinitConfig#filename}.

---

##### `merge_type`<sup>Optional</sup> <a name="merge_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart.property.mergeType"></a>

```python
merge_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/r/cloudinit_config#merge_type CloudinitConfig#merge_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudinitConfigPartList <a name="CloudinitConfigPartList" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfigPartList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudinitConfigPartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudinitConfigPart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>]]

---


### CloudinitConfigPartOutputReference <a name="CloudinitConfigPartOutputReference" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_template import cloudinit_config

cloudinitConfig.CloudinitConfigPartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resetMergeType">reset_merge_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_merge_type` <a name="reset_merge_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.resetMergeType"></a>

```python
def reset_merge_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.mergeTypeInput">merge_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.mergeType">merge_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `merge_type_input`<sup>Optional</sup> <a name="merge_type_input" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.mergeTypeInput"></a>

```python
merge_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `merge_type`<sup>Required</sup> <a name="merge_type" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.mergeType"></a>

```python
merge_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-template.cloudinitConfig.CloudinitConfigPartOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudinitConfigPart, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-template.cloudinitConfig.CloudinitConfigPart">CloudinitConfigPart</a>, cdktf.IResolvable]

---



