# HE²AT Center DMP v2.2 - Track Changes Implementation Guide

## Instructions for Creating True Word Track Changes

**IMPORTANT**: This guide provides exact text locations and changes to implement in Microsoft Word with Track Changes enabled.

### Pre-Implementation Steps
1. Open `HE2AT_DMP_v2.2_COMPLETE_with_figures_22082025.docx` in Microsoft Word
2. Go to Review → Track Changes → Turn on Track Changes
3. Set up reviewers:
   - Add "Lisa" as a reviewer for LA comments
   - Add "Document Review" as a reviewer for general changes
4. Follow the changes below in sequence

---

## DELETIONS (Show as strikethrough with red highlighting)

### Page 1 - Cover Page
**FIND**: "Document version number 2.2" (duplicate text outside formatted table)
**ACTION**: DELETE (keep only the formatted table version)
**REVIEWER**: Document Review

### Page 14 - Section 3.3 Purpose  
**FIND**: "Clear guidelines and DTAs promote transparency and collaboration and support data sharing within the HE²AT Center Consortium, with other DS-I Africa projects, and with External Researchers."
**ACTION**: DELETE entire paragraph
**REVIEWER**: Document Review

### Page 20 - Climate/Weather Data Storage
**FIND**: "[TRACKED CHANGE] and WHC-managed cloud services with auto-scaling capabilities"
**ACTION**: DELETE
**REVIEWER**: Document Review

**FIND**: "and during the transition period on"
**ACTION**: DELETE  
**REVIEWER**: Document Review

**FIND**: "with auto-scaling capabilities for handling variable seasonal data volumes"
**ACTION**: DELETE
**REVIEWER**: Document Review

### Page 21 - Section 4.3
**FIND**: "at UCT"
**ACTION**: DELETE
**REVIEWER**: Document Review

### Page 24 - Section 6.1 Pre-processing
**FIND**: "[TRACKED CHANGE] and WHC-managed cloud infrastructure with enhanced security and automated backup systems"
**ACTION**: DELETE
**REVIEWER**: Document Review

**FIND**: "during the transition period"
**ACTION**: DELETE
**REVIEWER**: Document Review

### Page 26 - Section 6.4 Database Population
**FIND**: "Database population initially utilises both existing UCT infrastructure and cloud-native database services, but will shift to the cloud-based system by the end of Year 5"
**ACTION**: CHANGE TO: "Database population utilises cloud-native database services, providing automated backup and recovery systems with enhanced data integrity and disaster recovery capabilities."
**REVIEWER**: Document Review

### Page 29 - Section 8 Data Analysis Platform
**FIND**: "[TRACKED CHANGE] and cloud-based computational resources with GPU acceleration"
**ACTION**: DELETE
**REVIEWER**: Document Review

**FIND**: "during the transition period"
**ACTION**: DELETE
**REVIEWER**: Document Review

### Page 35 - Section 10.4
**FIND**: "External Researchers"
**ACTION**: CHANGE TO: "All projects, regardless of whether they involve internal HE²AT Center Consortium members or external researchers"
**REVIEWER**: Document Review

### Page 39 - Section 12.3 Data Access Committee
**FIND**: "The DAC is an independent committee that plays a central role in the governance of data sharing. The committee's responsibilities include evaluating data access requests and overseeing DTAs that are signed between the HEAT Center Consortium (Data Provider) and the Bona Fide External Researcher (Data Recipient) to ensure compliance with legal and ethical standards. The DTA will outline the terms for data use, confidentiality, and compliance with relevant laws and guidelines. The agreement will also prohibit the on-sharing of data, without explicit DAC approval."
**ACTION**: REPLACE WITH: "The DAC is an independent committee that evaluates ALL data access requests from both consortium members and external researchers, ensuring consistent application of ethical and scientific standards."
**REVIEWER**: Document Review

### Page 42 - Section 14 Restricted Data Access
**FIND**: "WeTransfer"
**ACTION**: REPLACE WITH: "FileSender"
**REVIEWER**: Document Review

**FIND**: All instances of "[TRACKED CHANGE]"
**ACTION**: DELETE all markers
**REVIEWER**: Document Review

### Page 44 - Section 15 Roles and Responsibilities
**FIND**: "Platform access management during transition period"
**ACTION**: CHANGE TO: "Platform access management during Year 5"
**REVIEWER**: Document Review

