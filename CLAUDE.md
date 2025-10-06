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

## Current Working Files

### Protocol Amendments v3.0 - Cloud Migration (Active Development)
Located in `/Protocol_Amendments_v3/`:

**Protocol-Specific Directories:**
- `RP1_Cloud_Migration/` - HEAT001 (RP1) protocol cloud migration amendment
  - `B_Protocol_and_Amendments/` - Amendment letters, implementation guides, protocol PDFs
  - `A_Study_Staff_Documentation/` - CVs, declarations, GCP certificates
  - `C_SOPs_and_WIs/` - Standard Operating Procedures
  - `D_HREC_Study_Correspondence/` - RP1-specific HREC communications

- `RP2_Cloud_Migration/` - HEAT002 (RP2) protocol cloud migration amendment
  - `B_Protocol_and_Amendments/` - Amendment letters, implementation guides
  - `A_Study_Staff_Documentation/` - CVs, declarations, GCP certificates
  - `C_SOPs_and_WIs/` - Standard Operating Procedures
  - `D_HREC_Study_Correspondence/` - RP2-specific HREC communications

**Shared Resources:**
- `Shared_HREC_Correspondence/` - Master cover letter for both protocols
- `Shared_SOPs_and_WIs/` - Data Management Plan v2.2 (applies to both)

**Key Amendment Documents:**
- `RP1_Cloud_Migration/B_Protocol_and_Amendments/HEAT001_Amendment_Letter_Cloud_Migration.md`
- `RP2_Cloud_Migration/B_Protocol_and_Amendments/HEAT002_Amendment_Letter_Cloud_Migration.md`
- `RP1_Cloud_Migration/B_Protocol_and_Amendments/HEAT001_Protocol_Track_Changes_Implementation_Guide.html`
- `RP2_Cloud_Migration/B_Protocol_and_Amendments/HEAT002_Protocol_Track_Changes_Implementation_Guide.html`

### Previous HREC Submissions (Completed)

