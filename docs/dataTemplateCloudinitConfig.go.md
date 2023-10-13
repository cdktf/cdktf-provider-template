# `data_template_cloudinit_config`

Refer to the Terraform Registory for docs: [`data_template_cloudinit_config`](https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config).

# `dataTemplateCloudinitConfig` Submodule <a name="`dataTemplateCloudinitConfig` Submodule" id="@cdktf/provider-template.dataTemplateCloudinitConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTemplateCloudinitConfig <a name="DataTemplateCloudinitConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config template_cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

datatemplatecloudinitconfig.NewDataTemplateCloudinitConfig(scope Construct, id *string, config DataTemplateCloudinitConfigConfig) DataTemplateCloudinitConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig">DataTemplateCloudinitConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig">DataTemplateCloudinitConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart">PutPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode">ResetBase64Encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip">ResetGzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPart` <a name="PutPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart"></a>

```go
func PutPart(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBase64Encode` <a name="ResetBase64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode"></a>

```go
func ResetBase64Encode()
```

##### `ResetGzip` <a name="ResetGzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip"></a>

```go
func ResetGzip()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

datatemplatecloudinitconfig.DataTemplateCloudinitConfig_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

datatemplatecloudinitconfig.DataTemplateCloudinitConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

datatemplatecloudinitconfig.DataTemplateCloudinitConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part">Part</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered">Rendered</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput">Base64EncodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput">GzipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput">PartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode">Base64Encode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip">Gzip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part"></a>

```go
func Part() DataTemplateCloudinitConfigPartList
```

- *Type:* <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a>

---

##### `Rendered`<sup>Required</sup> <a name="Rendered" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered"></a>

```go
func Rendered() *string
```

- *Type:* *string

---

##### `Base64EncodeInput`<sup>Optional</sup> <a name="Base64EncodeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput"></a>

```go
func Base64EncodeInput() interface{}
```

- *Type:* interface{}

---

##### `GzipInput`<sup>Optional</sup> <a name="GzipInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput"></a>

```go
func GzipInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput"></a>

```go
func PartInput() interface{}
```

- *Type:* interface{}

---

##### `Base64Encode`<sup>Required</sup> <a name="Base64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode"></a>

```go
func Base64Encode() interface{}
```

- *Type:* interface{}

---

##### `Gzip`<sup>Required</sup> <a name="Gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip"></a>

```go
func Gzip() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTemplateCloudinitConfigConfig <a name="DataTemplateCloudinitConfigConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

&datatemplatecloudinitconfig.DataTemplateCloudinitConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Part: interface{},
	Base64Encode: interface{},
	Gzip: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part">Part</a></code> | <code>interface{}</code> | part block. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode">Base64Encode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip">Gzip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part"></a>

```go
Part interface{}
```

- *Type:* interface{}

part block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#part DataTemplateCloudinitConfig#part}

---

##### `Base64Encode`<sup>Optional</sup> <a name="Base64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode"></a>

```go
Base64Encode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}.

---

##### `Gzip`<sup>Optional</sup> <a name="Gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip"></a>

```go
Gzip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTemplateCloudinitConfigPart <a name="DataTemplateCloudinitConfigPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

&datatemplatecloudinitconfig.DataTemplateCloudinitConfigPart {
	Content: *string,
	ContentType: *string,
	Filename: *string,
	MergeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content DataTemplateCloudinitConfig#content}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#filename DataTemplateCloudinitConfig#filename}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType">MergeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content DataTemplateCloudinitConfig#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#filename DataTemplateCloudinitConfig#filename}.

---

##### `MergeType`<sup>Optional</sup> <a name="MergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType"></a>

```go
MergeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTemplateCloudinitConfigPartList <a name="DataTemplateCloudinitConfigPartList" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

datatemplatecloudinitconfig.NewDataTemplateCloudinitConfigPartList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataTemplateCloudinitConfigPartList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get"></a>

```go
func Get(index *f64) DataTemplateCloudinitConfigPartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataTemplateCloudinitConfigPartOutputReference <a name="DataTemplateCloudinitConfigPartOutputReference" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-template-go/template/v9/datatemplatecloudinitconfig"

datatemplatecloudinitconfig.NewDataTemplateCloudinitConfigPartOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataTemplateCloudinitConfigPartOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType">ResetMergeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename"></a>

```go
func ResetFilename()
```

##### `ResetMergeType` <a name="ResetMergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType"></a>

```go
func ResetMergeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput">MergeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType">MergeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `MergeTypeInput`<sup>Optional</sup> <a name="MergeTypeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput"></a>

```go
func MergeTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `MergeType`<sup>Required</sup> <a name="MergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType"></a>

```go
func MergeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



