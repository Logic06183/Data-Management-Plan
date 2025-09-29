# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the Data Management Plan (DMP) and related documentation for the HE²AT Center (Heat and Health in Africa Transdisciplinary Center), a U54 Cooperation agreement with the NIH (2021-2026). This is a documentation-focused repository containing policy documents, data governance frameworks, compliance documentation, and architectural diagrams rather than traditional source code.

## Common Development Commands

### Document Conversion and Processing
```bash
# Convert Word to Markdown
pandoc "HE2AT_DMP_v2.2_COMPLETE_with_figures_09092025.docx" -o output.md

# Convert Markdown to HTML
pandoc input.md -o output.html --standalone

# Convert Word to HTML with styling
pandoc "document.docx" -o "document.html" --standalone --embed-resources
```

### Git Workflow Commands
```bash
git status                              # Check modified documents
git add <file>                          # Stage document changes
git commit -m "docs: <description>"     # Commit with conventional format
git log --oneline -15                   # View recent document history
```

### Document Archiving Commands
```bash
# Archive document before major update
cp "HE2AT_DMP_v2.2_COMPLETE.docx" "Archive/Version_2.2/"

# Create new version directory
mkdir -p "Archive/Version_2.3/"
```

### HTML Document Viewing
VS Code launch configuration exists at `.vscode/launch.json` for viewing HTML documents in browser.

## Current Working Files (Version 2.0 - HREC Submission)

### Primary HREC Submission Documents (Version 2.0)
Located in `/Version_2.0_HREC_Submission/`:
- `HREC_Amendment_DMP_v2.0_Consolidated.md` - Formal HREC amendment consolidating all v1.0→v2.0 changes
- `DMP_v2.0_Thematic_Changes_Summary.md` - Changes organized by functional themes
- `Executive_Summary_for_HREC.md` - 5-minute overview for committee members
- `HREC_Submission_Cover_Letter.md` - Formal submission letter
- `Implementation_Timeline_and_Milestones.md` - 10-month phased implementation plan
- `README.md` - Navigation guide for HREC reviewers

### Supporting Documents
- `Data Types.xlsx` - Data classification and type definitions
- `Personal Information Processing Agreements/` - Signed POPIA compliance agreements (9 signatories)

## Architecture and Structure

### Repository Organization
```
/
├── Version_2.0_HREC_Submission/        # Active HREC submission documents
├── Archive/
│   ├── Version_1.0/                    # Original NIH DMP (HREC approved)
│   ├── Pre-HREC_Versions/              # Never submitted to HREC
│   │   ├── Version_2.0_Never_Submitted/    # Original v2.0 drafts
│   │   ├── Version_2.1_Never_Submitted/    # v2.1 materials
│   │   ├── Version_2.2_Never_Submitted/    # v2.2 materials
│   │   ├── Version_2.2_Development_Materials/ # Working files
│   │   └── Version_2.2_HREC_Materials_Never_Submitted/ # Prepared but unused
│   ├── CLAUDE.md                       # Previous guidance versions
│   ├── CLAUDE_v2.2.md
│   ├── Miscellaneous/                  # Research papers and images
│   └── Standalone_Documents/           # DAC terms, data request procedures
└── Personal Information Processing Agreements/
```

### Data Management Architecture
The DMP documents a hybrid infrastructure model:

**UCT Infrastructure (Current)**
- CSAG servers with on-premise storage
- Jupyter Hub platform
- GitLab version control

**WHC Cloud Infrastructure (Migration Target)**
- AES-256 encryption (at rest and in transit)
- 24/7 SOC monitoring
- Auto-scaling compute resources
- Daily automated backups (30-day retention)

**External Integration Points**
- eLwazi data catalog indexing
- DS-I Africa collaboration platform
- CSAG GitLab repositories

### Data Processing Pipeline
1. **Data Acquisition** → Health, climate, socio-economic, remote sensing data
2. **Pre-Processing** → Core Data Team validation and quality checks
3. **Harmonisation** → Variable standardization, common codebook
4. **De-identification** → Remove identifiers, apply POPIA compliance
5. **Data Sharing** → DAC review, DTA execution, controlled access

