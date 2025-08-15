# DMP v2.2 - New Changes Integration Guide

This document contains ONLY the new changes to be integrated into the existing DMP v2.1. Each change is marked with its location and the complete text to be inserted.

---

## CHANGE 1: Cloud Infrastructure Addition
**Location:** Section 4.1.2 - Original Study Data (end of paragraph)
**Insert after:** "...but may still contain indirect identifiers such as dates and geolocation information."

**New text to add:**
```
and WHC-managed cloud infrastructure with AES-256 encryption, providing enhanced scalability and disaster recovery capabilities whilst maintaining POPIA compliance
```

---

## CHANGE 2: Climate Data Storage Update
**Location:** Section 4.2 - Climate/weather data (in paragraph about data storage)
**Insert after:** "The data will be stored on IBM Research Africa and CSAG/UCT systems"

**New text to add:**
```
and WHC-managed cloud services with auto-scaling capabilities for handling variable seasonal data volumes and improved accessibility for authorised researchers
```

---

## CHANGE 3: Data Recipient Role Transition
**Location:** Section 5.1 - Data Transfer Agreement (add as new paragraph after existing DTA content)
**Insert as new paragraph after the main DTA paragraph**

**New text to add:**
```
**Data Recipient Role Transition:** As part of the cloud migration implementation, the data recipient role will transition from UCT to WHC during Year 5 of the project. This transition requires:
- **Tripartite Agreement Execution**: A special tripartite agreement must be signed between UCT, WHC, and each Data Provider to formally transfer data recipient responsibilities. This agreement ensures continuity of data protection obligations and maintains compliance with existing DTAs.
- **Data Provider Notification and Consent**: All Data Providers will be formally notified of the recipient role transition and must provide explicit consent for the change in data custodianship before any data transfer to WHC-managed infrastructure occurs.  
- **Legal Continuity**: The tripartite agreement ensures that all existing DTA terms, conditions, and data protection obligations remain in full effect under WHC's custodianship, with no reduction in protection levels.
```

---

## CHANGE 4: Pre-processing Infrastructure Update
**Location:** Section 6.1 - Pre-processing (in first sentence)
**Insert after:** "This team has exclusive authorisation to access incoming data securely stored on UCT data servers"

**New text to add:**
```
and WHC-managed cloud infrastructure with enhanced security and automated backup systems
```

---

## CHANGE 5: Database Population Update
**Location:** Section 6.4 - Database population (add as new paragraph after first paragraph)
**Insert as new paragraph after the existing database population description**

**New text to add:**
```
Database population utilises both existing UCT infrastructure and cloud-native database services, providing automated backup and recovery systems with enhanced data integrity and disaster recovery capabilities.
```

---

## CHANGE 6: Data Analysis Platform Update
**Location:** Section 8 - Data analysis platform (in first sentence)
**Insert after:** "Data analysis involving the Consortium Shared Data and RP1/RP2 de-identified data will be facilitated through the CSAG/UCT Jupyter Hub platform"

**New text to add:**
```
and cloud-based computational resources with GPU acceleration for complex analyses, improved processing times, and enhanced analytical capabilities
```

---

## CHANGE 7: Human Subjects Study Classification
**Location:** Section 11 - POPIA compliance (add as new subsection at the end of section)
**Insert as new content at the end of Section 11**

**New text to add:**
```
**Human Subjects Study Classification:** The HE²AT Center project has been reclassified as a "human subjects study" by the NIH. This reclassification introduces additional legal and ethical requirements that supplement existing POPIA compliance measures:

**Additional Legal Requirements:**
- Enhanced informed consent procedures for data reuse and secondary analysis
- Strengthened participant rights protection including rights to data access and correction
- Additional documentation requirements for data processing and storage activities
- Expanded data subject notification obligations for certain types of data processing

**Ethical Implications:**
- Heightened ethical oversight requirements for all data processing activities
- Enhanced Data Access Committee review procedures for external data sharing requests
- Additional safeguards for vulnerable populations included in health datasets
- Strengthened procedures for handling data subject complaints and inquiries

**Implementation Impact:**
- All existing data processing procedures will be reviewed and updated to ensure compliance with human subjects research standards
- Enhanced training requirements for all personnel with access to health data
- Additional audit and monitoring requirements for data management activities
- Strengthened incident response procedures for data breaches or compliance violations

The transition to human subjects study classification ensures the highest levels of participant protection whilst maintaining the research integrity and scientific value of the HE²AT Center project.
```