### Page 50-57 - Annex Renumbering
**ACTION**: Renumber all annexes:
- Current Annex 1 → Annex 2 (Key data sources)
- Current Annex 2 → Annex 3 (Personal information processing agreement)
- Current Annex 3 → Annex 4 (Ethics notification letter template)  
- Current Annex 4 → Annex 5 (Data Access Committee Terms of Reference)
- Current Annex 5 → Annex 6 (Data Request Form)
**REVIEWER**: Document Review

---

## ADDITIONS/UPDATES (Show as underlined with blue highlighting)

### Page 14 - Section 3.4 Overview
**FIND**: "The HE²AT Center is currently implementing a transition from UCT on-premise infrastructure to cloud-based data management during Year 5"
**ACTION**: ADD: "with the goal of complete migration of all sensitive health data to the cloud by the end of Year 5. This transition enhances security, scalability, and operational efficiency whilst maintaining full regulatory compliance."
**REVIEWER**: Document Review

### Page 46 - Section 16.2
**FIND**: End of section 16.2
**ACTION**: ADD: "Additional legal and compliance review will be conducted by UCT legal counsel or WHC legal representative to ensure all changes maintain legal compliance and align with institutional obligations before final approval."
**REVIEWER**: Document Review

---

## LISA'S SPECIFIC COMMENTS (Attribute to "Lisa" reviewer)

### Page 17 - Section 4.1.2 Original Study Data (Comment LA3)
**FIND**: References to dual storage during transition
**ACTION**: DELETE and UPDATE text to reflect single cloud storage preference after verification
**REVIEWER**: Lisa
**COMMENT**: "I would prefer to only have a single copy of this data (since this is the most sensitive form of the data). I propose that once it is on the cloud, it is checked and then the UCT copy is deleted. This can happen on a study by study basis as soon as the provider agrees."

### Page 44 - Section 15 Roles and Responsibilities (Comment LA6)  
**FIND**: Current roles table
**ACTION**: ADD WHC to relevant responsibility areas
**REVIEWER**: Lisa
**COMMENT**: "Should we add WHC since they are not taking on much of the responsibility?"

### Page 48 - Annex 1 Phase 3 Migration (Comment LA7)
**FIND**: "Phased transfer of data categories starting with climate data"
**ACTION**: UPDATE migration strategy
**REVIEWER**: Lisa  
**COMMENT**: "Can I suggest we start with a subset of health datasets where the DTA has gone through WHC and where the data provider has given permission for the data to be stored on the cloud. Climate data is large / probably costly to store on the cloud and so we should just store the minimum data we require."

### Page 57 - Annex 6 Contact Information (Comment LA8)
**FIND**: "Elizabeth.Frederick@witsphr.org"
**ACTION**: REPLACE with generic contact
**REVIEWER**: Lisa
**COMMENT**: "please either provide a new or generic contact"

---

## FIGURE 1 REPLACEMENT (Comment LA2)

### Page 16 - Figure 1 Data Management Workflow
**ACTION**: Replace current diagram with new simplified version from `HE2AT_Data_Flow_British_v2.2.svg`
**REVIEWER**: Lisa
**COMMENT**: Simplify diagram by:
- Remove individual consortium institution boxes  
- Replace with "HE²AT Consortium via Role-based access control"
- Change Level 2 to "DAC-approved research projects"
- Amend Level 1 to state "for RP1 or RP2 analysis" rather than current wording
- Note: CHEAQI, GHAP and other projects access data at Level 2

---

## WORD COMMENTS TO ADD

### Page 15 - Data Management Workflow Diagram
**ADD COMMENT**: "include new diagram"
**REVIEWER**: Document Review

---

## POST-IMPLEMENTATION CHECKLIST

After making all changes with Track Changes enabled:

1. **Verify Track Changes Appearance**:
   - Deletions appear with red strikethrough
   - Additions appear with blue underline  
   - Different colors for Lisa vs Document Review
   - Comments appear in margin balloons

2. **Check Image Embedding**:
   - Verify Figure 1 displays correctly
   - Ensure all other images are intact

3. **Test Cross-References**:
   - Verify section references still work
   - Check table of contents updates
   - Validate annex numbering

4. **Review Functionality**:
   - Use Review tab to navigate changes
   - Test Accept/Reject changes functionality
   - Verify comment threads work properly

---

## Final Steps

1. Save document as `HE2AT_DMP_v2.2_WITH_NATIVE_TRACK_CHANGES.docx`
2. Create clean version by accepting all changes: `HE2AT_DMP_v2.2_FINAL_CLEAN.docx`
3. Test opening in different versions of Word to ensure compatibility

---

*This guide ensures all changes from the instructions are implemented with proper Word Track Changes functionality that will display correctly with native Word colors and features.*