## Document Management Workflow

### Version Control
- **HREC Approved**: Version 1.0 only
- **Current Submission**: Version 2.0 (consolidates all changes from never-submitted v2.0-v2.2)
- **Archive Strategy**: All never-submitted versions moved to `Archive/Pre-HREC_Versions/`
- **Compliance Approach**: Present consolidated changes as single strategic update

### Git Commit Convention
Use conventional commit format with "docs:" prefix:
```bash
git commit -m "docs: create consolidated Version 2.0 HREC submission"
git commit -m "docs: archive never-submitted v2.x documents"
git commit -m "docs: reorganize repository for HREC compliance"
```

### Document Update Checklist
When updating documents, ensure:
- [ ] Version numbers consistent across all documents
- [ ] Dates updated in document headers/footers
- [ ] Contact information current for all stakeholders
- [ ] Technical specifications reflect both UCT and cloud capabilities
- [ ] POPIA compliance maintained
- [ ] Ethics references current (RP1-220605, RP2-220606)
- [ ] Archive previous version before major changes

## Key Stakeholders

### Leadership
- **DMAC PIs**: Christopher Jack (UCT), Sibusisiwe Makhanya (IBM)
- **Health Data Acquisition**: Craig Parker (Wits PHR), Stanley Luchters (CeSHHAR)

### Core Data Team
Multi-institutional team detailed in Section 15 of main DMP, including members from:
- University of Cape Town (UCT)
- University of Witwatersrand (Wits)
- IBM Research Africa
- CeSHHAR Zimbabwe

### Data Access Committee (DAC)
Composition and procedures documented in `Archive/Standalone_Documents/HE2AT Center DAC terms of reference.docx`

## Compliance Framework

### POPIA Requirements
- Personal Information Processing Agreements required for all data handlers
- Data minimization and purpose limitation principles
- Consent procedures for participant data
- Cross-border data transfer restrictions

### Ethics Oversight
- **Primary Approval**: Wits HREC (Medical)
- **RP1 Certificate**: M220605 (expires annually)
- **RP2 Certificate**: M220606 (expires annually)
- **Amendment Process**: Submit changes via HREC submission letter

### Cloud Migration Compliance
- Tripartite agreement: UCT → WHC (data recipient)
- Security assessment requirements
- Incident response protocols
- Business continuity planning

## Special Considerations

### Working with HREC Documents
- Maintain formal tone and structure
- Use tracked changes for transparency
- Include comprehensive change summaries
- Follow three-section format for amendments:
  1. Background and Context
  2. Detailed Changes
  3. Justification and Impact
- **Critical**: Present as consolidated v1.0→v2.0 update, not incremental versions
- Group changes thematically rather than chronologically
- Emphasize strategic planning over reactive changes

### Sensitive Content
- Do not expose personal identifiers in examples
- Maintain confidentiality of ethics processes
- Protect participant privacy information
- Secure handling of signed agreements

### Cloud Migration Context
Version 2.2 documents transition from UCT on-premise to WHC cloud:
- Consider both current and future state
- Document migration timelines
- Maintain service continuity requirements
- Address data sovereignty concerns

### HTML Document Development
When creating HTML versions:
- Use pandoc for initial conversion
- Maintain accessibility standards
- Embed styles for standalone viewing
- Test in VS Code launch configuration

## Development Best Practices

### Before Making Changes
1. Check current version in root directory
2. Review recent git history for context
3. Verify stakeholder information is current
4. Understand compliance requirements

### During Development
1. Use tracked changes in Word documents
2. Maintain consistent formatting
3. Cross-reference related documents
4. Document rationale for significant changes

### After Updates
1. Update version numbers and dates
2. Archive superseded versions
3. Commit with descriptive message
4. Update change summary documents

### Quality Checks
- Spell check and grammar review
- Consistency across document suite
- Technical accuracy verification
- Compliance requirement validation
- Stakeholder information accuracy