---

## CHANGE 8: Data Transfer and Storage Security Updates
**Location:** Section 14.1 - Data transfer, storage and encryption
**Multiple insertions needed:**

**Insert after:** "Once transferred to UCT"
```
and WHC-managed cloud infrastructure
```

**Insert after:** "is encrypted for storage using"
```
AES-256 encryption standard for both UCT servers and cloud storage
```

---

## CHANGE 9: Network Security Updates
**Location:** Section 14.2 - Network security
**Insert after:** "The CSAG compute infrastructure benefits from UCT's comprehensive security policies"

**New text to add:**
```
and WHC-managed cloud security architecture with 24/7 Security Operations Centre (SOC) monitoring and advanced threat detection systems for improved security posture and compliance
```

**Also insert after:** "UCT's Cisco firewall"
```
and cloud-native firewall services
```

---

## CHANGE 10: Authentication Updates
**Location:** Section 14.3 - Local authentication and authorisation
**Insert after:** "the CSAG/UCT platform employs additional authentication and authorisation protocols"

**New text to add:**
```
alongside cloud-specific access controls and automated compliance reporting for streamlined governance oversight
```

---

## CHANGE 11: Review Process Addition
**Location:** Section 16.2 - Revision process, item 2 "Review and Approval"
**Add as new bullet point after existing approval process**

**New text to add:**
```
- Additional legal and compliance review will be conducted by Jessica Senekal (UCT legal counsel) and Este's replacement (WHC legal representative) to ensure all changes maintain legal compliance and align with institutional obligations before final approval.
```

---

## NEW SECTION 17: Cloud Migration Implementation

**Location:** Add as entirely new Section 17

**Complete new section:**
```
## 17. Cloud Migration Implementation

The HE²AT Center is implementing a structured cloud migration strategy to enhance data management capabilities whilst maintaining operational continuity and improving security, scalability, and operational efficiency.

### 17.1. Migration Strategy

A comprehensive 5-phase approach ensures minimal disruption to research activities:

**Phase 1: Planning and Assessment**
- Infrastructure assessment and capacity planning
- Risk analysis and mitigation strategies  
- Staff training and change management
- Establishment of cloud security frameworks

**Phase 2: Pilot Implementation**
- Limited data migration for testing and validation
- Performance benchmarking and optimisation
- Security testing and compliance verification
- User acceptance testing with core team members

**Phase 3: Gradual Migration**
- Phased transfer of data categories starting with climate data
- Dual-system operation for continuity
- Continuous monitoring and adjustment
- Progressive migration of health data with enhanced security protocols

**Phase 4: Full Migration**
- Complete transition to cloud infrastructure for new data
- Legacy system integration maintained during transition period
- Final security and compliance validation
- Full operational capability on cloud platform

**Phase 5: Optimisation**
- Performance tuning and cost optimisation
- Advanced feature implementation including auto-scaling
- Ongoing monitoring and improvement
- Regular review and enhancement of cloud capabilities

### 17.2. Technical Implementation

**Enhanced Security Infrastructure:**
- AES-256 encryption for all data at rest and in transit
- Zero-trust network architecture implementation
- Advanced threat detection and monitoring systems
- Automated security compliance reporting

**Operational Enhancements:**
- Auto-scaling infrastructure for variable workloads
- GPU acceleration for computational analyses
- Enhanced disaster recovery capabilities with automated backup systems
- Improved data accessibility for authorised users

**Compliance and Governance:**
- Maintained POPIA compliance throughout migration
- Enhanced audit trail capabilities
- Automated compliance monitoring systems
- Improved data governance frameworks with real-time reporting

### 17.3. Risk Mitigation and Quality Assurance

**Continuity Measures:**
- Dual capability maintained during transition period
- Explicit migration deadline of June 2026 for complete transfer of all health data from UCT systems to WHC-managed cloud infrastructure, ensuring Year 5 transitional period completion
- Comprehensive backup and recovery procedures for both UCT and cloud systems
- Regular security assessments and penetration testing
- Staff training on new cloud-based procedures

**Monitoring and Oversight:**
- Continuous monitoring and incident response protocols
- Regular assessment of cloud performance and security
- Ongoing cost monitoring and optimisation
- Quarterly reviews of migration progress and outcomes

The migration to WHC-managed cloud infrastructure represents a significant enhancement to the HE²AT Center's data management capabilities, ensuring improved security, scalability, and operational efficiency whilst maintaining full compliance with regulatory requirements and research best practices.
```

