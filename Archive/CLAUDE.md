# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the Data Management Plan (DMP) and related documentation for the HE²AT Center (Heat and Health in Africa Transdisciplinary Center), a U54 Cooperation agreement with the NIH (2021-2026). The repository primarily contains policy documents, data governance frameworks, and compliance documentation rather than traditional code.

## Document Structure and Versioning

### Primary Documents
- `HE2AT_DMP_v2.2_COMPLETE.md` - Main Data Management Plan document (comprehensive)
- `HE2AT_DMP_v2.2_COMPLETE_with_figures.docx` - Word version with embedded figures
- `DMP_v2.2_Changes_Summary_Table.md` - Summary of changes between versions
- `Data Types.xlsx` - Data classification and type definitions

### Archive Organization
- `Archive/Version_X.X/` - Historical versions organized by version number
- `Archive/Standalone_Documents/` - Supporting documents and agreements
- `Personal Information Processing Agreements/` - Signed compliance agreements

### Document Versioning
- Documents follow semantic versioning (v2.0, v2.1, v2.2)
- Version 2.2 represents the cloud migration update
- Always work with the highest version number unless specifically requested
- Draft versions are stored in `Archive/Version_X.X_Drafts/` directories

## Key Content Areas

### Data Management Framework
The repository documents a comprehensive data management workflow covering:
- Original Study Data → Consortium Shared Data → RP1/RP2 De-identified Data → Inferential Data
- POPIA compliance and data protection procedures
- Cloud migration implementation (WHC-managed infrastructure)
- Data Access Committee (DAC) governance procedures

### Technical Infrastructure
- Primary storage: WHC-managed cloud infrastructure + UCT servers (dual capability)
- Encryption: AES-256 encryption standard for data at rest and in transit
- Platform: CSAG/UCT Jupyter Hub with cloud-based computational resources
- Security: 24/7 SOC monitoring with advanced threat detection

### Compliance and Governance
- Protection of Personal Information Act (POPIA) compliance
- Ethics approval processes (Wits HREC references: RP1-220605, RP2-220606)
- Data Transfer Agreements and access procedures
- Risk assessment and mitigation strategies

## Working with Documents

### Document Editing Guidelines
- Maintain document structure and formatting consistency
- Use tracked changes format for major revisions (marked with `<span style="color: red">**[TRACKED CHANGE]**</span>`)
- Update version numbers and dates when making significant changes
- Ensure all changes maintain POPIA compliance and ethical standards

### Key Stakeholders and Contacts
- DMAC PIs: Christopher Jack (UCT), Sibusisiwe Makhanya (IBM)
- Health Data Acquisition: Craig Parker (Wits PHR), Stanley Luchters (CeSHHAR)
- Core Data Team: Multiple members at UCT and Wits PHR (see section 15 of main DMP)

### Cross-Reference Requirements
When updating documents, ensure consistency across:
- Main DMP document and summary tables
- Version numbers and dates
- Contact information and institutional affiliations
- Technical specifications and compliance requirements

## Document Maintenance

### Regular Updates Required
- Ethics approval references and contact information
- Technical infrastructure specifications during cloud migration
- Compliance procedures and risk assessments
- Data Access Committee composition and procedures

### Archive Management
- Maintain chronological organization of versions
- Keep signed agreements and approvals in designated folders
- Preserve audit trail for regulatory compliance
- Document all changes in summary tables

## Special Considerations

### Sensitive Content
- Documents contain references to personal data handling procedures
- Maintain confidentiality of ethics approval processes
- Ensure all updates maintain regulatory compliance
- Do not modify core ethics and compliance frameworks without proper review

### Cloud Migration Context
Version 2.2 specifically addresses the ongoing migration from UCT on-premise servers to WHC-managed cloud infrastructure. When working with technical specifications, consider both current (UCT) and future (cloud) infrastructure capabilities.