# Components

The CE-RISE solution combines interoperable data models with modular software components and reusable implementation resources.

## Data model architecture

The solution builds on a layered digital passport data model architecture, designed to support shared structures, specialization, and interoperability across use cases.

- **Common layers** support reusable and cross-cutting information structures.
- **Domain and use-case layers** support more specific requirements and extensions.
- **Model architecture** helps align implementations while preserving flexibility.

[View the layered data model architecture](https://ce-rise-models.codeberg.page/dp-architecture/dpp-architecture.png)

## Software components

The software architecture is based on modular service types that can be combined and extended according to need.

### hex-core-service
The generic model-aware core service of the solution. It resolves model artifacts, validates payloads against the relevant models, and provides the common API used to create, query, and validate digital passport records across different use cases.

### data-backend service
The persistence service of the solution. It stores and retrieves digital passport records without taking on model-specific validation, enrichment, or workflow logic.

### Model-focused services
Specialized application services for particular models, record sections, or business workflows. They collect information, enrich existing records, or compute derived data, and then rely on `hex-core-service` to validate and integrate those results into the overall system.

## Supporting resources

The CE-RISE solution also includes documentation, APIs, repositories, demonstrators, and archived resources that help users understand, evaluate, and reuse the system in practice.

---

<PageCards
  :items="[
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Reference',
      link: '/reference'
    }
  ]"
/>