---

## NEW SECTION 18: Data Sharing Agreement Alignment

**Location:** Add as entirely new Section 18

**Complete new section:**
```
## 18. Data Sharing Agreement Alignment

The HE²AT Center maintains a complex ecosystem of data sharing agreements that must remain aligned and consistent throughout the project lifecycle. This section outlines the coordination requirements and procedures for maintaining agreement coherence.

### 18.1. Agreement Ecosystem

**Primary Agreements:**
- **Consortium Data Sharing Agreement**: Governs data sharing amongst HE²AT Center Consortium partners
- **Individual Data Transfer Agreements (DTAs)**: Bilateral agreements between each Data Provider and UCT/WHC
- **External Data Sharing Agreements**: Agreements with External Researchers accessing de-identified data
- **Tripartite Data Custodianship Agreements**: Agreements facilitating the transfer of data custodianship from UCT to WHC

### 18.2. Alignment Requirements

**Consistency Principles:**
- All agreements must maintain consistent data protection standards and participant rights
- Privacy and security requirements must be harmonised across all agreement types
- Data retention and destruction procedures must align with consortium-wide policies
- Access control and monitoring requirements must be standardised

**Coordination Procedures:**
- Any changes to the Consortium Data Sharing Agreement trigger mandatory review of all related DTAs
- New Data Provider agreements must align with existing consortium standards and procedures
- External data sharing terms must not contradict or weaken protections established in primary agreements

### 18.3. Update and Maintenance Process

**Regular Review Cycle:**
- Quarterly review of agreement alignment and consistency
- Annual comprehensive assessment of all data sharing agreements
- Immediate review triggered by regulatory changes or institutional policy updates

**Stakeholder Coordination:**
- DMAC co-PIs coordinate all agreement updates and ensure consistent implementation
- Legal counsel (Jessica Senekal and WHC legal representative) provide oversight for all agreement modifications
- Data Providers are notified of any changes that may affect their agreements and given opportunity to review and consent

The coordinated management of all data sharing agreements ensures legal consistency, participant protection, and operational efficiency throughout the HE²AT Center project lifecycle.
```

---

## NEW SECTION 19: Data Custodian Transition

**Location:** Add as entirely new Section 19

**Complete new section:**
```
## 19. Data Custodian Transition

As part of the cloud migration strategy, the data custodian role will transition from UCT to WHC during Year 5 of the project. This section outlines the procedures, requirements, and contingency measures for this critical transition.

### 19.1. Transition Overview

**Custodianship Transfer Process:**
- Formal transfer of data custodian responsibilities from UCT to WHC
- Comprehensive legal and compliance review of custodianship requirements
- Data Provider notification and consent procedures
- Technical migration of data to WHC-managed cloud infrastructure

**Legal Framework:**
- Execution of tripartite agreements between UCT, WHC, and each Data Provider
- Transfer of all legal obligations and responsibilities related to data protection
- Maintenance of existing participant rights and data protection standards
- Continuity of all ethical and regulatory compliance obligations

### 19.2. Data Provider Consent Process

**Notification Requirements:**
- Formal written notification to all Data Providers regarding custodian role transition
- Detailed explanation of changes to data storage, processing, and security arrangements
- Clear communication about maintained protection levels and participant rights
- 90-day advance notice period for Data Provider review and response

**Consent Procedures:**
- Explicit written consent required from each Data Provider before data transfer to WHC custody
- Detailed consent documentation including technical and security specifications
- Option for Data Providers to specify additional protection requirements
- Clear procedures for handling consent conditions or restrictions

### 19.3. Non-Responsive and Refusing Data Providers

**Non-Responsive Data Providers:**
- Initial contact followed by two formal reminder notifications at 30-day intervals
- Final notification with 60-day deadline for response
- If no response received, data remains under UCT custodianship with continued POPIA compliance
- Regular re-engagement attempts every six months until project completion

**Refusing Data Providers:**
- Respect for Data Provider decisions regarding cloud migration
- Maintenance of existing UCT-based storage and processing arrangements for refusing Data Providers
- Dual infrastructure operation to accommodate both consenting and refusing Data Providers
- No penalties or limitations imposed on refusing Data Providers regarding project participation

**Data Segregation Procedures:**
- Clear technical segregation between cloud-migrated and UCT-retained data
- Separate access controls and monitoring systems for each data custody arrangement
- Maintained integration capabilities for research analysis while respecting custody boundaries
- Regular auditing of segregation effectiveness and compliance

### 19.4. Contingency and Risk Mitigation

**Risk Assessment:**
- Technical risks related to data migration and integration
- Legal risks from partial consent or complex custodianship arrangements
- Operational risks from managing dual infrastructure systems
- Compliance risks from maintaining multiple data governance frameworks

**Mitigation Strategies:**
- Comprehensive backup and recovery procedures throughout transition period
- Legal review and approval of all custodianship arrangements
- Technical testing and validation of all data migration procedures
- Staff training on dual custodianship management requirements

**Success Criteria:**
- 100% of consenting Data Provider data successfully migrated to WHC custody
- Maintained or enhanced security and compliance standards for all data
- Zero data loss or compromise incidents during transition
- Continued research accessibility and analytical capabilities for all datasets

The data custodian transition ensures enhanced data management capabilities while maintaining the highest standards of data protection, legal compliance, and respect for Data Provider preferences.
```

