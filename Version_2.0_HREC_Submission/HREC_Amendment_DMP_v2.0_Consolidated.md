# WITS HUMAN RESEARCH ETHICS COMMITTEE (MEDICAL)
# PROTOCOL AMENDMENT NOTIFICATION

## Study Information

**Study Title:** NIH HE²AT Center Data Management Plan  
**Protocol number:** HE²AT-DMP-2025  
**Date of last version of protocol:** 15 March 2023 (Version 1.0)  
**HREC Reference No:** RP1 (220605), RP2 (220606)  

---

## 1. Overall rationale for the amendment

The HE²AT Center (Heat and Health in Africa Transdisciplinary Center) is a five-year U54 Cooperation agreement with the NIH, aimed at establishing comprehensive data management infrastructure for climate-health research in Africa. This amendment presents a comprehensive update to the Data Management Plan to address evolving technological, regulatory, and operational requirements identified during the first three years of implementation.

The primary rationale for this Version 2.0 amendment includes:

1. **Infrastructure Modernization**: Implementation of hybrid cloud infrastructure alongside existing UCT systems to enhance scalability, reliability, and disaster recovery capabilities while maintaining data sovereignty

2. **Enhanced Security Framework**: Introduction of enterprise-grade security measures including AES-256 encryption, 24/7 Security Operations Centre monitoring, and zero-trust architecture to exceed international data protection standards

3. **Regulatory Compliance Enhancement**: Strengthened POPIA compliance measures and alignment with international data protection regulations, particularly for cross-border data transfers

4. **Human Subjects Study Classification**: Incorporation of additional safeguards following NIH reclassification of the project as a human subjects study, requiring enhanced consent procedures and participant rights protection

5. **Governance Strengthening**: Implementation of universal Data Access Committee review for all data requests (internal and external) to ensure equitable access and comprehensive tracking

6. **Operational Efficiency**: Streamlined data processing pipelines, automated backup systems, and enhanced computational resources to support growing research demands

---

## 2. Implementation of the protocol modification

Upon receiving research ethics committee approval for this protocol amendment, the implementation will follow a structured approach to ensure continuity of research operations while enhancing data protection:

**Immediate Implementation (Upon Approval):**
- Activation of enhanced security monitoring and encryption protocols
- Implementation of universal DAC review requirements for all data access requests
- Deployment of strengthened access controls and audit capabilities

**Phased Implementation (Months 1-10):**
- Gradual migration to hybrid cloud infrastructure with continuous validation
- Systematic training of all personnel on new procedures and systems
- Progressive enhancement of computational resources and analytical capabilities

**Documentation and Compliance:**
- A copy of the protocol amendment approval along with any correspondence will be retained in the site's regulatory files
- All data providers will be notified of infrastructure enhancements through formal communication
- Regular compliance assessments will be conducted to ensure adherence to enhanced standards

The implementation maintains dual infrastructure capability throughout the transition period, ensuring no disruption to ongoing research activities while systematically enhancing data protection measures.

---

## 3. All proposed changes and their rationale

