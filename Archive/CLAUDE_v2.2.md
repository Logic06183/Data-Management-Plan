# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the Data Management Plan (DMP) and related documentation for the HE²AT Center (Heat and Health in Africa Transdisciplinary Center), a U54 Cooperation agreement with the NIH (2021-2026). The repository primarily contains policy documents, data governance frameworks, and compliance documentation rather than traditional code.

## Document Structure and Versioning

### Primary Documents
- `HE2AT_DMP_v2.2_COMPLETE_with_figures.docx` - Main Data Management Plan document with embedded figures
- `DMP_v2.2_Changes_Summary_HREC_FINAL.docx` - Summary of changes for HREC review
- `Data Types.xlsx` - Data classification and type definitions
- `Personal Information Processing Agreements/` - Signed compliance agreements for data processors

### Archive Organization
- `Archive/Version_X.X/` - Historical versions organized chronologically
- `Archive/Version_2.2_Drafts/` - Draft versions of the v2.2 cloud migration update
- `Archive/Standalone_Documents/` - Supporting documents (DAC terms, data request procedures)
- `Archive/CLAUDE.md` - Previous version of this guidance document

### Document Versioning
- Documents follow semantic versioning (v2.0, v2.1, v2.2)
- Version 2.2 represents the cloud migration update (current version)
- Always work with the highest version number unless specifically requested
- Maintain version history in Archive folders

## Key Content Areas

### Data Management Framework
The repository documents a comprehensive data management workflow:
- Original Study Data → Consortium Shared Data → RP1/RP2 De-identified Data → Inferential Data
- POPIA (Protection of Personal Information Act) compliance procedures
- Cloud migration to WHC-managed infrastructure
- Data Access Committee (DAC) governance and procedures

### Technical Infrastructure
- **Primary Storage**: Dual capability - WHC-managed cloud infrastructure + UCT servers
- **Encryption**: AES-256 for data at rest and in transit
- **Platform**: CSAG/UCT Jupyter Hub with cloud computational resources
- **Security**: 24/7 SOC monitoring with advanced threat detection
- **Backup**: Automated daily backups with 30-day retention

### Compliance and Governance
- POPIA compliance framework
- Ethics approval: Wits HREC (RP1-220605, RP2-220606)
- Data Transfer Agreements and access procedures
- Risk assessment and mitigation strategies
- Personal information processing agreements

## Working with Documents

### Document Editing Guidelines
- Maintain consistent document structure and formatting
- Use tracked changes for major revisions (marked with `<span style="color: red">**[TRACKED CHANGE]**</span>` in markdown)
- Update version numbers and dates for significant changes
- Ensure all changes maintain POPIA compliance and ethical standards
- Archive previous versions before making substantial modifications

### Key Stakeholders
- **DMAC PIs**: Christopher Jack (UCT), Sibusisiwe Makhanya (IBM)
- **Health Data Acquisition**: Craig Parker (Wits PHR), Stanley Luchters (CeSHHAR)
- **Core Data Team**: Multiple members at UCT and Wits PHR (see section 15 of main DMP)

### Cross-Reference Requirements
When updating documents, ensure consistency across:
- Main DMP document and summary tables
- Version numbers and revision dates
- Contact information and institutional affiliations
- Technical specifications and security measures
- Compliance requirements and procedures

## Document Maintenance Tasks

### Regular Updates Required
- Ethics approval references and expiration dates
- Contact information for key personnel
- Technical infrastructure specifications during cloud migration
- DAC composition and meeting schedules
- Risk assessments and mitigation measures

### Archive Management
- Move superseded versions to appropriate Archive folders
- Maintain chronological organization
- Preserve signed agreements and approvals
- Document all changes in summary tables
- Keep audit trail for regulatory compliance

## Special Considerations

### Sensitive Content
- Documents contain personal data handling procedures
- Maintain confidentiality of ethics processes
- Protect participant privacy information
- Do not modify core ethics frameworks without proper review
- Ensure all updates maintain regulatory compliance

### Cloud Migration Context
Version 2.2 addresses the migration from UCT on-premise servers to WHC-managed cloud infrastructure. Consider both current (UCT) and future (cloud) infrastructure capabilities when updating technical specifications.

### Email Templates
The repository includes email templates for DMP review communications:
- `Archive/DMP_Review_Email.html` - Formatted HTML email template
- `Archive/Simple_DMP_Review_Email.txt` - Plain text email template
- `Archive/DMP_v2.2_Review_Email_Draft.md` - Markdown draft version

## Git Workflow

### Commit Guidelines
- Use descriptive commit messages
- Archive old versions before major updates
- Maintain clean repository structure
- Regular commits for document evolution tracking

### Branch Strategy
- Main branch contains current approved versions
- Create feature branches for major revisions
- Merge after stakeholder review and approval