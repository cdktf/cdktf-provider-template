# `data_template_cloudinit_config`

Refer to the Terraform Registory for docs: [`data_template_cloudinit_config`](https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config).

# `dataTemplateCloudinitConfig` Submodule <a name="`dataTemplateCloudinitConfig` Submodule" id="@cdktf/provider-template.dataTemplateCloudinitConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTemplateCloudinitConfig <a name="DataTemplateCloudinitConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config template_cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

new dataTemplateCloudinitConfig.DataTemplateCloudinitConfig(scope: Construct, id: string, config: DataTemplateCloudinitConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig">DataTemplateCloudinitConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig">DataTemplateCloudinitConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart">putPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode">resetBase64Encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip">resetGzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPart` <a name="putPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart"></a>

```typescript
public putPart(value: IResolvable | DataTemplateCloudinitConfigPart[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.putPart.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]

---

##### `resetBase64Encode` <a name="resetBase64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetBase64Encode"></a>

```typescript
public resetBase64Encode(): void
```

##### `resetGzip` <a name="resetGzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetGzip"></a>

```typescript
public resetGzip(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTemplateCloudinitConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTemplateCloudinitConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTemplateCloudinitConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part">part</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered">rendered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput">base64EncodeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput">gzipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput">partInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode">base64Encode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip">gzip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.part"></a>

```typescript
public readonly part: DataTemplateCloudinitConfigPartList;
```

- *Type:* <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList">DataTemplateCloudinitConfigPartList</a>

---

##### `rendered`<sup>Required</sup> <a name="rendered" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.rendered"></a>

```typescript
public readonly rendered: string;
```

- *Type:* string

---

##### `base64EncodeInput`<sup>Optional</sup> <a name="base64EncodeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64EncodeInput"></a>

```typescript
public readonly base64EncodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gzipInput`<sup>Optional</sup> <a name="gzipInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzipInput"></a>

```typescript
public readonly gzipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.partInput"></a>

```typescript
public readonly partInput: IResolvable | DataTemplateCloudinitConfigPart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]

---

##### `base64Encode`<sup>Required</sup> <a name="base64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gzip`<sup>Required</sup> <a name="gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTemplateCloudinitConfigConfig <a name="DataTemplateCloudinitConfigConfig" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.Initializer"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

const dataTemplateCloudinitConfigConfig: dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part">part</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]</code> | part block. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode">base64Encode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip">gzip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.part"></a>

```typescript
public readonly part: IResolvable | DataTemplateCloudinitConfigPart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]

part block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#part DataTemplateCloudinitConfig#part}

---

##### `base64Encode`<sup>Optional</sup> <a name="base64Encode" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#base64_encode DataTemplateCloudinitConfig#base64_encode}.

---

##### `gzip`<sup>Optional</sup> <a name="gzip" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#gzip DataTemplateCloudinitConfig#gzip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#id DataTemplateCloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTemplateCloudinitConfigPart <a name="DataTemplateCloudinitConfigPart" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.Initializer"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

const dataTemplateCloudinitConfigPart: dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content DataTemplateCloudinitConfig#content}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#filename DataTemplateCloudinitConfig#filename}. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType">mergeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content DataTemplateCloudinitConfig#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#content_type DataTemplateCloudinitConfig#content_type}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#filename DataTemplateCloudinitConfig#filename}.

---

##### `mergeType`<sup>Optional</sup> <a name="mergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/cloudinit_config#merge_type DataTemplateCloudinitConfig#merge_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTemplateCloudinitConfigPartList <a name="DataTemplateCloudinitConfigPartList" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

new dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get"></a>

```typescript
public get(index: number): DataTemplateCloudinitConfigPartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTemplateCloudinitConfigPart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>[]

---


### DataTemplateCloudinitConfigPartOutputReference <a name="DataTemplateCloudinitConfigPartOutputReference" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer"></a>

```typescript
import { dataTemplateCloudinitConfig } from '@cdktf/provider-template'

new dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType">resetMergeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetMergeType` <a name="resetMergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.resetMergeType"></a>

```typescript
public resetMergeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput">mergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType">mergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="mergeTypeInput" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeTypeInput"></a>

```typescript
public readonly mergeTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `mergeType`<sup>Required</sup> <a name="mergeType" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTemplateCloudinitConfigPart;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-template.dataTemplateCloudinitConfig.DataTemplateCloudinitConfigPart">DataTemplateCloudinitConfigPart</a>

---



