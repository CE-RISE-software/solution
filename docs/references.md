# References

## Data Models

- Digital Passport Data Model Architecture: [Description](https://ce-rise-models.codeberg.page/dp-architecture/)
- **Core Layers**
  - DP Record Metadata: [Schema Files](https://ce-rise-models.codeberg.page/dp-record-metadata/) - [Source](https://codeberg.org/CE-RISE-models/dp-record-metadata)
  - DP Access and Governance: [Schema Files](https://ce-rise-models.codeberg.page/dp-access-and-governance/) - [Source](https://codeberg.org/CE-RISE-models/dp-access-and-governance)
  - DP Record Custody: [Schema Files](https://ce-rise-models.codeberg.page/dp-record-custody/) - [Source](https://codeberg.org/CE-RISE-models/dp-record-custody)
  - Material Profile: [Schema Files](https://ce-rise-models.codeberg.page/material-profile/) - [Source](https://codeberg.org/CE-RISE-models/material-profile)
  - Product Profile: [Schema Files](https://ce-rise-models.codeberg.page/product-profile/) - [Source](https://codeberg.org/CE-RISE-models/product-profile)
- **Value-Added Information Layers**
  - Traceability and Life Cycle Event: [Schema Files](https://ce-rise-models.codeberg.page/traceability-and-life-cycle-events/) - [Source](https://codeberg.org/CE-RISE-models/traceability-and-life-cycle-events)
  - Diagnostic Results: [Schema Files](https://ce-rise-models.codeberg.page/diagnostic-results/) - [Source](https://codeberg.org/CE-RISE-models/diagnostic-results)
  - Usage and Maintenance: [Schema Files](https://ce-rise-models.codeberg.page/usage-and-maintenance/) - [Source](https://codeberg.org/CE-RISE-models/usage-and-maintenance)
  - Integrated Life Cycle Analysis: [Schema Files](https://ce-rise-models.codeberg.page/integrated-lca/) - [Source](https://codeberg.org/CE-RISE-models/integrated-lca)
  - Circularity and End-of-Life: [Schema Files](https://ce-rise-models.codeberg.page/circularity-and-eol/) - [Source](https://codeberg.org/CE-RISE-models/circularity-and-eol)
  - RE-Indicators Specification Data Model: [Schema Files](https://ce-rise-models.codeberg.page/re-indicators-specification/) - [Source](https://codeberg.org/CE-RISE-models/re-indicators-specification)
  - Compliance and Standards: [Schema Files](https://ce-rise-models.codeberg.page/compliance-and-standards/) - [Source](https://codeberg.org/CE-RISE-models/compliance-and-standards)
- **Cross-Cutting Utility Layers**
  - \[FORTHCOMING\]

## Software
- **Core Service**
  - Hexagonal Core: **<span class="ce-link-label">[Docker Image]</span>** *rg.fr-par.scw.cloud/ce-rise-software/hex-core-service:latest* - [CLI for Linux, MacOS and Windows](https://codeberg.org/CE-RISE-software/hex-core-service/releases) - [Documentation](https://ce-rise-software.codeberg.page/hex-core-service/) - [Source](https://codeberg.org/CE-RISE-software/hex-core-service)
  - Go Software Development Kit for Hexagonal Core: [Go Reference](https://pkg.go.dev/github.com/CE-RISE-software/hex-core-sdk-go) - [Documentation](https://ce-rise-software.codeberg.page/hex-core-sdk-go/) - [Source](https://codeberg.org/CE-RISE-software/hex-core-sdk-go)
  - Python Software Development Kit for Hexagonal Core: [PYPI Package](https://pypi.org/project/ce-rise-hex-core-sdk/) - [Documentation](https://ce-rise-software.codeberg.page/hex-core-sdk-python/) -  [Source](https://codeberg.org/CE-RISE-software/hex-core-sdk-python)
  - TypeScript Software Development Kit for Hexagonal Core: [NPM Package](https://www.npmjs.com/package/@ce-rise/hex-core-sdk-typescript) - [Documentation](https://ce-rise-software.codeberg.page/hex-core-sdk-typescript/) - [Source](https://codeberg.org/CE-RISE-software/hex-core-sdk-typescript)
- **Data Backend Services**
  - DP Storage JSONDB: **<span class="ce-link-label">[Docker Image]</span>** *rg.fr-par.scw.cloud/ce-rise-software/dp-storage-jsondb:latest* - [Documentation](https://ce-rise-software.codeberg.page/dp-storage-jsondb-service/) - [Source](https://codeberg.org/CE-RISE-software/dp-storage-jsondb-service)
- **Application Services**
  - RE-Indicators Calculation: **<span class="ce-link-label">[Docker Image]</span>** *\[FORTHCOMING\]* - <span class="ce-link-label">Documentation:</span> \[FORTHCOMING\] - [Source](https://codeberg.org/CE-RISE-software/re-indicators-calculation-service)
- **Web Dynamic Frontend**
  - \[FORTHCOMING\]
- **Testing, Demonstration, and Deployment**
  - DP System GitOps Template: [Documentation](https://ce-rise-software.codeberg.page/dp-system-gitops-template/) - [Source](https://codeberg.org/CE-RISE-software/dp-system-gitops-template)
  - Digital Passport System: Local Demonstrator: [Source](https://codeberg.org/CE-RISE-software/dp-system-local-demonstrator)

## Project
- CE-RISE Data Models: [Source Repositories](https://codeberg.org/CE-RISE-models)
- CE-RISE Software: [Source Repositories](https://codeberg.org/CE-RISE-software)
- CE-RISE Output (Deliverables, Software, Data Models, etc.):[Permanent Archive](https://zenodo.org/communities/ce-rise/)

<PageCards
  :items="[
    {
      title: 'Overview',
      link: '/overview'
    },
    {
      title: 'How it works',
      link: '/how-it-works'
    }
  ]"
/>
