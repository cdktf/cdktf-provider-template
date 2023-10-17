# `provider`

Refer to the Terraform Registory for docs: [`template`](https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-template.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TemplateProvider <a name="TemplateProvider" id="@cdktf/provider-template.provider.TemplateProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.provider.TemplateProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_template import provider

provider.TemplateProvider(
  scope: Construct,
  id: str,
  alias: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.provider.TemplateProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.provider.TemplateProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-template.provider.TemplateProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs#alias TemplateProvider#alias}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-template.provider.TemplateProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-template.provider.TemplateProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-template.provider.TemplateProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.provider.TemplateProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-template.provider.TemplateProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-template.provider.TemplateProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-template.provider.TemplateProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-template.provider.TemplateProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-template.provider.TemplateProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-template.provider.TemplateProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TemplateProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-template.provider.TemplateProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_template import provider

provider.TemplateProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.provider.TemplateProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-template.provider.TemplateProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_template import provider

provider.TemplateProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.provider.TemplateProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-template.provider.TemplateProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_template import provider

provider.TemplateProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.provider.TemplateProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-template.provider.TemplateProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_template import provider

provider.TemplateProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TemplateProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.provider.TemplateProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-template.provider.TemplateProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TemplateProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-template.provider.TemplateProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TemplateProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.provider.TemplateProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TemplateProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-template.provider.TemplateProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-template.provider.TemplateProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.provider.TemplateProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-template.provider.TemplateProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-template.provider.TemplateProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-template.provider.TemplateProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-template.provider.TemplateProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-template.provider.TemplateProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-template.provider.TemplateProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-template.provider.TemplateProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.provider.TemplateProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-template.provider.TemplateProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TemplateProviderConfig <a name="TemplateProviderConfig" id="@cdktf/provider-template.provider.TemplateProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.provider.TemplateProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_template import provider

provider.TemplateProviderConfig(
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.provider.TemplateProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-template.provider.TemplateProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs#alias TemplateProvider#alias}

---