---

## NEW SECTION 20: Post-Project Data Management

**Location:** Add as entirely new Section 20

**Complete new section:**
```
## 20. Post-Project Data Management

This section outlines data management procedures and responsibilities following the completion of the HE²AT Center project in 2026, addressing both project continuation and termination scenarios.

### 20.1. Project Continuation Scenarios

**Grant Renewal:**
- If the HE²AT Center receives continued NIH funding beyond 2026, all existing data management procedures and agreements remain in effect
- Data Transfer Agreements with Data Providers are reviewed and renewed as necessary
- Enhanced data sharing and access procedures may be implemented based on project evolution
- Continued compliance with all regulatory and ethical requirements maintained

**Institutional Continuation:**
- If the project continues under different funding sources, all data protection and participant rights obligations remain binding
- New funding arrangements must maintain or exceed existing data protection standards
- Data Provider consent required for any changes to data management or custody arrangements
- Continued operation of Data Access Committee and governance structures

### 20.2. Project Termination Scenarios

**Planned Project Completion:**
- Five-year data retention period begins from project completion date (June 2026)
- All Original Study Data maintained for five years post-completion for analysis verification and publication purposes
- Consortium Shared Data and De-identified Data may be retained indefinitely pending Data Provider agreement terms
- Inferential Data remains available for open access indefinitely

**Unplanned Termination:**
- Emergency data preservation procedures activated to protect all datasets
- Data Provider notification within 30 days of termination decision
- Options provided to Data Providers for data return, transfer to approved institutions, or secure destruction
- Continued compliance with all data protection obligations during termination process

### 20.3. Long-Term Data Stewardship

**Custodianship Arrangements:**
- WHC assumes primary responsibility for long-term data stewardship post-2026
- UCT maintains co-custodianship responsibilities for data retained under their custody
- Data Access Committee continues operation for minimum five years post-project completion
- Clear succession planning for institutional changes or personnel transitions

**Technical Infrastructure:**
- Cloud-based infrastructure maintained for minimum retention periods
- Regular data integrity checks and migration to updated storage technologies as needed
- Continued security monitoring and compliance reporting
- Archive-grade storage implementation for long-term preservation

### 20.4. Data Provider Rights and Options

**Data Return Options:**
- Data Providers may request return of all Original Study Data at any time
- Secure transfer procedures available for data return to Data Providers
- Data destruction certificates provided upon request
- No financial obligations for Data Providers regarding data return procedures

**Ongoing Access Rights:**
- Data Providers maintain perpetual access to their contributed datasets
- Priority access provided for Data Providers seeking to use their data in new research
- Collaborative opportunities maintained between Data Providers and successor institutions
- Regular communication regarding data status and any proposed changes

### 20.5. Publication and Dissemination

**Ongoing Publication Rights:**
- Consortium researchers maintain rights to complete ongoing analyses and publications
- Publication timeline coordination to ensure Data Provider attribution and collaboration opportunities
- Open access requirements maintained for publications using retained datasets
- Data availability statements reflect post-project access procedures

**Knowledge Transfer:**
- Comprehensive documentation of data management procedures and lessons learned
- Training materials and best practices shared with broader research community
- Succession planning documents prepared for institutional knowledge transfer
- Regular reporting on data management outcomes and long-term sustainability

The post-project data management framework ensures continuity of data protection, research value, and stakeholder rights regardless of project continuation or completion scenarios.
```

