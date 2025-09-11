# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the Data Management Plan (DMP) and related documentation for the HE²AT Center (Heat and Health in Africa Transdisciplinary Center), a U54 Cooperation agreement with the NIH (2021-2026). This is a documentation-focused repository containing policy documents, data governance frameworks, compliance documentation, and architectural diagrams rather than traditional source code.

## Common Development Commands

This repository does not use traditional build or test commands since it primarily contains documentation. However, common workflows include:

### Document Conversion and Processing
- Use `pandoc` for converting between document formats (Word ↔ Markdown ↔ HTML)
- VS Code launch configuration exists for viewing HTML files (e.g., current HREC changes summary)

### Git Workflow Commands
- `git status` - Check which documents have been modified
- `git add <file>` - Stage document changes
- `git commit -m "docs: <description>"` - Commit with conventional commit format
- `git log --oneline` - View recent document version history

### File Management Commands  
- Archive superseded versions before major updates using standard file operations
- Maintain document structure using directory operations (mkdir, mv, cp)

## Current Working Files

### Primary Documents (Version 2.2 - In Progress)
- `HE2AT_DMP_v2.2_COMPLETE_with_figures_22082025.docx` - Main Data Management Plan with embedded diagrams (incorporating previous changes and Lisa's revisions)
- `HE2AT_DMP_v2.2_COMPLETE_with_figures_22082025.pdf` - PDF version for distribution
- `HE2AT_DMP_v2.2_WITH_TRACKED_CHANGES_IMPLEMENTED.docx` - Version with tracked changes implemented
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
Recent commits follow conventional commit format with "docs:" prefix:
- Architectural diagram updates and SVG management
- POPIA compliance documentation
- Cloud infrastructure transition documentation  
- Document reorganization and archival (moving files to Archive/ directories)
- Version 2.2 updates (incorporating previous changes and Lisa's revisions)

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

## Repository Architecture and File Management

### Current State Management
The repository maintains a clear separation between:
- **Active Documents**: Current version files in repository root
- **Development Archives**: Complete development history in `Archive/Version_X.X_Development/` 
- **Version Archives**: Historical versions in `Archive/Version_X.X/`
- **Supporting Materials**: Compliance agreements in `Personal Information Processing Agreements/`

### File Organization Patterns
- SVG diagrams for architecture and data flow visualizations
- Word documents (.docx) as primary format with PDF distributions
- HTML versions for web-based review and stakeholder access
- Markdown versions for version control and diff tracking
- Excel spreadsheets for structured data definitions

### Development Workflow Integration
- VS Code launch configurations for HTML file viewing
- Git tracking of document changes with conventional commit formatting
- Systematic archival process before major version updates
- Cross-platform file path handling (Box Cloud Storage integration)