| Location of Revision | Description of Revision | Reason for changes |
|---------------------|------------------------|-------------------|
| **Section 3: Data Management Framework**<br>Page 4-6 | Previous text: Basic data management workflow with single infrastructure<br><br>New text: Enhanced framework incorporating hybrid cloud-UCT infrastructure model with comprehensive data lifecycle management, including automated quality assurance, enhanced metadata management, and systematic versioning protocols. Addition of clear transition timeline showing Year 5 as infrastructure optimization period. | Provides comprehensive framework for managing increased data volumes and complexity. Hybrid infrastructure ensures resilience and scalability while maintaining local control. Clear transition timeline improves stakeholder communication and planning. |
| **Section 4.1.2: Data Storage Infrastructure**<br>Page 8-9 | Previous text: "Data stored exclusively on UCT servers with standard security measures"<br><br>New text: "Data stored on hybrid infrastructure combining UCT on-premise servers and WHC-managed cloud infrastructure with AES-256 encryption, providing enhanced scalability, geographic redundancy, and disaster recovery capabilities whilst maintaining full POPIA compliance. Cloud storage includes automated backup systems, real-time replication, and advanced access controls." | Critical enhancement to address storage capacity limitations, improve disaster recovery capabilities, and provide scalable infrastructure for growing data volumes. AES-256 encryption exceeds industry standards for health data protection. Geographic redundancy ensures data availability even in catastrophic scenarios. |
| **Section 5: Data Transfer Agreements**<br>Page 11-12 | Previous text: Standard bilateral DTA framework<br><br>New text: Enhanced DTA framework incorporating provisions for cloud storage, cross-border data transfers under POPIA, and tripartite agreements for infrastructure transitions. Added specific clauses for: data localization requirements, encryption standards, incident notification procedures, and enhanced audit rights. Includes template for provider notification regarding infrastructure enhancements. | Ensures legal compliance with evolving data protection regulations. Tripartite agreements provide clear framework for infrastructure transitions while maintaining continuous protection. Enhanced provisions address specific risks associated with cloud storage and cross-border transfers required for disaster recovery. |
| **Section 6.1: Data Pre-processing**<br>Page 14-15 | Previous text: "Manual pre-processing workflows on local systems"<br><br>New text: "Automated pre-processing pipelines utilizing hybrid infrastructure with enhanced security, automated validation checks, real-time quality monitoring, and comprehensive audit trails. Implementation of machine learning-based anomaly detection for data quality assurance. Cloud-based processing provides elastic compute resources for handling variable data volumes." | Significantly improves data quality through automated validation and anomaly detection. Reduces human error in data processing. Elastic compute resources ensure timely processing regardless of data volume fluctuations. Comprehensive audit trails support regulatory compliance and research reproducibility. |
| **Section 6.4: Database Architecture**<br>Page 17-18 | Previous text: Traditional relational database on single server<br><br>New text: Distributed database architecture utilizing cloud-native services with automated failover, point-in-time recovery capabilities, and enhanced performance optimization. Implementation of data lakehouse architecture supporting both structured and unstructured data with unified governance. Includes real-time synchronization between UCT and cloud databases during transition period. | Modern architecture supports diverse data types and analytical workloads. Automated failover ensures continuous availability. Point-in-time recovery protects against data corruption. Data lakehouse approach provides flexibility for evolving research needs while maintaining governance standards. |
| **Section 8: Analytical Platform**<br>Page 20-22 | Previous text: "CSAG/UCT Jupyter Hub platform with limited computational resources"<br><br>New text: "Enhanced analytical platform combining CSAG/UCT Jupyter Hub with cloud-based computational resources including GPU acceleration for machine learning, distributed computing for large-scale analyses, and containerized environments for reproducibility. Platform provides auto-scaling capabilities to handle peak analytical loads and supports collaborative research through shared workspaces." | Addresses computational limitations that constrained complex analyses. GPU acceleration enables advanced machine learning applications. Distributed computing supports population-scale studies. Containerization ensures reproducibility across different computing environments. Auto-scaling optimizes resource utilization and cost. |
| **Section 10: Data Sharing Governance**<br>Page 24-26 | Previous text: DAC review required only for external researchers<br><br>New text: Universal Data Access Committee review requirement for ALL data access requests including internal consortium members. No exceptions to comprehensive review process. Implementation of structured review criteria, standardized evaluation metrics, and transparent decision framework. Addition of expedited review pathway for time-sensitive public health responses while maintaining full governance oversight. | Ensures equitable data access and comprehensive tracking of all data usage. Eliminates potential conflicts of interest from self-approved access. Standardized criteria improve consistency and transparency in decision-making. Expedited pathway balances governance with public health emergency response needs. |
| **Section 11: POPIA Compliance**<br>Page 28-30 | Previous text: Standard POPIA compliance measures<br><br>New text: Enhanced POPIA framework with specific provisions for cloud storage, including: detailed data localization strategies, cross-border transfer mechanisms under Section 72, enhanced consent procedures for cloud storage, and comprehensive data subject rights management system. Addition of automated compliance monitoring and reporting tools.<br><br>**Human Subjects Study Classification:** Following NIH reclassification, additional safeguards implemented including: enhanced informed consent procedures for data reuse, strengthened participant rights including data portability and correction, additional vulnerable population protections, and expanded incident response procedures. | Addresses specific POPIA requirements for cloud storage and international data transfers. Automated monitoring ensures continuous compliance. Human subjects classification requires enhanced ethical safeguards beyond standard data protection. Strengthened procedures ensure participant rights are fully protected throughout data lifecycle. |
| **Section 14: Security Architecture**<br>Page 35-38 | Previous text: "Standard institutional security measures including firewall and access controls"<br><br>New text: "Enterprise-grade security architecture featuring: AES-256 encryption for data at rest and in transit, 24/7 Security Operations Centre monitoring with advanced threat detection, zero-trust network architecture with microsegmentation, cloud-native firewall services with DDoS protection, multi-factor authentication for all users, privileged access management system, and automated security incident response procedures. Implementation of continuous security assessment and penetration testing program." | Significantly enhances data protection to exceed international standards for health data. SOC monitoring provides proactive threat detection and rapid incident response. Zero-trust architecture minimizes attack surface. Automated incident response reduces time to containment. Continuous assessment ensures security posture remains effective against evolving threats. |
| **Section 15: Organizational Structure**<br>Page 40-42 | Previous text: Individual-based roles with specific named personnel<br><br>New text: Institution-based responsibility framework with defined organizational roles and clear accountability structures. Addition of WHC as infrastructure partner with specific responsibilities for cloud services, security monitoring, and technical support. Implementation of RACI matrix for all data management activities. Establishment of joint governance committee for infrastructure oversight. Contact information maintained in separate updatable appendix. | Improves organizational resilience by defining institutional rather than individual responsibilities. Clear accountability structures ensure continuity despite personnel changes. Joint governance committee ensures coordinated decision-making. Separate contact appendix reduces need for amendment updates when personnel change. |
| **Section 16: Capacity Building**<br>Page 43-44 | Previous text: Basic training on data management procedures<br><br>New text: Comprehensive capacity building program including: mandatory security awareness training for all personnel, specialized technical training for data managers on cloud technologies, research-specific training on enhanced analytical tools, compliance training on POPIA and human subjects protections, and incident response training for key personnel. Implementation of competency assessment and certification program. | Ensures all personnel have necessary skills for enhanced infrastructure. Security training reduces human factor risks. Technical training maximizes utilization of new capabilities. Compliance training ensures consistent adherence to regulations. Certification program provides objective competency validation. |
| **Section 17: Risk Management**<br>Page 45-47 | Previous text: Basic risk identification without systematic mitigation<br><br>New text: Comprehensive risk management framework with detailed risk register, quantified impact assessments, and specific mitigation strategies for: infrastructure failures (dual infrastructure capability), security breaches (enhanced monitoring and response), compliance violations (automated monitoring and regular audits), data quality issues (automated validation), and vendor dependencies (multi-vendor strategy). Implementation of regular risk assessment cycles and mitigation effectiveness reviews. | Proactive risk management reduces likelihood and impact of adverse events. Quantified assessments support resource allocation decisions. Specific mitigation strategies ensure preparedness. Regular assessment cycles ensure framework remains current with evolving risk landscape. |
| **Section 18: Data Lifecycle Management**<br>Page 48-49 | Previous text: Undefined retention periods and disposal procedures<br><br>New text: Comprehensive data lifecycle management including: defined retention periods aligned with regulatory requirements (7 years for health data), secure disposal procedures with certified destruction, archival strategies for long-term preservation, and data minimization principles. Implementation of automated retention policy enforcement and disposal scheduling. Addition of data lineage tracking for research reproducibility. | Ensures compliance with retention requirements while minimizing unnecessary data accumulation. Certified destruction provides auditable disposal evidence. Automated enforcement reduces compliance burden. Data lineage supports research integrity and reproducibility requirements. |
| **Section 19: Quality Assurance**<br>Page 50-51 | Previous text: Ad-hoc quality checks<br><br>New text: Systematic quality assurance program including: automated data validation rules, statistical quality control procedures, regular data audits with defined metrics, and continuous quality improvement processes. Implementation of data quality dashboards for real-time monitoring and ISO 9001-aligned quality management system for data operations. | Ensures consistent high-quality data for research reliability. Automated validation reduces errors and processing time. Real-time monitoring enables rapid issue identification and resolution. ISO alignment demonstrates commitment to international quality standards. |
| **Section 20: Disaster Recovery**<br>Page 52-53 | Previous text: Basic backup procedures<br><br>New text: Comprehensive disaster recovery and business continuity plan including: Recovery Time Objective (RTO) of 4 hours and Recovery Point Objective (RPO) of 1 hour for critical systems, geographic redundancy across multiple regions, automated failover procedures, regular disaster recovery testing (quarterly), and detailed incident command structure. Implementation of immutable backup storage to protect against ransomware. | Ensures research continuity in face of disasters or cyberattacks. Defined RTO/RPO provides clear recovery expectations. Geographic redundancy protects against regional disasters. Immutable backups provide protection against sophisticated cyber threats. Regular testing ensures plan effectiveness. |
| **Annex 1: Transition Framework**<br>Page 54-58 | Previous text: Not applicable (new section)<br><br>New text: Comprehensive transition implementation framework including: 5-phase migration strategy with clear milestones, detailed validation protocols for each data category, stakeholder communication plan with templates, risk-based migration sequencing, and rollback procedures for each phase. Includes specific timelines, success criteria, and go/no-go decision points for each migration phase. | Provides systematic approach to infrastructure transition minimizing disruption and risk. Phased approach enables learning and adjustment. Validation protocols ensure data integrity throughout migration. Clear communication maintains stakeholder confidence. Rollback procedures provide safety net for unexpected issues. |