---

## NEW SECTION 21: Interim Data Access Restrictions

**Location:** Add as entirely new Section 21

**Complete new section:**
```
## 21. Interim Data Access Restrictions

During the transition to human subjects study classification and cloud migration implementation, certain interim restrictions on health data access are required to ensure compliance and participant protection.

### 21.1. CHEAQI Data Access Restrictions

**Current Status:**
- CHEAQI (Centre for Health Economics and Quality Assessment) has been requested to suspend health data analysis activities during the human subjects study transition
- This restriction ensures compliance with NIH guidelines for human subjects research classification
- Suspension applies specifically to health datasets containing personally identifiable information

**Scope of Restrictions:**
- CHEAQI access to Original Study Data and Consortium Shared Data temporarily suspended
- Access to climate/weather data and socio-economic datasets remains unrestricted
- Previously completed analyses and publications are not affected by these restrictions
- CHEAQI collaboration on non-health data components continues without limitation

### 21.2. HE²AT Center Health Data Status

**NIH Guidance Compliance:**
- Similar restrictions apply to HE²AT Center health data access during transition period
- All consortium partners must comply with human subjects research requirements before resuming health data activities
- Transition timeline coordinated with NIH project officer and institutional compliance offices

**Operational Impact:**
- Suspension of new health data analysis projects until transition completion
- Continued data processing and harmonisation activities under existing approved protocols
- Preparation and planning activities for post-transition research continue without restriction
- Regular progress reporting to NIH and institutional oversight bodies maintained

### 21.3. Data Provider Communication

**Notification Strategy:**
- Comprehensive communication sent to all Data Providers explaining temporary access restrictions
- Clear timeline provided for transition completion and resumption of normal operations
- Regular updates provided on transition progress and any changes to projected timelines
- Direct contact person designated for Data Provider questions and concerns

**Communication Content:**
- Explanation of human subjects study classification requirements and benefits
- Assurance that all data remains secure and protected during transition period
- Clarification that restrictions are precautionary and temporary in nature
- Information about enhanced protection measures being implemented

### 21.4. Transition Timeline and Resolution

**Estimated Timeline:**
- Transition period expected to last 3-6 months depending on NIH approval processes
- Regular milestone reviews conducted monthly during transition period
- Expedited resolution procedures implemented to minimise disruption to research activities
- Clear criteria established for lifting restrictions and resuming normal operations

**Resolution Criteria:**
- Completion of human subjects research classification process
- NIH approval of updated data management procedures
- Institutional compliance certification for all consortium partners
- Updated ethics approvals and data transfer agreements as required

**Resumption Procedures:**
- Formal notification to all stakeholders when restrictions are lifted
- Gradual resumption of health data activities under enhanced protection protocols
- Additional training provided to all personnel on updated procedures
- Comprehensive review and validation of all data access and analysis activities

### 21.5. Mitigation and Support Measures

**Research Continuity:**
- Alternative research activities identified to maintain project momentum during transition
- Focus on climate data analysis, methodology development, and infrastructure preparation
- Collaborative planning for accelerated research activities once restrictions are lifted
- Regular consortium meetings to maintain engagement and coordination

**Stakeholder Support:**
- Regular communication with Data Providers regarding transition status
- Technical support maintained for all non-restricted data activities
- Planning assistance provided for post-transition research resumption
- Documentation and training materials prepared for transition completion

The interim data access restrictions ensure full compliance with regulatory requirements whilst minimising disruption to research objectives and maintaining stakeholder confidence in data protection measures.
```

---

## END OF NEW CHANGES

All changes above should be integrated into the appropriate sections of the existing DMP v2.1 document. Each change is clearly marked with its location and the exact text to be added or modified.