# `dataTemplateCloudinitConfig` Submodule <a name="`dataTemplateCloudinitConfig` Submodule" id="@cdktf/provider-template.dataTemplateCloudinitConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTemplateCloudinitConfig <a name="DataTemplateCloudinitConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config template_cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

new DataTemplateCloudinitConfig(Construct Scope, string Id, DataTemplateCloudinitConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig">DataTemplateCloudinitConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPart` <a name="PutPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart"></a>

```csharp
private void PutPart(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart.parameter.value"></a>

- *Type:* object

---

##### `ResetBase64Encode` <a name="ResetBase64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode"></a>

```csharp
private void ResetBase64Encode()
```

##### `ResetGzip` <a name="ResetGzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip"></a>

```csharp
private void ResetGzip()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

DataTemplateCloudinitConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

DataTemplateCloudinitConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

DataTemplateCloudinitConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part">Part</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered">Rendered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput">Base64EncodeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput">GzipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput">PartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode">Base64Encode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip">Gzip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part"></a>

```csharp
public DataTemplateCloudinitConfigPartList Part { get; }
```

- *Type:* <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a>

---

##### `Rendered`<sup>Required</sup> <a name="Rendered" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered"></a>

```csharp
public string Rendered { get; }
```

- *Type:* string

---

##### `Base64EncodeInput`<sup>Optional</sup> <a name="Base64EncodeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput"></a>

```csharp
public object Base64EncodeInput { get; }
```

- *Type:* object

---

##### `GzipInput`<sup>Optional</sup> <a name="GzipInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput"></a>

```csharp
public object GzipInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput"></a>

```csharp
public object PartInput { get; }
```

- *Type:* object

---

##### `Base64Encode`<sup>Required</sup> <a name="Base64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode"></a>

```csharp
public object Base64Encode { get; }
```

- *Type:* object

---

##### `Gzip`<sup>Required</sup> <a name="Gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip"></a>

```csharp
public object Gzip { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTemplateCloudinitConfigConfig <a name="DataTemplateCloudinitConfigConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

new DataTemplateCloudinitConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Part,
    object Base64Encode = null,
    object Gzip = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part">Part</a></code> | <code>object</code> | part block. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode">Base64Encode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip">Gzip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#id DataTemplateCloudinitConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part"></a>

```csharp
public object Part { get; set; }
```

- *Type:* object

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#part DataTemplateCloudinitConfig#part}

---

##### `Base64Encode`<sup>Optional</sup> <a name="Base64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode"></a>

```csharp
public object Base64Encode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}.

---

##### `Gzip`<sup>Optional</sup> <a name="Gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip"></a>

```csharp
public object Gzip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#id DataTemplateCloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTemplateCloudinitConfigPart <a name="DataTemplateCloudinitConfigPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

new DataTemplateCloudinitConfigPart {
    string Content,
    string ContentType = null,
    string Filename = null,
    string MergeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#content DataTemplateCloudinitConfig#content}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#filename DataTemplateCloudinitConfig#filename}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType">MergeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#content DataTemplateCloudinitConfig#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#filename DataTemplateCloudinitConfig#filename}.

---

##### `MergeType`<sup>Optional</sup> <a name="MergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType"></a>

```csharp
public string MergeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/template/d/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTemplateCloudinitConfigPartList <a name="DataTemplateCloudinitConfigPartList" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

new DataTemplateCloudinitConfigPartList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get"></a>

```csharp
private DataTemplateCloudinitConfigPartOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataTemplateCloudinitConfigPartOutputReference <a name="DataTemplateCloudinitConfigPartOutputReference" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Template;

new DataTemplateCloudinitConfigPartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetMergeType` <a name="ResetMergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType"></a>

```csharp
private void ResetMergeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput">MergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType">MergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `MergeTypeInput`<sup>Optional</sup> <a name="MergeTypeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput"></a>

```csharp
public string MergeTypeInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `MergeType`<sup>Required</sup> <a name="MergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType"></a>

```csharp
public string MergeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