---

## Additional Compliance Information

**POPIA Compliance Statement:**  
According to the rules of the Protection of Personal Information Act 4 of 2013 (as amended), all data collected and processed under this amended DMP will be subject to enhanced protection measures. Data collected through the hybrid infrastructure will be stored on secure servers with AES-256 encryption. While cloud infrastructure may involve data storage outside of South Africa for disaster recovery purposes, all such transfers will comply with Section 72 of POPIA through appropriate safeguards including binding corporate rules and standard contractual clauses.

**Data Access and Retention:**  
- Only authorized research team members will have access to identifiable data
- All data will be anonymized using participant IDs before analysis
- Health data will be retained for 7 years post-study completion
- Certified destruction procedures will be followed for data disposal
- Comprehensive audit trails maintained for all data access and modifications

**Enhanced Security Measures:**  
- Implementation of AES-256 encryption for data at rest and in transit
- 24/7 Security Operations Centre monitoring with incident response capability  
- Multi-factor authentication required for all system access
- Regular security assessments and penetration testing
- Automated compliance monitoring and reporting

**Participant Protection:**  
This amendment significantly enhances participant data protection through:
- Strengthened technical safeguards exceeding international standards
- Enhanced governance through universal DAC review requirements
- Improved disaster recovery ensuring data availability
- Comprehensive audit capabilities for accountability
- Additional safeguards for vulnerable populations

---

## Summary

This Version 2.0 amendment represents a comprehensive enhancement of the HE²AT Center Data Management Plan, consolidating technological advances, regulatory requirements, and operational improvements identified during the project's initial implementation phase. The amendments significantly strengthen data protection while improving research capabilities, ensuring the project continues to meet the highest ethical and operational standards for health research in Africa.

All changes maintain or enhance existing ethical safeguards, with no reduction in participant protection levels. The implementation approach ensures continuity of research operations while systematically improving all aspects of data management, security, and governance.