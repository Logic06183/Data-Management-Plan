# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the Data Management Plan (DMP) and related documentation for the HE²AT Center (Heat and Health in Africa Transdisciplinary Center), a U54 Cooperation agreement with the NIH (2021-2026). This is a documentation-focused repository containing policy documents, data governance frameworks, compliance documentation, and architectural diagrams rather than traditional source code.

## Current Working Files

### Primary Documents (Current Version 2.2)
- `HE2AT_DMP_v2.2_COMPLETE_with_figures_22082025.docx` - Main Data Management Plan with embedded diagrams
- `HE2AT_DMP_v2.2_COMPLETE_with_figures_22082025.pdf` - PDF version for distribution
- `DMP_v2.2_Changes_Summary_HREC_FINAL.docx` - Summary of changes for HREC review
- `Data Types.xlsx` - Data classification and type definitions
- `Personal Information Processing Agreements/` - Signed POPIA compliance agreements

### Architecture Diagrams
- `HE2AT_Data_Management_Architecture.svg` - Comprehensive system architecture
- `HE2AT_Data_Flow_Pipeline.svg` - Data processing workflow
- `HE2AT_Cloud_Migration_Transition.svg` - Cloud migration visualization

## Archive Structure and Versioning

### Version History
- `Archive/Version_1.0/` - Original NIH DMP documents
- `Archive/Version_2.0/` - Various iterations of v2.0 with different review stages
- `Archive/Version_2.1/` - Pre-cloud migration version with multiple draft iterations
- `Archive/Version_2.2/` - Cloud migration update materials
- `Archive/Version_2.2_Drafts/` - Working drafts for v2.2

### Supporting Documentation
- `Archive/Standalone_Documents/` - DAC terms of reference, data request procedures
- `Archive/CLAUDE.md` and `Archive/CLAUDE_v2.2.md` - Previous versions of this guidance

## Document Management Workflow

### Version Control Practice
- Documents follow semantic versioning (v1.0 → v2.0 → v2.1 → v2.2)
- Version 2.2 represents current cloud migration implementation
- Archive superseded versions before creating new major versions
- Maintain draft versions in separate directories during development

### Git Workflow
Recent commits show pattern of:
- Architectural diagram updates
- POPIA compliance documentation
- Cloud infrastructure transition documentation
- Document reorganization and archival

## Key Content Framework

### Data Management Architecture
The repository documents a hybrid cloud architecture with:
- **UCT Infrastructure**: CSAG servers, Jupyter Hub, on-premise storage
- **WHC Cloud Infrastructure**: AES-256 encrypted storage, 24/7 SOC monitoring, auto-scaling compute
- **External Integration**: eLwazi indexing, CSAG GitLab, DS-I Africa collaboration

### Data Processing Pipeline
1. **Data Acquisition** - Health, climate, socio-economic, remote sensing data
2. **Pre-Processing** - Core Data Team validation, quality checks, secure storage
3. **Harmonisation** - Variable standardization, common codebook, format consistency
4. **De-identification** - Remove identifiers, POPIA compliance, access control
5. **Data Sharing** - DAC review, access evaluation, DTA execution

### Compliance Framework
- **POPIA Compliance** - South African data protection framework
- **Ethics Oversight** - Wits HREC approvals (RP1-220605, RP2-220606)
- **Data Transition** - UCT → WHC recipient role with tripartite agreements
- **Risk Management** - Security assessments, incident response protocols

## Working with Documents

### Key Stakeholders
- **DMAC PIs**: Christopher Jack (UCT), Sibusisiwe Makhanya (IBM)
- **Health Data Acquisition**: Craig Parker (Wits PHR), Stanley Luchters (CeSHHAR)
- **Core Data Team**: Multi-institutional team (see section 15 of main DMP)

### Document Editing Guidelines
- Maintain document structure and version consistency
- Use tracked changes for major revisions in Word documents
- Update version numbers and dates for significant changes
- Ensure all changes maintain POPIA compliance and ethical standards
- Archive previous versions before substantial modifications

### Cross-Reference Requirements
When updating documents, ensure consistency across:
- Main DMP document and summary tables
- Version numbers and revision dates
- Contact information and institutional affiliations
- Technical infrastructure specifications
- Compliance requirements and procedures

## Special Considerations

### Cloud Migration Context
Version 2.2 specifically addresses ongoing migration from UCT on-premise to WHC-managed cloud infrastructure. When updating technical specifications, consider both current (UCT) and future (cloud) capabilities.

### Sensitive Content Management
- Documents contain personal data handling procedures
- Maintain confidentiality of ethics approval processes
- Ensure regulatory compliance in all updates
- Do not modify core ethics frameworks without proper review
- Protect participant privacy information

### Human Subjects Study Classification
This project involves enhanced consent procedures and additional ethical oversight due to its human subjects research classification.