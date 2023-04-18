# `data_template_file`

Refer to the Terraform Registory for docs: [`data_template_file`](https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file).

# `dataTemplateFile` Submodule <a name="`dataTemplateFile` Submodule" id="@cdktf/provider-template.dataTemplateFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTemplateFile <a name="DataTemplateFile" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file template_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer"></a>

```typescript
import { dataTemplateFile } from '@cdktf/provider-template'

new dataTemplateFile.DataTemplateFile(scope: Construct, id: string, config?: DataTemplateFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig">DataTemplateFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig">DataTemplateFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetVars">resetVars</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

##### `resetVars` <a name="resetVars" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.resetVars"></a>

```typescript
public resetVars(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isConstruct"></a>

```typescript
import { dataTemplateFile } from '@cdktf/provider-template'

dataTemplateFile.DataTemplateFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isTerraformElement"></a>

```typescript
import { dataTemplateFile } from '@cdktf/provider-template'

dataTemplateFile.DataTemplateFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isTerraformDataSource"></a>

```typescript
import { dataTemplateFile } from '@cdktf/provider-template'

dataTemplateFile.DataTemplateFile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.rendered">rendered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.varsInput">varsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.vars">vars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `rendered`<sup>Required</sup> <a name="rendered" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.rendered"></a>

```typescript
public readonly rendered: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `varsInput`<sup>Optional</sup> <a name="varsInput" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.varsInput"></a>

```typescript
public readonly varsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTemplateFileConfig <a name="DataTemplateFileConfig" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.Initializer"></a>

```typescript
import { dataTemplateFile } from '@cdktf/provider-template'

const dataTemplateFileConfig: dataTemplateFile.DataTemplateFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file#filename DataTemplateFile#filename}. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file#id DataTemplateFile#id}. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.template">template</a></code> | <code>string</code> | Contents of the template. |
| <code><a href="#@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.vars">vars</a></code> | <code>{[ key: string ]: string}</code> | variables to substitute. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file#filename DataTemplateFile#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file#id DataTemplateFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Contents of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file#template DataTemplateFile#template}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktf/provider-template.dataTemplateFile.DataTemplateFileConfig.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

variables to substitute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/template/2.2.0/docs/data-sources/file#vars DataTemplateFile#vars}

---



