# Components

The CE-RISE solution combines interoperable data models with modular software components and reusable implementation resources.

## Data models

The solution builds on a layered digital passport data model architecture, designed to support shared structures, specialization, and interoperability across use cases.

<div class="ce-rise-grid">
  <div class="ce-rise-card">
    <h3>Core Layers</h3>
    <p>The foundation of every Digital Passport, providing essential identity and metadata management infrastructure.</p>
  </div>
  <div class="ce-rise-card">
    <h3>Value-Added Information Layers</h3>
    <p>The rich, domain-specific information that creates value for different stakeholders throughout the product or material lifecycle.</p>
  </div>
  <div class="ce-rise-card">
    <h3>Cross-Cutting Utility Layers</h3>
    <p>Reusable components that support data quality and reliability across all other layers.</p>
  </div>
</div>

![Layered data model architecture](https://ce-rise-models.codeberg.page/dp-architecture/dpp-architecture.png)

::: info Take-home message
The CE-RISE data models provide a layered and interoperable structure that supports reuse, specialization, and consistent digital passport information across use cases.
:::

---

## Software components

The software architecture is based on modular service types that can be combined and extended according to need.

### Hexagonal Core Service
The generic model-aware core service of the solution. It resolves model artifacts, validates payloads against the relevant models, and provides the common API used to create, query, and validate digital passport records across different use cases.

### Data-backend
The persistence service of the solution. It stores and retrieves digital passport records without taking on model-specific validation, enrichment, or workflow logic.

### Application services
Specialized application services for particular models, record sections, or business workflows. They collect information, enrich existing records, or compute derived data, and then rely on `hex-core-service` to validate and integrate those results into the overall system.

### Supporting resources

The CE-RISE solution also includes documentation, APIs, repositories, demonstrators, and archived resources that help users understand, evaluate, and reuse the system in practice.

::: info Take-home message
The CE-RISE software components are modular by design, so core services and specialized services can be combined, replaced, and extended as needed.
:::

---

<PageCards
  :items="[
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'References',
      link: '/references'
    }
  ]"
/>
