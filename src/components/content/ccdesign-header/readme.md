# ccdesign-header



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type     | Default     |
| --------------- | ---------------- | ----------- | -------- | ----------- |
| `data`          | `data`           |             | `string` | `undefined` |
| `formattedData` | `formatted-data` |             | `any`    | `undefined` |


## Dependencies

### Used by

 - [ccdesign-cv-template](../../template/ccdesign-cv-template)

### Depends on

- [ccdesign-lazy-image](../../ui/ccdesign-lazy-image)
- [ccdesign-button](../../ui/ccdesign-button)
- [mobile-nav](mobile-nav)

### Graph
```mermaid
graph TD;
  ccdesign-header --> ccdesign-lazy-image
  ccdesign-header --> ccdesign-button
  ccdesign-header --> mobile-nav
  ccdesign-button --> ccdesign-icon
  mobile-nav --> ccdesign-lazy-image
  mobile-nav --> ccdesign-button
  ccdesign-cv-template --> ccdesign-header
  style ccdesign-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