**FINAL_HREC_SUBMISSION_v2.0/** - Submitted DMP v2.0 comprehensive track changes
- Multiple HTML track changes versions showing v1.0→v2.2 evolution
- `HE2AT_DMP_v2.0_COMPREHENSIVE_TrackChanges.docx` - Word-compatible submission
- Demonstrates complete DMP transformation with track changes formatting

### Supporting Documents
- `Data Types.xlsx` - Data classification and type definitions
- `Personal Information Processing Agreements/` - Signed POPIA compliance agreements (9 signatories)

## Architecture and Structure

### Repository Organization
```
/
├── Protocol_Amendments_v3/             # Active protocol amendment work
│   ├── RP1_Cloud_Migration/            # HEAT001 cloud migration amendment
│   │   ├── A_Study_Staff_Documentation/
│   │   ├── B_Protocol_and_Amendments/  # Amendment letters, implementation guides
│   │   ├── C_SOPs_and_WIs/
│   │   └── D_HREC_Study_Correspondence/
│   ├── RP2_Cloud_Migration/            # HEAT002 cloud migration amendment
│   │   ├── A_Study_Staff_Documentation/
│   │   ├── B_Protocol_and_Amendments/  # Amendment letters, implementation guides
│   │   ├── C_SOPs_and_WIs/
│   │   └── D_HREC_Study_Correspondence/
│   ├── Shared_HREC_Correspondence/     # Master cover letters
│   └── Shared_SOPs_and_WIs/            # DMP v2.2 shared documentation
├── FINAL_HREC_SUBMISSION_v2.0/         # Completed DMP v2.0 submission
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
- **HREC Approved**: DMP Version 1.0 (2022), Protocol RP1 v1.0, Protocol RP2 v1.0
- **Submitted for Approval**: DMP Version 2.0 (via FINAL_HREC_SUBMISSION_v2.0/)
- **Active Development**: Protocol Amendments v3.0 (cloud migration for RP1 and RP2)
- **Archive Strategy**: All never-submitted DMP versions moved to `Archive/Pre-HREC_Versions/`
- **Protocol Amendment Strategy**: Separate amendment packages for RP1 (HEAT001) and RP2 (HEAT002)

### Git Commit Convention

Use conventional commit format with "docs:" prefix:

```bash
git commit -m "docs: create consolidated Version 2.0 HREC submission"
git commit -m "docs: archive never-submitted v2.x documents"
git commit -m "docs: reorganize repository for HREC compliance"
git commit -m "docs: create protocol amendments v3.0 for cloud migration"
```

### Document Update Checklist

When updating documents, ensure:

- [ ] Version numbers consistent across all documents
- [ ] Dates updated in document headers/footers
- [ ] Contact information current for all stakeholders
- [ ] Technical specifications reflect both UCT and cloud capabilities
- [ ] POPIA compliance maintained
- [ ] Ethics references current (RP1: M220605, RP2: M220606)
- [ ] Archive previous version before major changes
- [ ] For protocol amendments: maintain separate RP1 and RP2 tracks

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
- **RP1 Certificate**: M220605 (HEAT001, expires annually)
- **RP2 Certificate**: M220606 (HEAT002, expires annually)
- **Amendment Process**: Submit changes via HREC submission letter and structured amendment packages

### Cloud Migration Compliance (Protocol Amendments v3.0)

- Tripartite agreement: UCT → WHC (data recipient)
- Security assessment requirements
- Incident response protocols
- Business continuity planning
- Protocol-specific amendment documentation for RP1 and RP2

## Special Considerations

### Working with HREC Documents

- Maintain formal tone and structure
- Use tracked changes for transparency
- Include comprehensive change summaries
- Follow three-section format for amendments:
  1. Background and Context
  2. Detailed Changes
  3. Justification and Impact
- **For DMP**: Present as consolidated v1.0→v2.0 update, not incremental versions
- **For Protocol Amendments**: Maintain separate documentation for RP1 and RP2
- Group changes thematically rather than chronologically
- Emphasize strategic planning over reactive changes

### Sensitive Content

- Do not expose personal identifiers in examples
- Maintain confidentiality of ethics processes
- Protect participant privacy information
- Secure handling of signed agreements

### Cloud Migration Context

Protocol Amendments v3.0 document transition from UCT on-premise to WHC cloud:

- Consider both current and future state
- Document migration timelines
- Maintain service continuity requirements
- Address data sovereignty concerns
- Track changes separately for each protocol (RP1/HEAT001 and RP2/HEAT002)

### HTML Document Development

When creating HTML versions:

- Use pandoc for initial conversion
- Maintain accessibility standards
- Embed styles for standalone viewing
- Test in VS Code launch configuration

### Protocol Amendment Workflow

When working with protocol amendments:

- Maintain four subdirectories per protocol: A_Study_Staff_Documentation, B_Protocol_and_Amendments, C_SOPs_and_WIs, D_HREC_Study_Correspondence
- Create implementation guides showing track changes from base protocol to amended version
- Use shared resources (Shared_HREC_Correspondence, Shared_SOPs_and_WIs) for cross-protocol documents
- HTML implementation guides should be Word-compatible for HREC review
- Amendment letters should clearly reference protocol version numbers (e.g., "Amendment 2" for RP1, "Amendment 3" for RP2)

## Development Best Practices

### Before Making Changes

1. Check current version in active directories (Protocol_Amendments_v3/ or FINAL_HREC_SUBMISSION_v2.0/)
2. Review recent git history for context
3. Verify stakeholder information is current
4. Understand compliance requirements
5. Identify whether working on DMP or protocol-specific amendments

### During Development

1. Use tracked changes in Word documents or HTML track changes markup
2. Maintain consistent formatting
3. Cross-reference related documents
4. Document rationale for significant changes
5. For protocol amendments: maintain separation between RP1 and RP2 materials

### After Updates

1. Update version numbers and dates
2. Archive superseded versions
3. Commit with descriptive message using "docs:" prefix
4. Update change summary documents
5. Update README.md files in amended directories

### Quality Checks

- Spell check and grammar review
- Consistency across document suite
- Technical accuracy verification
- Compliance requirement validation
- Stakeholder information accuracy
- Protocol-specific references correct (RP1 vs RP2, HEAT001 vs HEAT002)
- HTML documents compatible with Word for HREC submission

## Document Conversion Workflows

### Converting Protocol PDFs to Structured Amendments

When working with protocol PDFs (e.g., RP2 draft 1.pdf in Protocol_Amendments_v3/RP1_Cloud_Migration/B_Protocol_and_Amendments/):

1. PDFs can be read directly using the Read tool for analysis and understanding
2. Extract key changes and create structured amendment letters in Markdown
3. Generate HTML implementation guides showing track changes
4. Use pandoc for format conversions when needed
5. Maintain original PDF as reference alongside structured documents

### Creating Track Changes Implementation Guides

For protocol amendments:

```bash
# Generate HTML track changes guide (Word-compatible)
pandoc "amendment_changes.md" -o "Protocol_Track_Changes_Implementation_Guide.html" --standalone --embed-resources

# Create simplified version for quick review
pandoc "amendment_changes.md" -o "Protocol_Track_Changes_SIMPLE.html" --standalone
```

These HTML files can be opened in Microsoft Word for HREC submission while maintaining formatting.
