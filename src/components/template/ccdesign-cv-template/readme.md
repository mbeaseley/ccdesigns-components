# ccdesign-cv-template



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `footer` | `footer`  |             | `string` | `undefined` |
| `header` | `header`  |             | `string` | `undefined` |


## Dependencies

### Depends on

- [ccdesign-header](../../content/ccdesign-header)
- [ccdesign-footer](../../content/ccdesign-footer)

### Graph
```mermaid
graph TD;
  ccdesign-cv-template --> ccdesign-header
  ccdesign-cv-template --> ccdesign-footer
  ccdesign-header --> ccdesign-lazy-image
  ccdesign-header --> ccdesign-button
  ccdesign-header --> mobile-nav
  ccdesign-button --> ccdesign-icon
  mobile-nav --> ccdesign-lazy-image
  mobile-nav --> ccdesign-button
  style ccdesign-cv-template fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
