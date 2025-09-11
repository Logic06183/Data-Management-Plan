# HE²AT Center DMP v2.2 - Tracked Changes Instructions

## Document Information
- **Source Document:** HE2AT_DMP_v2.2_COMPLETE_with_figures_22082025.docx
- **Version:** 2.2
- **Date for Changes:** 03-09-2025
- **Purpose:** This document lists all tracked changes and comments that need to be incorporated into the main Word document

---

## Summary of Changes Required

### Major Changes:
1. **Cloud Infrastructure Transition** - Multiple references to transition from UCT to WHC cloud infrastructure
2. **Data Access Committee (DAC)** - Updated role to evaluate ALL requests (internal and external)
3. **Removal of Transition Period Language** - Delete references to "during the transition period"
4. **Updated Contact Information** - Generic contact details instead of specific individuals
5. **Clarifications on Data Storage** - Single copy preference for sensitive data

---

## Detailed Changes by Section

### Page 1 - Cover Page
- **DELETE:** "Document version number 2.2" (duplicated text in formatted table)
- Keep the formatted table version

### Page 14 - Section 3.3 Purpose
- **DELETE:** Entire paragraph starting with "Clear guidelines and DTAs promote transparency..."
- This was formatted as Body Text and needs removal

### Page 14 - Section 3.4 Overview of the Data Management Workflow
- **CHANGE:** "The HE²AT Center is currently implementing a transition from UCT on-premise infrastructure to cloud-based data management during Year 5"
- **TO:** Add text about the goal of complete migration by end of Year 5

### Page 15 - Data Management Workflow Diagram
- **Comment [CP1]:** "include new diagram"
- Action: Insert updated data management workflow diagram

### Page 16 - Figure 1 Comments
Multiple formatting and content comments:
- **Comment [LA2]:** Simplify diagram by:
  - Remove individual consortium institution boxes
  - Replace with "HE²AT Consortium via Role-based access control"
  - Change Level 2 to "DAC-approved research projects"
  - Amend Level 1 to state "for RP1 or RP2 analysis" rather than current wording
  - Note: CHEAQI, GHAP and other projects access data at Level 2

### Page 17 - Section 4.1.2 Original Study Data
- **Comment [LA3]:** Preference for single copy of data once on cloud:
  - "I would prefer to only have a single copy of this data (since this is the most sensitive form of the data). I propose that once it is on the cloud, it is checked and then the UCT copy is deleted. This can happen on a study by study basis as soon as the provider agrees."
- **DELETE:** References to dual storage during transition
- **UPDATE:** Text to reflect single cloud storage after verification

### Page 20 - Climate/Weather Data Storage
- **DELETE:** "[TRACKED CHANGE] and WHC-managed cloud services with auto-scaling capabilities"
- **DELETE:** "and during the transition period on"
- **DELETE:** "with auto-scaling capabilities for handling variable seasonal data volumes"
- **KEEP:** Only the simplified storage description

### Page 21 - Section 4.3
- **DELETE:** "at UCT"
- Keep only the generic storage reference

### Page 24 - Section 6.1 Pre-processing
- **DELETE:** "[TRACKED CHANGE] and WHC-managed cloud infrastructure with enhanced security and automated backup systems"
- **DELETE:** "during the transition period"

### Page 26 - Section 6.4 Database Population
- **CHANGE:** "Database population initially utilises both existing UCT infrastructure and cloud-native database services, but will shift to the cloud-based system by the end of Year 5"
- **DELETE:** References to dual system during transition

### Page 29 - Section 8 Data Analysis Platform
- **DELETE:** "[TRACKED CHANGE] and cloud-based computational resources with GPU acceleration"
- **DELETE:** "during the transition period"

### Page 35 - Section 10.4
- **CHANGE:** "All projects, regardless of whether they involve internal HE²AT Center Consortium members or external researchers"
- **DELETE:** "External" before "Researchers"

### Page 39 - Section 12.3 Data Access Committee
- **UPDATE:** "The DAC is an independent committee that evaluates ALL data access requests from both consortium members and external researchers, ensuring consistent application of ethical and scientific standards."
- **DELETE:** Previous longer description about DAC roles

### Page 42 - Section 14 Restricted Data Access
Multiple technical updates:
- **DELETE:** "WeTransfer"
- **REPLACE WITH:** "FileSender"
- **DELETE:** All "[TRACKED CHANGE]" markers
- **DELETE:** References to transition period
- **UPDATE:** Security descriptions to reflect end-state architecture

### Page 43 - End of Section 14
- **DELETE:** "During the transition period" language
- **ADD:** Enhanced cloud security measures list (formatted)

### Page 44 - Section 15 Roles and Responsibilities
- **Comment [LA6]:** "Should we add WHC since they are not taking on much of the responsibility?"
- **CHANGE:** "Platform access management during Year 5" (delete "transition period")

### Page 46 - Section 16.2
- **ADD:** "Additional legal and compliance review will be conducted by UCT legal counsel or WHC legal representative"

### Page 48 - Annex 1: Transition Implementation Details
- **Comment [LA7]:** "Can I suggest we start with a subset of health datasets where the DTA has gone through WHC and where the data provider has given permission for the data to be stored on the cloud. Climate data is large / probably costly to store on the cloud and so we should just store the minimum data we require."
- **UPDATE:** Phase 3 migration strategy accordingly

### Page 50 - Annex 2 (was Annex 1)
- **RENUMBER:** This is now Annex 2 (Key data sources)
- Format table properly

### Page 53 - Annex 3
- **RENUMBER:** Personal information processing agreement (was Annex 2)

### Page 54 - Annex 4
- **RENUMBER:** Ethics notification letter template (was Annex 3)

### Page 56 - Annex 5
- **RENUMBER:** Data Access Committee Terms of Reference (was Annex 4)

### Page 57 - Annex 6
- **RENUMBER:** Data Request Form (was Annex 5)
- **Comment [LA8]:** "please either provide a new or generic contact"
- **UPDATE:** Contact information to generic email

---

## Formatting Notes

### Track Changes Markers
When implementing in Word:
1. Turn on "Track Changes" before making any edits
2. All deletions will show as strikethrough text
3. All additions will show as underlined text (typically in red or blue)
4. Use the "New Comment" feature for any clarifying notes

### Color Coding for Review
- **Red text:** Deletions
- **Blue/Green text:** Additions
- **Yellow highlight:** Areas needing special attention

---

## Table Update Required

### Figure 1 - Data Management Workflow
This diagram needs significant updates per Comment [LA2]:

**Current Structure to Remove:**
- Individual boxes for CeSHHAR, WHC, IBM Africa, UPGC, CSAG(UCT)

**New Simplified Structure:**
- Single box: "HE²AT Consortium via Role-based access control"
- Level 1: "for RP1 or RP2 analysis"
- Level 2: "DAC-approved research projects"

---

## Next Steps

1. **Create tracked changes version:** Apply all changes listed above with Track Changes enabled
2. **Update Figure 1:** Create new simplified data flow diagram
3. **Review version:** Share tracked changes document for review
4. **Clean version:** Once approved, accept all changes for final clean version
5. **Create SVG table:** Convert updated Figure 1 to SVG format for Figma

---

## Notes for Implementation

- Ensure all page numbers and section references remain accurate after changes
- Maintain consistent formatting throughout document
- Keep backup of original version before applying changes
- Test all hyperlinks and cross-references after changes

---

*Document prepared: December 2024*
*For questions about these changes, consult the HE²AT Center Data Management Team*