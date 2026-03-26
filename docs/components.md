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

<div class="ce-rise-grid">
  <div class="ce-rise-card">
    <h3>Hexagonal Core</h3>
    <p>The generic model-aware core service of the solution. It resolves model artifacts, validates payloads against the relevant models, and provides the common API used to create, query, and validate digital passport records across different use cases. It is designed to support multiple consumers through inbound interfaces, including support for authentication and idempotency, while keeping orchestration and validation logic independent from model-specific applications.</p>
  </div>
  <div class="ce-rise-card">
    <h3>Data Backend</h3>
    <p>In production settings, DPP storage and data maintenance are expected to be handled by dedicated, verifiable, and trustworthy specialized systems. CE-RISE has also developed specialized integration interfaces with state-of-the-art commercial solutions for DPP storage. Within the CE-RISE solution, the current data-backend component provides a practical solution for testing and development through standard database integration. It stores and retrieves digital passport records without taking on model-specific validation, enrichment, or workflow logic.</p>
  </div>
  <div class="ce-rise-card">
    <h3>Application Services</h3>
    <p>Specialized application services for particular models, record sections, or business workflows. They collect information, enrich existing records, or compute derived data, and can link the system to live data and siloed data storage, including ERP systems, data spaces, and digital twin representations. They then rely on Hex Core Service to validate and integrate those results into the overall system.</p>
  </div>
</div>
The CE-RISE solution also includes documentation, APIs, web and command line clients, repositories, demonstrators, and archived resources that help users understand, evaluate, and reuse the system in practice.
<div style="height: 1rem;"></div>` 

![CE-RISE Solution Software Components](/images/solution-components.png)

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
