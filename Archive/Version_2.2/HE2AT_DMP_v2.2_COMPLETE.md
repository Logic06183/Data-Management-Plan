# HE²AT Center Data Management Plan v2.2

## Acronyms

| Acronym | Description |
|----------|-------------|
| AOT | Aerosol Optical Thickness |
| BMGFKi | Bill and Melinda Gates Foundation Ki repository |
| CSAG | Climate System Analysis Group |
| DAC | Data Access Committee |
| DAP | Data Analysis Platform |
| DMAC | Data Management and Analysis Core of the HE²AT Center |
| DMP | Data Management Plan |
| DS-I Africa | NIH Data Science Initiative Africa |
| DTA | Data Transfer Agreement |
| DUOS | Data Use Oversight System |
| ELSI | Ethical Legal and Social Implications Projects of DS-I Africa |
| FAIR | Findable, Accessible, Interoperable, and Reusable |
| FIPS | Federal Information Processing Standards |
| GCRO | Gauteng City-Region Observatory |
| HPC | High-Performance Computing |
| HSS | US Department of Human and Health Services |
| LDAP | Lightweight Directory Access Protocol |
| NDVI | Normalised Difference Vegetation Index |
| NIH | US National Institute of Health |
| NIR | Near-Infrared |
| NIST | National Institute of Standards and Technology |
| ODSP | Open Data Science Platform |
| PI | Principal Investigator |
| QoS | Quality of Service |
| RP1 | Research Project 1 of the HE²AT Center |
| RP2 | Research Project 2 of the HE²AT Center |
| SC | HE²AT Center Steering Committee |
| SRTM | Shuttle Radar Topography Mission |
| TEC | Training and Engagement Core of the HE²AT Center |
| TLS | Transport Layer Security |
| UCT | University of Cape Town |
| WWARN | Worldwide Antimalarial Resistance Network |
| sSA | sub-Saharan Africa |
| WHC | Wits Health Consortium Pty (Ltd) |
| Wits PHR | Wits Planetary Health Research a division of Wits Health Consortium (Pty) Ltd |
| UPGC | University Peleforo Gon Coulibaly Korhogo Côte d'Ivoire |

## Definitions

| Term | Definition |
|------|------------|
| Areal/Geospatial Socio-Economic Data | Represents socio-economic conditions such as household economic status, access to services, and dwelling type. Sourced from national census data and focused household and demographic surveys. |
| Bona Fide Researcher | An individual or entity engaged in legitimate scientific research to advance knowledge in health data science, operating within the ethical, legal, and professional frameworks of academic and scientific research. |
| CSAG GitLab | The version control and collaboration platform used by the Climate System Analysis Group (CSAG) at the University of Cape Town (UCT) for managing the HE²AT Center's data processes, documenting Data Reference Syntax (DRS), and storing data management code ensures transparent, version-controlled data handling accessible to authorised team members. |
| Climate/Weather Data | This includes observational-based datasets such as weather station observations, satellite proxy observations, and gridded climate data produced from atmospheric re-analysis and climate simulations. |
| Consortium Shared Data | Data that has undergone initial processing, harmonisation and integration and includes, amongst other variables, a limited set of indirect personal identifiers that are required for the purposes of conducting the HE²AT Center project analysis. This data is only shared amongst the HE²AT Center Consortium partners through the Consortium Data Sharing Agreement. |
| Consortium Data Sharing Agreement | The Data Sharing Agreement executed between the HE²AT Center Consortium. |
| Data Access Committee (DAC) | A committee responsible for reviewing and approving data access requests, and ensuring adherence to ethical, legal, and scientific standards. |
| Data Analysis Platform (DAP) | The platform used for conducting data analysis, typically including tools like JupyterHub. |
| Data Downloads | A modality of data sharing where researchers can download datasets to their local computing environments directly. |
| Data Management Plan (DMP) | A document outlining the procedures and standards for data acquisition, transfer, processing, storage, and access for the HE²AT Center Project. |
| Data Management and Analysis Core (DMAC) | The core component of the HE²AT Center responsible for overseeing data management and analysis activities. |
| Data Protection Legislation | Any data protection or data privacy laws as may be applicable including but not limited to POPIA, the Electronic Communications and Transactions Act 26 of 2005, the Consumer Protection Act 68 of 2008, and the General Data Protection Regulation (GDPR). |
| Data Provider | The party that owns, controls or otherwise possesses the rights to transfer data and is responsible for ensuring it has the legal authority to transfer such data and that such data is provided in accordance with any applicable laws, regulations or contractual obligations |
| Data Subject | The individuals whose personal information is captured in health datasets. |
| Data Transfer Agreement (DTA) | A legal document outlining the terms and conditions under which data is shared between a data provider and data recipient, addressing confidentiality, data use limitations, and compliance with relevant laws and guidelines. |
| Ethical Legal and Social Implications (ELSI) | Projects within DS-I Africa that focus on data science and research's ethical, legal, and social aspects. |
| Findable, Accessible, Interoperable, and Reusable (FAIR) | Principles that aim to improve the discovery, accessibility, interoperability, and reuse of data. |
| Gauteng City-Region Observatory (GCRO) | A research institute producing socio-economic data for the Gauteng City-Region, including the Quality of Life Survey. |
| HE²AT Center | The Heat and Health in Africa Transdisciplinary Center, operating under a U54 Cooperation agreement with the NIH (2021-2026), focused on heat-health research, capacity building, and engagement |
| HE²AT Center Consortium | The HE²AT Center consortium partners funded through the HE²AT Center grant jointly working on the HE²AT Center Project who conduct research using the shared datasets. They adhere to the DMP data acquisition, transfer, processing, storage, and access guidelines, as well as the Consortium Data Sharing Agreement. |
| HE²AT Center Data Management Plan | The data management plan applicable to the HE²AT Center Project as may be amended and updated from time to time. |
| HE²AT Center Project | The research project titled: "Developing data science solutions to mitigate the health impacts of climate change in Africa" and comprised of Research Project 1 and Research Project 2. |
| HE²AT Center Steering Committee (SC) | The committee responsible for guiding the strategic direction and oversight of the HE²AT Center consisting of representatives from each consortium partner as well as representatives from the NIH |
| Harmonisation | Aligning various health datasets into a unified format according to a common code book of variable names and definitions and common units and categories. |
| Individual Participation Data | Includes data collected from previous clinical cohort and trial studies, generally considered personal data due to its association with individual medical records and health events. |
| Integration | Aligning and integrating health and other various datasets into an integrated dataset. |
| Inferential Data | Aggregated and anonymised data derived from analyses. |
| NIH Data Science Initiative (DS-I) Africa | An NIH initiative aimed at enhancing data science capacity and collaboration across Africa. |
| Near-Infrared (NIR) | A region of the infrared spectrum of light used in remote sensing applications. |
| Normalised Difference Vegetation Index (NDVI) | An index of plant 'greenness' or photosynthetic activity. |
| Open Access data | Research data freely available through a data repository without major restrictions. |
| Open Data Science Platform (ODSP) | A platform facilitating the storage, retrieval, and processing of data for health research. |
| Operator | A person who processes Personal Data for a Responsible Party in terms of a contract or mandate without coming under the direct authority of that party. |
| Original Study Data | Raw, unprocessed Individual Participant Data collected directly from various cohort studies and clinical trials. This data is provided by the Data Provider who conducted or commissioned the relevant study and/or clinical trial. |
| Personal Data | Any information relating to an identifiable living natural person and where it is applicable an identifiable existing juristic person. |
| Personally Identifiable Data | Data variables that enable the identification of an individual either directly through names, ID numbers, etc., or indirectly through combining other variables such as locations (GPS, street address), age, gender, and medical information. |
| Principal Investigator | The lead researcher responsible for the conduct of a research project. |
| Processing | Any operation or set of operations which is performed upon Personal Data whether or not by automatic means such as collection, recording, organisation, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, blocking, erasure or destruction. |
| RP1 De-identified Data | Data with the following information deleted; (1) information that directly identifies the Data Subject, (2) information that can be used or manipulated by a reasonably foreseeable method to identify the Data Subject or, (3) information that can be linked by a reasonably foreseeable method to other information that identifies the Data Subject. |
| RP2 De-identified Data | Data with the following information deleted; (1) information that directly identifies the Data Subject, (2) information that can be used or manipulated by a reasonably foreseeable method to identify the Data Subject or, (3) information that can be linked by a reasonably foreseeable method to other information that identifies the Data Subject. |
| Re-analysis | A dynamical model simulation of historical climate evolution continuously nudged by observations to provide an approximate historical representation of the climate system. |
| Remote Sensing Data | Data derived from satellite sensors, including optical imagery and indicators of physical measures like land surface temperature, soil moisture estimates, and vegetation condition. |
| Research Hubs | Seven NIH DS-I Africa U54 grants that are called "Research Hubs" and who contribute to and utilise shared data resources. |
| Research Project 1 (RP1) | The first major research project of the HE²AT Center Project focused on individual participant data meta-analysis of heat-health impacts. It is entitled: "Individual Participant Data meta-analysis to quantify the impact of high ambient temperatures on maternal and child health in Africa" |
| Research Project 2 (RP2) | The second major research project of the HE²AT Center Project, focusing on urban heat health impacts and Early Warning Systems. |
| Responsible Party | A public or private body or any other person which alone or in conjunction with others determines the purpose of and means for Processing Personal Data. |
| Sensitive data | Data that pertains to an individual's personal information, such as, but not limited to health, finances, occupation. |
| Shuttle Radar Topography Mission (SRTM) | A mission that obtained elevation data for most of the Earth using radar interferometry. |
| Training and Engagement Core (TEC) | The core component of the HE²AT Center responsible for training and capacity-building activities. |
| Transport Layer Security (TLS) | A cryptographic protocol designed to provide secure communication over a computer network. |
| US National Institute of Health (NIH) | The primary agency of the United States government responsible for biomedical and public health research. |
| sub-Saharan Africa (sSA) | A geographical region of Africa located south of the Sahara Desert. |

## 2. Stakeholders and target audience

• **CSAG/UCT Data Management Team**: The Climate System Analysis Group (CSAG) in the Faculty of Science at the University of Cape Town (UCT) manages data storage, harmonisation, and integration processes within the HE²AT Center.

• **Climate Data Providers**: Organisations or agencies that supply data related to climate and weather, such as weather station observations, satellite data, and gridded climate data. Examples include national meteorological services and international climate data repositories like Copernicus Climate Data Store (CDS).

• **Core Data Team**: A group of vital personnel responsible for the initial processing and de-identifying of the original study data.

• **Data Access Committee (DAC)**: This committee evaluates and approves requests for data access and ensures that data sharing complies with ethical, legal, and scientific standards.

• **Data Provider**: The party that owns, controls, or otherwise possesses the rights to transfer data and is responsible for ensuring it has the legal authority to transfer such data and that such data is provided in accordance with any applicable laws, regulations or contractual obligations

• **DS-I Partners**: Partners within the NIH Data Science for Health Discovery and Innovation in Africa (DS-I Africa) Initiative who contribute to and utilise the shared data resources, collaborating on data management practices to ensure alignment with the broader DS-I Africa objectives.

• **eLwazi**: As a data management platform, eLwazi facilitates the indexing, storage, and sharing of data within the consortium. It ensures that data is discoverable, accessible, interoperable, and reusable (FAIR principles).

• **Ethics Committees**: Institutional bodies that review and approve the ethical aspects of research projects, ensuring that studies comply with ethical standards and protect participants' rights and welfare.

• **Harmonisation Team Members**: Researchers and data scientists within the HE²AT Center Consortium who work on harmonisation and integrating datasets into a unified format, ensuring consistency and usability for analysis.

• **Health Data Providers**: Entities responsible for collecting and providing biomedical data, including clinical trial coordinators, cohort study administrators, hospitals, and research institutions involved in health-related studies.

• **Health Experts**: Specialists in health-related fields who validate the harmonisation of biomedical data and ensure the accuracy and reliability of the integrated datasets.

• **HE²AT Center Consortium**: The HE²AT Center consortium partners funded through the HE²AT Center grant jointly working on the HE²AT Center Project who conduct research using the shared datasets. They adhere to the DMP data acquisition, transfer, processing, storage, and access guidelines, as well as the Consortium Data Sharing Agreement.

• **IBM Research Africa Geospatial and Climate Analysis Team**: The HE²AT Center Consortium team at IBM Research Africa, responsible for leveraging and developing geospatial artificial intelligence tools and models in the context of the HE²AT Center. Most of the tools and models leveraged are open source and access to IBM Research proprietary prototype tools will be made available to the HE²AT Center through relevant software licences that facilitates access to those resources for the collaboration.

• **External Bona Fide Researchers**: collaborate with the HE²AT Center and utilise the integrated datasets for various research projects and analyses. They follow the data access procedures outlined in this DMP and comply with data transfer agreements, ethical guidelines, and any conditions set by the Data Access Committee.

• **Socio-Economic Data Providers**: Organisations that provide data on socio-economic conditions, such as national census bureaus, household survey agencies, and specialised observatories like the Gauteng City-Region Observatory (GCRO).

## 3. Background and overview of Data Management Plan

### 3.1. Background to the HE²AT Center

The HEat and HEalth Africa Transdisciplinary Center (HE²AT Center), is a U54 Cooperation agreement with the NIH (2021-2026). The HE²AT Center aspires to become a Center of Excellence in heat-health research, capacity building and engagement, using population health science and applying data science methodologies to improve the health of populations in Africa and beyond. The goal of the HE²AT Center is to advance the development of new health knowledge and human capacities by reusing existing data to generate and then disseminate heat-health knowledge and innovations.

**RP1 description**

Research project 1 is an Individual Participant Data (IPD) meta-analysis to assess the size and nature of associations between exposure to high ambient temperatures and selected health outcomes in pregnant women and children within the first two years of life. The IPD approach has not yet been employed in climate change and health research. An IPD can overcome many limitations of traditional analyses of individual datasets and biases in classic systematic review methodology. The project has systematically identified potentially eligible African cohort studies or trials through a systematic mapping of studies on pregnant women and children in Africa¹. Data are being harmonised by re-coding raw individual participant data into a standard set of variables. Subsequently, all the individual participant's data from each eligible study will be pooled. Analyses that include a range of traditional statistical and novel machine-learning approaches will quantify associations between exposure to high temperatures and adverse maternal and child health outcomes. The study may provide robust, definitive evidence on the impacts of heat on maternal and child health and allow for estimation of the burden of rises in temperatures and other climate change manifestations on maternal and neonatal health².

**RP2 description**

Rapid growth in urban populations, geographical extent of cities and over-burdened health services in African cities, coupled with rising temperatures and Urban Heat Island phenomenon, pose significant public health challenges. High ambient temperatures cause considerable morbidity and mortality in urban areas, influenced by temperature gradients across a city, socio-environmental factors and the characteristics of the built environment. This project, conducted in Abidjan, Ivory Coast, and Johannesburg, South Africa, will investigate heat exposure risks to inform development of an Early Warning System for vulnerable groups.

We will use data science methods, including natural language processing and predictive geospatial analysis, to integrate diverse data streams. Potential mediating and confounding factors, such as urban form, differentials in socio-economic status and vegetation indices, will be included in exposure-response analyses involving high-resolution climate data and health outcomes. The project aims to estimate historical and future heat hazards and develop a predictive model linking heat exposure to health outcomes under different emission and development scenarios. Health data will come from cohort and clinical trials in the target cities. Various dissemination methods for the Early Warning System will be explored, including a web-based application³.

### 3.2. Scope of Data Management Plan

This Data Management Plan (DMP) applies to all data acquired and produced as part of the HE²AT Center Project activities.

### 3.3. Purpose

The Data Management Plan (DMP) establishes comprehensive procedures and standards for transferring, processing, storing, and accessing data within the HE²AT Center Project. This plan ensures data integrity and security whilst facilitating effective data sharing and stakeholder collaboration. The DMP outlines the procedures for data access by External Researchers, ensuring that all data management activities, both inside and outside the HE²AT Center Consortium, align with the HE²AT Center's objectives and ethical commitments.

Specifically, the DMP seeks to:

• **Standardise Data Management Practices**: Define uniform procedures and standards to streamline data handling processes across the HE²AT Center Consortium, ensuring consistency and reliability.

• **Enhance Data Security and Privacy**: Implement robust measures to protect sensitive and personally identifiable data, complying with relevant legal and ethical standards.

• **Facilitate Data Sharing and Access**: Clear guidelines and DTAs promote transparency and collaboration and support data sharing within the HE²AT Center Consortium, with other DS-I Africa projects, and with External Researchers.

• **Support Data-Driven Research**: Provide a framework that enables researchers to efficiently access and utilise data for innovative research, contributing to the HE²AT Center's mission of advancing heat-health knowledge and interventions.

• **Ensure Compliance with Ethical Guidelines**: Maintain adherence to ethical standards and guidelines, including obtaining necessary approvals and consents for data use.

### 3.4. Overview of the Data Management Workflow

The HE²AT Center's data management process is structured around several critical stages, from data acquisition to sharing and open access. The following diagram (Figure 1) provides an overview of this comprehensive workflow, illustrating the relationships between data types, processing steps, and access levels.

**[FIGURE 1 PLACEHOLDER: HE²AT Center Data Management Workflow]**
*Insert comprehensive workflow diagram showing:*
- *Data flow from acquisition through processing stages*
- *Relationships between data types and access levels*
- *Stakeholders involved at each stage*
- *Pre-processing, harmonisation, integration, and de-identification phases*
- *Transition from restricted data to open access*
- *Updated to include cloud infrastructure components*

This diagram not only serves as a guide to understanding the flow of data through various phases—such as pre-processing, harmonisation, integration, de-identification, and the transition from restricted data to open access—but also highlights the stakeholders involved at each stage. The diagram presents the framework that will be unpacked and elaborated upon throughout the rest of this document.

Each of the sections that follow addresses one part of this framework in detail, especially concerning the processes around ethical and legal standards to follow and steps to promote data accessibility and reuse. This diagram, therefore, acts as a roadmap for navigating the complexities of data management within the HE²AT Center.

## 4. Data types

Data acquisition is a foundational step in the HE²AT Center's research efforts, involving systematically acquiring a collection of datasets critical to achieving the project's objectives. These datasets are broadly categorised into health-related, climate/weather, and areal/geospatial socio-economic data, each discussed in turn below.

### 4.1. Health-related data

#### 4.1.1. Summary of data categories

The categorisation of health data within the HE²AT Center ensures that the HE²AT Center adheres to ethical and legal standards whilst facilitating collaborative research among the HE²AT Center Consortium and External Researchers with controlled access. Health data is classified into four distinct forms, ranging from original, individual-level data, aggregated to inferential data. This structured approach aims to maintain data privacy and protection throughout the HE²AT Center Project lifecycle.

**[FIGURE 2 PLACEHOLDER: HE²AT Center Data Management Data Categories]**
*Insert visual representation showing:*
- *Original Study Data → Consortium Shared Data → RP1/RP2 De-identified Data → Inferential Data*
- *Data flow and transformation between categories*
- *Processing stages and security levels*
- *Access restrictions and stakeholder permissions at each level*
- *Updated to reflect cloud storage and processing capabilities*

In all activities involving health data, the HE²AT Center Consortium contractually undertakes not to use the data to attempt to re-identify any Data Subjects.

#### 4.1.2. Original Study Data

This category includes original, unprocessed health data collected directly through the various previously completed cohort studies and clinical trials that fulfil the study eligibility criteria. Ownership of this data is retained by the Data Provider who conducted or commissioned the studies and/or clinical trial. The Original Study Data is acquired on the basis of a Data Transfer Agreement, and is retained for a period of five years after the completion of the HE²AT Center Project for the purposes of concluding and correcting any analysis and publications resulting from the Data. Any retention of Data after this five-year period will be further agreed with the Data Provider. The Data provider may elect to terminate the Data Transfer Agreement and data retention will then be dealt with in a manner requested by the Data Provider.

The Original Study Data is held under strong access control on servers hosted at UCT <span style="color: red">**[TRACKED CHANGE] and WHC-managed cloud infrastructure with AES-256 encryption, providing enhanced scalability and disaster recovery capabilities whilst maintaining POPIA compliance**</span>. Access to this data is restricted to a small team of data managers within the Core Data Team (see roles and responsibilities section for more detail). The Original Study Data has all direct identifiers removed prior to transfer to the remainder of the HE²AT Center Consortium (e.g., names and contact numbers), but may still contain indirect identifiers such as dates and geolocation information.

#### 4.1.3. Consortium-shared data

Once the Original Study Data is processed, harmonised, and integrated, it becomes Consortium Shared Data. The data includes, amongst other variables, a limited set of indirect identifiers, such as absolute dates and geolocation, required for conducting the RP1/RP2 study analyses.

The data may be transferred between HE²AT Center Consortium members to conduct the RP1/RP2 study analyses. Only the following HE²AT Center Consortium members will have access to the Consortium Shared Data: WHC (South Africa), UCT (South Africa), IBM Research Africa (US), University of Peleforo Gon Coulibaly (Côte d'Ivoire), and CeSHHAR (Zimbabwe). Access may be extended to new partners who join the HE²AT Center Consortium and adhere to the conditions set out in the Consortium Data Sharing Agreement and this Data Management Plan (DMP). The Data Providers will be given written notice of any new member(s) joining the HE²AT Center Consortium.

Unless Data Providers state otherwise in the agreed Data Transfer Agreement (DTA), the HE²AT Center establishes ownership of this Consortium Shared Data and can make decisions regarding data usage at this stage. Where possible, requests from Data Providers for alternative arrangements to those described here will be accommodated. This ownership stems from the Core Data Team having performed significant initial processing, harmonisation, and integration work on the Original Study Data once made available. The Consortium Shared Data is retained indefinitely unless agreed otherwise in the DTA with the Data Provider. Access to the Consortium Shared Data is granted solely for the purposes of the RP1/RP2 studies.

Several steps have been taken to reduce the risk of identifiability. For example, the date of birth will be removed for pregnant or postpartum women in RP1 and for adolescents and adults in RP2. For these groups, age will be reported in years (as a whole number). The date of birth of the infant or of clinical events will be retained in this Consortium Shared Data, as it is required to link climate/weather and areal/geospatial socio-economic data. To minimise the risk of identifiability, geographic data will be jittered or aggregated as described in Section 9: De-identification.

The final data cleaning step is essential for ensuring the quality and reliability of the Consortium Shared Data. During this stage, the Core Data Team reviews the dataset to confirm that all values fall within expected ranges and that the data is free from errors or inconsistencies. Specific provisions for identifying twins and multiple pregnancies are critical for accurate analysis in maternal health studies. Additionally, the Core Data Team works to identify and resolve any duplication errors that may have arisen during the data harmonisation process.

A sanity check ensures data integrity as part of this final cleaning process. This involves cross-referencing the dataset with the original sources and performing logical checks to verify that the data is consistent and accurate. The goal is to confirm that the Consortium Shared Data is ready for analysis and that no significant errors remain.

#### 4.1.4. RP1/RP2 De-identified data

Data that has been further processed and de-identified falls into this category. The HE²AT Center owns this de-identified data. The de-identified data is retained indefinitely unless agreed otherwise in the DTA with the Data Provider. Where possible, requests from Data Providers for an arrangement other than those described here shall be accommodated. Access is granted to External Researchers outside the HE²AT Center Consortium who have met specific conditions and requirements set by the HE²AT Center Data Access Committee. The de-identified data may be harmonised health data, or harmonised health data integrated with climate and other environmental data, depending on available resources and type of data request.

The HE²AT Center will apply the principles of de-identification through two complementary approaches. The Safe Harbour approach, is utilised where feasible, where 18 identifying variables are removed, including all dates, and high-resolution geolocation information. Additionally, the expert determination approach, which relies on an external expert to certify the minimal risk of re-identification, is used in conjunction with, and in certain cases, in lieu of the Safe Harbour approach, where appropriate. This data type is categorised as de-identified data under POPIA, meaning it has been thoroughly de-identified to prevent any reasonable possibility of re-identification. The identifiers in this dataset are limited to health variables without any direct or indirect personal identifiers. For example, age data for pregnant or postpartum women in RP1, and for adolescents and adults in RP2 will be reported in five-year age bands rather than as age whole numbers, and the geographic data will be reported in larger units, such as cities or districts.

#### 4.1.5. Inferential data

The final category is Inferential Data, which is aggregated or synthetic data derived from the analysis of the preceding data categories. The HE²AT Center owns the Inferential Data and will retain this data indefinitely. Inferential Data is made available for open access to support broader research initiatives. Aggregated anonymous and synthetic data are classified as de-identified under POPIA, ensuring that individual privacy is fully protected. Aggregated data contains no individual-level records from Data Subjects and no direct or indirect identifiers, making it impossible to re-identify any individuals. Synthetic data is, by definition, generated in a random manner and possesses only the statistical properties of the underlying data with no link to the individual data points, thus rendering it impossible to re-identify any individuals.

### 4.2. Climate/weather data

Climate and weather data are critical components of the HE²AT Center's research, providing the environmental context for understanding heat exposure and its impact on health outcomes. These data can be broadly categorised into three types:

**Observational data**: This includes data collected from weather stations located at ground level. Observational datasets provide real-time or historical measurements of various meteorological parameters, such as temperature, precipitation, humidity, and wind speed. These datasets are often considered the most accurate for specific locations and serve as the foundation for validating and calibrating other types of climate data. Examples of sources for observational data include national meteorological services and local weather stations.

**Remote sensing data**: These datasets are collected via satellite-based sensors that capture a wide range of environmental variables. Remote sensing allows for large-scale and continuous monitoring of climate variables such as land surface temperature, soil moisture, vegetation condition, and cloud cover. Satellite-derived data offer broader geographic coverage and enable the analysis of areas where ground-based observations are sparse or unavailable. Common remote sensing datasets used include those from satellites like MODIS, Landsat, and the Sentinel missions.

**Re-analysis data**: Re-analysis datasets integrate observational and remote sensing data into numerical models, producing a comprehensive and continuous representation of past and present climate conditions. These models use a combination of historical measurements from weather stations, satellites, and other sources to provide spatially and temporally complete datasets. Re-analysis products are particularly valuable for studying climate trends over time and for filling in gaps in observational records. Examples of widely used re-analysis datasets include ERA5 and MERRA-2.

Each of these data types provides unique insights into the climate variables relevant to the HE²AT Center's research. Together, they allow for comprehensive analyses of heat exposure and its effects on health outcomes in urban environments.

All climate related-data will be accessed through open data repositories, such as the Copernicus Climate Data Store (CDS), Earth System Grid Federation and Sentinel data systems. The data will be stored on IBM Research Africa and CSAG/UCT systems <span style="color: red">**[TRACKED CHANGE] and WHC-managed cloud services with auto-scaling capabilities for handling variable seasonal data volumes and improved accessibility for authorised researchers**</span>, with CSAG/UCT responsible for managing and updating the relevant data indexes. These datasets also follow open data policies, typically requiring citation when used for non-commercial research.

### 4.3. Areal/geospatial socio-economic data

These data represent measures of socio-economic and related conditions, such as household economic status, access to services such as water and sanitation, and dwelling type. Typical sources include national census data and more focused household and demographic survey data.

Socio-economic data will be sourced from open and restricted-access repositories (e.g., South African census data and GCRO Quality of Life Surveys). Primary copies will be indexed and stored on CSAG/UCT data storage. The IBM Research Africa team will acquire and have access to some of the geo-reference Quality of Life survey data from the GCRO and will undertake processing of this data from their own internal computing systems. Outputs and indices calculated from the data by IBM Research Africa will be shared with the rest of the HE²AT Center Consortium through the HE²AT Center's DAC at UCT.

South African census data is already available through the UCT DataFirst data repository. GCRO Quality of Life Survey data is available through the GCRO open data platform, which directs queries to GCRO.

South African census data is aggregated into small areas and does not constitute personally identifiable data. Likewise, GCRO Quality of Life survey data is aggregated to small areas and does not constitute personally identifiable sensitive data.

## 5. Data transfer, and ethics approvals and notification

In alignment with the HE²AT Center's commitment to ethical conduct across all research activities, the ethics approval and notification process, and Data Transfer Agreement (DTA) are essential for securing and maintaining oversight of studies that contribute data to the HE²AT Center Project.

The RP1 and RP2 study activities have been reviewed and approved by the Wits Human Ethics Committee, with Ethics Reference Numbers of 220605 for RP1 and 220606 for RP2. As data from additional studies are received, the HE²AT Center notifies the relevant Ethics Committee of such and notes any concerns with a study, if relevant.

### 5.1. Data Transfer Agreement:

The DTA between each Data Provider and UCT or WHC will outline the terms for transferring and processing health data. Where WHC is the Data Recipient, the Original Study Data is transferred and received from the Data Provider directly by the Core Data Team on UCT Data servers. The DTA must align with applicable national or international health data-sharing legislation. The DTA aims primarily to ensure that the handling, storage, and transfer of data adhere to relevant legislation and ethical standards and protects the rights of study participants and Data Providers.

<span style="color: red">**[TRACKED CHANGE] Data Recipient Role Transition:** As part of the cloud migration implementation, the data recipient role will transition from UCT to WHC during Year 5 of the project. This transition requires:
- **Tripartite Agreement Execution**: A special tripartite agreement must be signed between UCT, WHC, and each Data Provider to formally transfer data recipient responsibilities. This agreement ensures continuity of data protection obligations and maintains compliance with existing DTAs.
- **Data Provider Notification and Consent**: All Data Providers will be formally notified of the recipient role transition and must provide explicit consent for the change in data custodianship before any data transfer to WHC-managed infrastructure occurs.  
- **Legal Continuity**: The tripartite agreement ensures that all existing DTA terms, conditions, and data protection obligations remain in full effect under WHC's custodianship, with no reduction in protection levels. **[END TRACKED CHANGE]**</span>

The Wits Human Research Ethics Committee (HREC) (Medical) is notified of each new study that contributes health data. The HE²AT Center team reviews the consent and ethic approvals of each of the studies that agree to share data. This section below outlines the steps and considerations relating to ethical procedures and these notifications.

### 5.2. Ethics committee notification for new studies:

After the data transfer process has begun, additional steps are required for the ethics committee to monitor compliance with the agreed-upon ethical standards on an ongoing basis. This includes reviewing any concerns the Ethics Committee raises, ensuring that using Original Study Data for the intended analyses remains ethically sound, and appraising progress and any concerns with the study.

Taken together, all the study procedures around ethics ensure that the research activities are conducted ethically, safeguarding participants' rights and maintaining the highest standards of research integrity.

For every new study that contributes data to the HE²AT Center, the Wits Human Research Ethics Committee (HREC) (Medical) will be notified in writing. Notifications detail the study's name, acronym, contact details of the data owners, and relevant ethics approval information, including consent parameters.

Notifications occur on a six-monthly basis in RP1, and in real-time with RP2 given that the studies in RP2 were done at WHC, and all studies had already received approval from the University ethics committee who also serve as the ethics committee for the HE²AT Center (notification template can be found in Annex 2).

## 6. Pre-processing and harmonisation of health data

Data harmonisation is critical for integrating diverse health datasets into a unified format, enabling comprehensive analyses across various data sources.

### 6.1. Pre-processing

The Core Data Team, a small group of named personnel responsible for the initial handling of the Original Study Data, manages the pre-processing stage. This team has exclusive authorisation to access incoming data securely stored on UCT data servers <span style="color: red">**[TRACKED CHANGE] and WHC-managed cloud infrastructure with enhanced security and automated backup systems**</span>. The Core Data Team is responsible for preparing the data for further analysis by other HE²AT Center Consortium members. First, they reformat the Original Study Data into standardised formats, such as CSV or JSON, ensuring compatibility with various tools and systems. This step follows established guidelines like Open Data Standards or the OMOP Common Data Model, which help to promote consistency and interoperability across datasets.

Once the data is in a standardised format, the Core Data Team extracts and labels key variables, ensuring each variable is named and described consistently. They align these variables with ontology frameworks like NCIT, SNOMED CT, or ICD-10, making the metadata easier to integrate with other datasets during the harmonisation process led by the Harmonisation Team Members.

Additionally, the Core Data Team generates synthetic data from the Original Study Data to test data integrity and ensure the harmonisation process can proceed without exposing the real data. This synthetic data simulates the characteristics of the original data, allowing potential recoding or cleaning processes to be tested safely.

Lastly, the Core Data Team reviews key documentation related to the data, such as study protocols and codebooks. This documentation is essential for providing context to the Harmonisation Team Members during later data integration and analysis stages. The Original Study Data is stored with appropriate access controls and the Core Data Team ensures the confidentiality of the data and performs regular backups to a secure, encrypted system.

### 6.2. Variable mapping

Once the pre-processing is completed by the Core Data Team, the Harmonisation Team Members, who are researchers and data scientists from the HE²AT Center Consortium, take responsibility for the next stage: variable mapping. This involves mapping the variables from the Original Study Data to a standardised set of ontologies, such as NCIT, SNOMED CT, or ICD-10.

The Harmonisation Team Members start by working with synthetic data created during the pre-processing stage. This allows them to evaluate the accuracy of the mapping process by identifying where the synthetic data does not align with expected values. The team also relies heavily on metadata and study documentation provided by the Core Data Team during pre-processing. This ensures that they fully understand the variables before mapping them to the appropriate ontology.

To enhance the efficiency of this process, the Harmonisation Team Members use AI tools, such as OpenAI's language models (LLMs), to generate descriptions of variables and suggest mappings to standardised ontologies. These suggestions are then reviewed and refined by the Harmonisation Team Members in collaboration with the Core Data Team to ensure accuracy and alignment with the project's objectives.

Throughout this process, the Harmonisation Team Members document every mapping decision, including the rationale behind their choices. This documentation is essential for transparency and serves as a reference for future users of the data.

### 6.3. Mapping validation

The validation process is led by the Harmonisation Team Members, with close collaboration from the Core Data Team. During this stage, the Harmonisation Team Members revisit the mapped variables and compare them with the original data provided by the Core Data Team to ensure consistency and accuracy. The Core Data Team plays a supportive role, helping to cross-check data integrity and flag any discrepancies or errors that may have arisen during the variable mapping.

An additional layer of review is conducted by a health expert, who assesses whether the mapped variables align with the health ontology frameworks such as SNOMED CT or ICD-10. This expert review is crucial to ensure that the data remains clinically relevant and useful for analysis across the project's research objectives.

After validation by the health expert, the Harmonisation Team Members, in collaboration with the Core Data Team, perform a final check of the mapped data. This thorough review ensures that all mappings are correct and that the data transformations have been applied appropriately. Once these checks are complete, the data is ready for further transformation into De-identified Data if required.

To maintain transparency, all versions of mappings and data transformations are controlled through CSAG's GitLab system. This version control ensures that any changes to the data are documented, and previous versions can be restored if necessary.

### 6.4. Database population

Once mapping and validation are complete, the Core Data Team takes responsibility for transforming the validated data into a harmonised format, ready for broader use by the HE²AT Center Consortium. This stage involves the population of the final database, where the Core Data Team applies the validated mappings and transformations to the Original Study Data, turning it into Consortium Shared Data.

<span style="color: red">**[TRACKED CHANGE] Database population utilises both existing UCT infrastructure and cloud-native database services, providing automated backup and recovery systems with enhanced data integrity and disaster recovery capabilities.**</span>

At this point, additional de-identification steps are taken by the Core Data Team to further anonymise the dataset. Any residual personal identifiers are removed or generalised, with location data being aggregated to broader geographic levels to reduce the risk of re-identification. These steps ensure that the data can be shared safely among consortium members without compromising participant confidentiality.

Once the database is fully populated and de-identified, it is made available to approved HE²AT Center Consortium partners. This database serves as the primary resource for conducting research, allowing for the integration of health, climate, and socio-economic data. The DMAC ensures that all access and use of the database comply with relevant data protection regulations, including POPIA.

### 6.5. RP1/RP2 De-Identified Dataset Creation

The final stage involves creating a de-identified dataset that can be shared with External Bona Fide Researchers. The Core Data Team continues with the de-identification process, ensuring that the dataset meets the highest privacy standards. The Safe Harbour method is supplemented by expert determination, supervised by the Data Access Committee, to ensure that the dataset complies with the HE²AT Center's ethical and legal guidelines. Once these steps are complete, the dataset can be shared under the terms outlined in Section 10.

## 7. Integration and analysis interfaces

### 7.1. Integration of climate and socio-economic variables

Integrating climate and socio-economic variables within the HE²AT Center's data management workflow pulls relevant variables and indices from pre-existing non-health related datasets for the analysis period. The steps involved are as follows:

### 7.2. Sourcing pre-processed data

Climate and socio-economic data are sourced from previously cleaned and harmonised datasets, such as those available through the Climate System Analysis Group (CSAG) at UCT and national data repositories (e.g., census data, GCRO Quality of Life Surveys). These datasets have already undergone rigorous quality checks, reducing the need for extensive pre-processing at this stage.

### 7.3. Automated data retrieval

For climate data, a script-based system automates the retrieval of relevant variables and indices from the CSAG system. These scripts are designed to pull data specific to the analysis period, ensuring the dataset is tailored to the study's needs. The retrieval process may include variables such as temperature, precipitation, humidity, and indices like heat waves or drought conditions.

Similarly, socio-economic data is accessed through predefined queries that extract relevant indicators for the analysis period. These indicators may include household economic status, access to services, and other socio-demographic factors.

### 7.4. Integration into broader dataset

Once retrieved, the climate, socio-economic variables, and health data are integrated into the broader dataset. This integration occurs during the Integration and Analysis step, where the different data types are aligned, based on common temporal and spatial attributes. The integration process is relatively straightforward, leveraging the pre-existing alignment of these datasets to minimise the need for additional harmonisation. Integration requires the use of indirect identifiers in the Consortium Shared Data, in particular geolocation information and dates (e.g. date of birth) in order to align the non-health data temporally and spatially with the health data. These indirect identifiers are not carried through into the de-identified dataset ensuring that it is fully de-identified.

### 7.5. Collaboration with CSAG/UCT

The CSAG team at UCT plays a crucial role in managing and updating the climate data system, ensuring that the variables and indices used in the analysis are up-to-date and relevant. This collaboration aims to ensure that the data retrieval process is seamless and that the analysis is grounded in the latest climate science.

### 7.6. Alignment with analysis objectives

Finally, the integrated dataset is prepared for analysis, with the climate and socio-economic variables aligned to match the study's objectives. This step ensures the data is ready for statistical and modelling exercises exploring the relationships between climate, socio-economic conditions, and health outcomes.

## 8. Data analysis platform

Data analysis involving the Consortium Shared Data and RP1/RP2 de-identified data will be facilitated through the CSAG/UCT Jupyter Hub platform <span style="color: red">**[TRACKED CHANGE] and cloud-based computational resources with GPU acceleration for complex analyses, improved processing times, and enhanced analytical capabilities**</span>, providing robust and scalable environments for processing and analysing the HE²AT Center datasets.

Jupyter Hub is a collaborative, web-based Python coding environment that allows analysts to develop and execute analysis code using a browser interface. Whilst web based, access is controlled through username and password. Key technical details include:

• **Web-Based Platform**: Researchers can access Jupyter Hub securely through a web browser, providing a user-friendly interface for coding and data analysis.

• **Python Environment**: This environment supports the development of analysis code in Python, leveraging a wide range of libraries and frameworks for data science, machine learning, and statistical analysis.

• **CSAG High-Performance Computing (HPC) Integration**: Analysis code executed in Jupyter Hub runs on the CSAG HPC platform, providing high computational power for processing large datasets.

• **Data Accessibility**: Consortium Shared Data, RP1/RP2 de-identified data, climate, and socio-economic datasets stored on CSAG storage servers are directly accessible within the Jupyter Hub environment, allowing seamless data retrieval and manipulation.

• **Collaboration**: Jupyter Hub supports collaborative work, enabling multiple analysts to share and work on the same notebooks, fostering teamwork and knowledge sharing.

## 9. De-identification

Personal information as it pertains to POPIA, can be considered de-identified provided the stipulated de-identification process is undertaken. To 'de-identify', in relation to personal information of a data subject, means to delete any information that—

(a) identifies the data subject;
(b) can be used or manipulated by a reasonably foreseeable method to identify the data subject; or
(c) can be linked by a reasonably foreseeable method to other information that identifies the data subject.

There exists no clear guidance on reasonably foreseeable methods of re-identification, and thus it can be considered that the identifiability of personal data can be considered on a spectrum of risk of re-identification. Although the Original Study Data and Consortium-Shared Data have minimal risk of re-identification, as well as contractual limits on any attempts to re-identify any individuals, we commit to further reducing the risk of re-identification, in accordance with POPIA Section 10, in the context of sharing information outside the Core Data Team when processing the Original Study Data, or the broader HE²AT Center Consortium when producing the RP1/RP2 De-Identified Datasets.

POPIA Section 10 prescribes the principle of "Minimality", which means that only information relevant to the purpose of the study should be processed. Where personal information is acquired that is required to fulfil the research purposes described by the relevant research project protocols, de-identification will be implemented according to the following steps, which are guided by US Department of Human and Health Services (HSS) guidelines and informed by the findings in Zandbergen's 2014 review on geographic masking strategies.

### 9.1. Safe Harbour and/or expert determination

We apply the principles of de-identification through two complementary approaches, for production of the RP1/RP2 de-identified datasets described above. The Safe Harbour approach is utilised where feasible, where 18 identifying variables are removed, including all dates, and high-resolution geolocation information. Additionally, the expert determination approach, which relies on an external expert to certify the minimal risk of re-identification, is used in conjunction with, and in certain cases, in lieu of the Safe Harbour approach, as appropriate. External expert advice and inputs from the Data Access Committee is sought to determine risk of re-identification before sharing with external parties. For example, sensitive dates will be aggregated to calendar years as whole numbers, and ages will be reported in five-year age bands, rather than as whole numbers, to further reduce the risk of re-identification.

### 9.2. Geographic aggregation

Street addresses may be aggregated into larger geographical regions to prevent the derivation of individual residential locations. Population density provides a good guide to the spatial granularity required. For instance, in RP2, where high spatial granularity is necessary to map urban heat-health outcomes, consortium shared data will be aggregated at the level of census small areas or wards with spatial scales of 2 to 5 km which would typically expand the population of potential data subjects into the range of 1000s of individuals.

Larger geographical areas will be used in the aggregation process if an area has a low population density or contains sensitive locations that might make identification easier. For example, in sparsely populated regions, aggregation might occur at a municipal or district level instead of a smaller area like a ward. This ensures that even in areas with fewer individuals, privacy is maintained by preventing identifying any individual within the dataset. The aggregation process will also account for the number of records that map to the same geographical area, adjusting the aggregation level accordingly to ensure privacy is preserved.

### 9.3. Location jittering

Latitude/longitude coordinates may be "jittered" by adding random values to each coordinate to obscure the exact location whilst retaining sufficient geographical information to support analysis. As detailed by Zandbergen (2014), jittering can involve various methods:

**[FIGURE 3 PLACEHOLDER: Geographic Masking Techniques]**
*Insert technical diagrams showing the five masking approaches:*
- *(a) Random Direction and Fixed Radius*
- *(b) Random Perturbation within a Circle*
- *(c) Gaussian Displacement*
- *(d) Donut Masking*
- *(e) Bimodal Gaussian Displacement*
*Each diagram should show the original location point and the masked area/displacement pattern*

One method is Random Direction and Fixed Radius, where points are displaced randomly within a fixed radius around the original location. Another method, Random Perturbation within a Circle, places locations within a circular area with displacement following a uniform or normal distribution. Gaussian Displacement involves random direction but with distances following a Gaussian distribution, adjusted based on local population density. Donut Masking sets minimum and maximum displacement levels, ensuring locations are neither too close nor too far from the original points. Finally, Bimodal Gaussian Displacement is a variation of Gaussian masking, achieving effects similar to donut masking but with less uniform placement probability.

Jittering is applied when finer spatial detail is necessary, but privacy must still be protected, such as RP2, where urban heat-health outcomes are analysed at a high-resolution (e.g., census small areas or wards).

Gaussian displacement jittering is specifically used when more precise geographic information is required, balancing data utility and privacy by adjusting displacement based on population density.

The risk of re-identification will be quantified using spatial k-anonymity metrics, as described by Zandbergen (2014). This involves ensuring that each masked location is indistinguishable from at least k-1 other locations within a specified distance. The displacement required for adequate masking will be inversely proportional to the local population density to maintain high spatial k-anonymity.

### 9.4. Expert review and risk assessment

Geo-location masking/jittering and aggregation techniques will be reviewed through expert determination involving UCT, IBM, and NIH experts. This process will involve assessing the risk of re-identification and ensuring that the applied techniques sufficiently protect participant confidentiality whilst maintaining the integrity of spatial analyses.

In summary, by incorporating these enhanced de-identification techniques, we aim to ensure compliance with POPIA, protect participant privacy, and maintain the data's utility for research purposes.

## 10. Data sharing

According to UCT's Research Data Management Policy, "publicly funded research data are a public good, produced in the public interest, which should be made openly available with as few restrictions as possible in a timely and responsible manner." Data is, therefore, open by default and closed by exception (e.g., privately funded research or research with commercialisation possibilities).

### 10.1. Restrictions to Data Sharing

According to Section 4.6 of the UCT Research Data Management policy: "[n]ecessary constraints on the availability of data include the protection of personal data; the protection of intellectual property; the protection of commercial interests of project partners; and security concerns."

### 10.2. Discoverability

The HE²AT Center and DMAC will implement FAIR principles to ensure that:

• **Findability**: Data will be discoverable through publicly accessible and searchable metadata indexes. The DS-I Africa ODSP and UCT's ZivaHub repository both offer platforms for metadata searching.

• **Accessibility**: De-Identified data will be accessible via a data access request to the DAC, which, if approved, will require a Data Transfer Agreement.

• **Interoperability**: Adherence to established data and metadata standards will ensure data interoperability (as outlined earlier in the document).

• **Reusability**: Rigorous data documentation will support reuse, including limitations and guidance for responsible reuse.

### 10.3. Levels of Data Access

The HE²AT Center categorises data into distinct access levels, each governed by specific rules and protocols to ensure protection and ethical use throughout the data lifecycle. These access levels include, in summary (see section above for more details):

1. **Original Study Data**: Raw, unprocessed health data collected directly from cohort studies and clinical trials. Access is restricted to authorised personnel in the Core Data Team and retained for five years following the HE²AT Center Project completion. A Data Provider may elect to terminate the DTA at any point and request data to be returned or destroyed.

2. **Consortium Shared Data**: Data that has undergone initial processing, harmonisation and integration, shared amongst the HE²AT Center Consortium. This data has been significantly altered, including applying privacy protections like initial de-identification in accordance with the principle of minimality.

3. **RP1/RP2 De-identified Data**: Data that has been further processed and de-identified to prevent re-identification. Available to External Researchers under conditions set by the Data Access Committee (DAC), this data adheres to strict privacy guidelines.

4. **Inferential Data**: Aggregated and anonymised data derived from analyses. This data is made available for open access and has no direct or indirect identifiers, ensuring complete confidentiality.

### 10.4. Procedure for Making RP1/RP2 De-identified Data Available to Bona Fide Researchers

The procedures for making RP1/RP2 De-identified Data available to qualifying External Researchers are outlined below. These procedures ensure compliance with ethical, legal, and scientific standards, whilst maintaining data integrity and security.

Detailed governance and oversight of these procedures, including DAC responsibilities, are covered in Annex 4, which contains the full terms of reference for the DAC.

1. **The Data Access Request Form**: This form must be completed by those requesting access to RP1/RP2 De-identified Data and includes:
   - Applicant Information: Details about the applicant and their institution, including name, address, and the nature of the research activities.
   - Consortium Membership Status: Indication of whether the applicant is a member of the DSI-Africa Consortium. Non-members must provide detailed information about their organisational affiliation.
   - Dataset Identification: Specification of the datasets for which access is sought.
   - Research Purpose: A proposal outlining the intended research, including objectives and significance.
   - Data Sharing Modality Preference: Specification of whether data access is sought through download, with a justification based on the research and data sensitivity.
   - Ethics Approval: Proof of ethics approval from the applicant's institutional ethics committee.
   - Data Protection Measures: A detailed description of statutory, organisational, and technical measures in place at the receiving institution to safeguard the security of the data.

2. **Preliminary Screening**: Upon submission of the Data Request Form, the request undergoes preliminary screening by the HE²AT Center SteerCo to confirm completeness and basic compliance with the HE²AT Center Consortium's requirements as well as resources available in the HEAT Center for preparing the De-Identified database.

3. **Review by Data Access Committee**: The DAC evaluates the request based on criteria such as potential privacy risks, and the avoidance of overlap with ongoing research. The full governance procedures are detailed in Annexe 4.

4. **Recording and Communication of Decision**: The DAC records the reasons for its decision (approval, conditional approval, or denial). This documentation ensures transparency and provides valuable feedback to applicants. Approved requests will include detailed instructions for accessing the data and any conditions the applicant must meet.

5. **Data Transfer**: The data will be transferred upon approval and fulfilment of all conditions, including ethics approval.

6. **Ongoing Monitoring**: The DAC will continue to monitor compliance with the terms of the Data Transfer Agreement, including periodic reviews and audits, if necessary.

## 11. POPIA compliance and protection of personal information

The use of health datasets requires careful consideration of data security and confidentiality, guided by relevant legislation specific to each dataset, including country-specific laws on personal/sensitive data and cross-border data transfer. The DMAC manages the development and negotiation of these DTAs in conjunction with research projects, as they are the primary interfaces with the data sources.

The Protection of Personal Information Act (POPIA) of South Africa (2013) regulates the processing of personal information, providing a legal basis for its use in scientific research. POPIA works alongside other South African legislation, such as the Constitution, the National Health Act No. 61 of 2003, and the Department of Health guidelines on Ethics in Health Research (2015). The law offering the most comprehensive protection for individuals' rights takes precedence.

POPIA's Section 6 states that the Act does not apply if personal information has been de-identified to the extent that re-identification is virtually impossible. Many health databases for the HE²AT Project will meet this criterion. For those that do not, the following sections of POPIA provide a basis for processing health data:

• **Section 10 (Minimality)**: Personal information may only be processed if it is adequate, relevant, and not excessive for the purpose of the research.

• **Section 15(1) (Further Processing)**: Further processing of personal information must be aligned with the purpose of its collection.

• **Section 15(3)(e) (Research Exception)**: Allows processing for historical, statistical, and research purposes, regardless of the original purpose of collection. This is crucial for HE²AT, as health datasets were collected before the project began.

• **Section 18(1) (Notification)**: Requires informing data subjects about the processing of their personal information.

• **Section 18(4)(f) (Research Exception)**: Provides an exemption for informing data subjects if the information is used for historical, statistical, or research purposes.

• **Section 14(2) (Retention of Records)**: Allows retention of personal information for research as long as safeguards prevent its use for other purposes.

• **Section 16 (Information Quality)**: Mandates reasonable measures to maintain the accuracy and quality of the data.

• **Section 17 (Documentation)**: Requires clear documentation of all processing activities.

• **Section 19 (Security Safeguards)**: Requires security measures to prevent unlawful access to or processing of personal information.

• **Section 20 (Processing by Operators)**: Specifies requirements for individuals processing personal information. This includes maintaining a continually updated list of authorised personnel with restricted access to personal information through passwords and other security measures.

• **Section 21 (Operator Contracts)**: Requires a written contract between the responsible party and operators implementing processing. This contract mandates that operators inform the responsible party if unauthorised access to personal information is suspected.

<span style="color: red">**[TRACKED CHANGE] Human Subjects Study Classification:** The HE²AT Center project has been reclassified as a "human subjects study" by the NIH. This reclassification introduces additional legal and ethical requirements that supplement existing POPIA compliance measures:

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

The transition to human subjects study classification ensures the highest levels of participant protection whilst maintaining the research integrity and scientific value of the HE²AT Center project. **[END TRACKED CHANGE]**</span>

## 12. Governance and compliance

The HE²AT Center has established a comprehensive governance and compliance framework to ensure that all data management activities adhere to ethical standards, legal requirements, and best practices. This framework is designed to protect participant privacy, ensure data quality, and facilitate responsible data sharing within the Consortium and beyond.

### 12.1. Data Governance

Data governance within the HE²AT Center involves various activities that ensure the responsible management of data. This includes the ethical oversight of data collection, establishing protocols for data sharing, and ensuring that data access is aligned with the research objectives of the DS-I Africa Consortium. The governance framework emphasises transparency, accountability, and compliance with relevant regulations, such as POPIA.

### 12.2. Data Indexing and Metadata Management

Effective governance also includes a robust system for data indexing and metadata management, ensuring that datasets are discoverable and accessible to the HE²AT Center Consortium and External Researchers. The indexing process includes:

1. **Metadata Standards**
   - eLwazi Integration: Data shared outside the HE²AT Consortium utilises the eLwazi platform, ensuring compliance with broader data-sharing protocols.
   - Data Reference Syntax (DRS): Implemented by CSAG, the DRS provides structured mapping from metadata elements to directory and file naming syntax, standardising climate and remote sensing datasets.
   - Health Data Indexing: Health data is indexed using a codebook with relevant ontologies, ensuring consistency and discoverability.

2. **Documentation and Integration**
   - CSAG GitLab Wiki: The DRS is documented on the CSAG GitLab Wiki, ensuring consistency and serving as a guide for indexing processes.
   - DSI-Africa Open Data Science Platform (ODSP): Integration with the ODSP metadata index ensures that metadata propagates to the ODSP system, making datasets discoverable through metadata queries.

### 12.3. Data Access Committee

The DAC is an independent committee that plays a central role in the governance of data sharing. The committee's responsibilities include evaluating data access requests and overseeing DTAs that are signed between the HEAT Center Consortium (Data Provider) and the Bona Fide External Researcher (Data Recipient) to ensure compliance with legal and ethical standards. The DTA will outline the terms for data use, confidentiality, and compliance with relevant laws and guidelines. The agreement will also prohibit the on-sharing of data, without explicit DAC approval.

**12.3.1 Review Process**

**Submission**: Data requests must be submitted using a standardised form that details the project objectives, required data, resource implications and ethical approvals. The form must be complete before the request will be considered. This form is included in Annex 5 of the DMP.

**Preliminary Screening**: All requests will undergo preliminary screening by the HEAT Center SteerCo to confirm completeness of Data Access Requests forms.

**Evaluation of data request**: The DAC will evaluate requests based on criteria such as research credentials of the applicants (only applications from bona fide researchers will be considered), scientific merit, feasibility, potential privacy risks, resources available in the HEAT Center for preparing the De-Identified database, the avoidance of overlap with ongoing research, potential public health impact, and adherence to ethical and legal standards outlined in the application.

**12.3.2 Membership of the DAC**

The DAC will comprise of independent experts who may include Ethics Committee members, representatives from the DS-I Africa ELSI team or the eLwazi platform and people with expertise in data science, ethics, and legal matters. The HEAT Center Scientific Advisory Board and the HEAT Center SteerCo will select the members of the DAC.

For a more detailed description of the roles, responsibilities and specific procedures relating to the DAC, refer to Annex 4: Terms of Reference for the DAC.

## 13. Data retention

Participant data will be retained according to the following guidelines, ensuring compliance with the Protection of Personal Information Act (POPIA) and maximising its utility for future research:

### 13.1. Retention Periods:

• **Original Study Data**: Retained for at least five years after the completion of the HE²AT Center Project. This includes raw, unprocessed data from cohort studies and clinical trials. The Data Provider may elect to terminate the DTA prior to the completion of the HE²AT Project. On early termination of the DTA, the HEAT Center will immediately discontinue use of the Original Study Data and depending on the Data Provider's instructions, either return all copies of the data to the Data Provider, destroy all copies of the Original Study Data, or deal with the Original Study Data in any other manner, as requested by the Data Provider.

• **Consortium Shared Data**: Depending on the agreements in place, this data may be retained indefinitely.

• **RP1/RP2 De-Identified Data**: Depending on the agreements in place, this data may be retained indefinitely.

• **Inferential Data**: This is retained indefinitely. It includes aggregated and synthetic data derived from the analysis of the other data categories.

### 13.2. Ongoing Monitoring of Data Transfer Agreements

After executing a Data Transfer Agreement (DTA), ongoing monitoring, including periodic reviews and audits if necessary, ensures compliance with the agreement's terms.

## 14. Restricted data access

To safeguard personal information, the HE²AT Center implements robust encryption and security measures:

### 14.1. Data transfer, storage and encryption

Data is transferred using Transport Layer Security (TLS) protocols are employed during transmission to maintain encryption and prevent interception. We use WeTransfer modality, which is encrypted. Once transferred to UCT <span style="color: red">**[TRACKED CHANGE] and WHC-managed cloud infrastructure**</span>, any data identified as containing Personal Identifiers or specified by the DTA is encrypted for storage using <span style="color: red">**[TRACKED CHANGE] AES-256 encryption standard for both UCT servers and cloud storage**</span>. The AES-256 encryption standard is applied, with encryption key access restricted to authorised personnel by Clause 2.10 of the Data Transfer Agreement, ensuring that the Data Recipient does not attempt to re-identify any Data Subjects. This complies with privacy and data protection legislation, including the Protection of Personal Information Act (POPIA). Metadata, however, is stored separately to facilitate indexing and software development whilst maintaining security.

### 14.2. Network security

The CSAG compute infrastructure benefits from UCT's comprehensive security policies <span style="color: red">**[TRACKED CHANGE] and WHC-managed cloud security architecture with 24/7 Security Operations Centre (SOC) monitoring and advanced threat detection systems for improved security posture and compliance**</span>. Key measures include:

• **Firewall Protection**: UCT's Cisco firewall <span style="color: red">**[TRACKED CHANGE] and cloud-native firewall services**</span> safeguard against external threats, ensuring only authorised access is permitted.

• **VPN Access**: A Cisco VPN service encrypts all traffic, enabling secure remote access to the UCT intranet and maintaining confidentiality.

• **Access Control**: Access to CSAG servers and services is carefully managed, with strict limits on authorised users.

### 14.3. Local authentication and authorisation

Beyond UCT's broader security measures, the CSAG/UCT platform employs additional authentication and authorisation protocols <span style="color: red">**[TRACKED CHANGE] alongside cloud-specific access controls and automated compliance reporting for streamlined governance oversight**</span>. User identities are verified through a Linux filesystem and Lightweight Directory Access Protocol (LDAP), with access to restricted datasets managed through UCT's authentication protocols and internal CSAG Data Management Plan mechanisms. All activities comply with UCT's information security policies, ensuring adherence to institutional standards.

By implementing these comprehensive encryption modalities, network security and authentication measures, the HE²AT Center ensures the protection and confidentiality of sensitive data throughout its lifecycle, maintaining compliance with ethical and legal standards.

## 15. Roles and responsibilities

The table below details the various roles and responsibilities associated with the data management plan and who is currently associated with each, their institution, and contact details. Personnel may change over time.

| Role and responsibilities | People | Contact |
|---------------------------|---------|---------|
| **DMAC PIs** | Christopher Jack (UCT) | cjack@csag.uct.ac.za |
| | Sibusisiwe Makhanya (IBM) | sibusisiwe.makhanya@ibm.com |
| Responsible for ongoing (quarterly) assessment of data management and changes to the data management plan (annual). | | |
| **Health Data Acquisition** | Craig Parker for RP2 (Wits PHR) | Craig.parker@witsphr.org |
| | Stanley Luchters for RP1 (CeSHHAR) | stanley.luchters@ceshhar.co.zw |
| Identification of relevant health datasets, coordination, and development of the DTA. | | |
| **Data Processing and Harmonisation: Core Data Team** | Lisa van Aardenne (UCT) | lisa@csag.uct.ac.za |
| | Pierre Kloppers (UCT) | pierre@csag.uct.ac.za |
| De-identification, quality control, remapping, harmonisation, and integration of all datasets. | Piotr Wolski (UCT) | wolski@csag.uct.ac.za |
| | Peter Marsh (UCT) | Peter.marsh@uct.ac.za |
| Note: Only these individuals have access to encryption keys for original sensitive data. | Nicholas Brink (Wits PHR) | nicholas.brink@witsphr.org |
| | Craig Parker (Wits PHR) | Craig.parker@witsphr.org |
| **Harmonisation Team Members** | Members of the Core Data Team and additional researchers from the consortium are working on harmonisation and integration tasks. | Same as Core Data Team contacts plus additional members where needed |
| Access to metadata and synthetic health datasets for mapping on JupyterHub only. | | |
| **Managing Access to the UCT Data Analysis Platform** | Rodger Duffett (UCT) | rodger@csag.uct.ac.za |
| **Managing Access to the IBM Platform** | Sibusisiwe Makhanya (IBM) | sibusisiwe.makhanya@ibm.com |

## 16. Assessment and revision of the Data Management Plan

The Data Management and Analysis Core (DMAC) co-Principal Investigators (co-PIs) will conduct periodic reassessments of the Data Management Plan (DMP) in consultation with the HE²AT Center Steering Committee (SC), including the leads of Research Project 1 (RP1) and Research Project 2 (RP2). The SC may request assessment and review of specific aspects of the plan. These assessments will occur at least every six months to ensure the plan remains effective and up-to-date.

### 16.1. Assessment scope

The reassessment will focus on three key aspects of the data management plan:

1. **Data Process Efficiency**:
   - Workflow Evaluation: Assess whether the data processing workflow is functioning effectively and producing data ready for analysis. This includes evaluating each step, from data acquisition and harmonisation to storage and indexing.
   - Error Identification and Resolution: Identify any issues or bottlenecks in the current workflow and propose solutions to enhance efficiency and data quality.

2. **Compliance and Security**:
   - Compliance Check: Ensure that all data management activities comply with relevant legal and ethical standards, including POPIA and the DSI-Africa Data Sharing Guideline guidelines.
   - Security Measures: Review and update data security measures to protect personally identifiable information and ensure the integrity and confidentiality of the data.

3. **Usability and Accessibility**:
   - Data Accessibility: Evaluate whether the data is easily accessible to authorised users, including partner researchers and members of the HE²AT Center.
   - Usability for Analysis: Ensure that the data is in a usable format for analysis, with appropriate metadata and documentation to support effective use by researchers.

### 16.2. Revision process

Based on the findings from the assessment, the DMAC co-PIs will propose revisions to the Data Management Plan. The proposed revisions will undergo the following process:

1. **Proposal Development**:
   - The DMAC co-PIs will draft detailed proposals for necessary updates and changes to the DMP, addressing any identified issues and incorporating feedback from the assessment.

2. **Review and Approval**:
   - The proposed revisions will be presented to the HE²AT Center Steering Committee (SC).
   - The SC, including the RP1 and RP2 leads, will evaluate the proposed changes and provide their approval or request further modifications as needed.
   - <span style="color: red">**[TRACKED CHANGE]** Additional legal and compliance review will be conducted by Jessica Senekal (UCT legal counsel) and Este's replacement (WHC legal representative) to ensure all changes maintain legal compliance and align with institutional obligations before final approval. **[END TRACKED CHANGE]**</span>

3. **Implementation**:
   - Upon approval, the DMAC team will implement the revised Data Management Plan.
   - All relevant stakeholders will be informed of the changes, and any necessary training or guidance will be provided to ensure smooth implementation.

By conducting regular assessments and making necessary revisions, the HE²AT Center ensures that the Data Management Plan remains robust, effective, and aligned with best data management and analysis practices.

## 17. Cloud Migration Implementation

<span style="color: red">**[TRACKED CHANGE - NEW SECTION]**</span>

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
- <span style="color: red">**[TRACKED CHANGE]** Explicit migration deadline of June 2026 for complete transfer of all health data from UCT systems to WHC-managed cloud infrastructure, ensuring Year 5 transitional period completion **[END TRACKED CHANGE]**</span>
- Comprehensive backup and recovery procedures for both UCT and cloud systems
- Regular security assessments and penetration testing
- Staff training on new cloud-based procedures

**Monitoring and Oversight:**
- Continuous monitoring and incident response protocols
- Regular assessment of cloud performance and security
- Ongoing cost monitoring and optimisation
- Quarterly reviews of migration progress and outcomes

The migration to WHC-managed cloud infrastructure represents a significant enhancement to the HE²AT Center's data management capabilities, ensuring improved security, scalability, and operational efficiency whilst maintaining full compliance with regulatory requirements and research best practices.

## 18. Data Sharing Agreement Alignment

<span style="color: red">**[TRACKED CHANGE - NEW SECTION]**</span>

<span style="color: red">**[TRACKED CHANGE]** The HE²AT Center maintains a complex ecosystem of data sharing agreements that must remain aligned and consistent throughout the project lifecycle. This section outlines the coordination requirements and procedures for maintaining agreement coherence.

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

The coordinated management of all data sharing agreements ensures legal consistency, participant protection, and operational efficiency throughout the HE²AT Center project lifecycle. **[END TRACKED CHANGE]**</span>

## 19. Data Custodian Transition

<span style="color: red">**[TRACKED CHANGE - NEW SECTION]**</span>

<span style="color: red">**[TRACKED CHANGE]** As part of the cloud migration strategy, the data custodian role will transition from UCT to WHC during Year 5 of the project. This section outlines the procedures, requirements, and contingency measures for this critical transition.

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

The data custodian transition ensures enhanced data management capabilities while maintaining the highest standards of data protection, legal compliance, and respect for Data Provider preferences. **[END TRACKED CHANGE]**</span>

## 20. Post-Project Data Management

<span style="color: red">**[TRACKED CHANGE - NEW SECTION]**</span>

<span style="color: red">**[TRACKED CHANGE]** This section outlines data management procedures and responsibilities following the completion of the HE²AT Center project in 2026, addressing both project continuation and termination scenarios.

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

The post-project data management framework ensures continuity of data protection, research value, and stakeholder rights regardless of project continuation or completion scenarios. **[END TRACKED CHANGE]**</span>

## 21. Interim Data Access Restrictions

<span style="color: red">**[TRACKED CHANGE - NEW SECTION]**</span>

<span style="color: red">**[TRACKED CHANGE]** During the transition to human subjects study classification and cloud migration implementation, certain interim restrictions on health data access are required to ensure compliance and participant protection.

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

The interim data access restrictions ensure full compliance with regulatory requirements whilst minimising disruption to research objectives and maintaining stakeholder confidence in data protection measures. **[END TRACKED CHANGE]**</span>

## Annexes

### Annex 1: Key data sources

| **Data type** | **Dataset** | **Data owner/provider** | **Variables** | **Spatial coverage** | **Temporal coverage** | **Intended use** |
|---------------|-------------|-------------------------|---------------|---------------------|---------------------|------------------|
| **Climate data** | ERA5 Reanalysis | ECMWF/Copernicus Climate Data Store | Temperature, precipitation, humidity, wind, pressure | Global, 0.25° resolution | 1940-present | Historical climate analysis, exposure assessment |
| | CORDEX Africa Simulations | CORDEX/WCRP | Temperature, precipitation projections | Africa, 0.44° resolution | Historical + future scenarios | Climate change projections |
| | MODIS Land Surface Temperature | NASA/USGS | Day/night land surface temperature | Global, 1km resolution | 2000-present | Urban heat island analysis |
| | Sentinel 2 Imagery | ESA/Copernicus | Multispectral imagery, NDVI | Global, 10-60m resolution | 2015-present | Land use/land cover analysis |
| | Weather Station Data | National meteorological services | Temperature, precipitation, humidity | Point observations | Variable by location | Ground truth validation |
| **Socio-economic data** | GCRO Quality of Life Survey | Gauteng City-Region Observatory | Household income, access to services, dwelling type | Gauteng Province, SA | 2009, 2011, 2013, 2015, 2017 | Urban vulnerability assessment |
| | Statistics South Africa Census | Statistics South Africa | Demographics, housing, employment | South Africa, ward level | 2001, 2011, 2016 community survey | Population characteristics |
| | WorldPop Population Density | WorldPop/University of Southampton | Population counts and density | Global, 100m resolution | 2000-2020 | Population exposure analysis |
| | OpenStreetMap | OpenStreetMap Foundation | Road networks, building footprints | Global, variable resolution | Continuously updated | Urban infrastructure analysis |
| **Health data** | Study-specific datasets | Various research institutions | Maternal health, child health, morbidity | Study-specific locations | Variable by study | Heat-health impact analysis |
| | Hospital admission records | Healthcare facilities | Diagnoses, admission dates, demographics | Urban areas in study cities | Variable by facility | Health outcome validation |

### Annex 2: Personal information processing agreement

**PERSONAL INFORMATION PROCESSING AGREEMENT FOR HE²AT CENTER OPERATORS**

This agreement must be signed by all individuals who will have access to personal information as part of the HE²AT Center Data Management activities, in compliance with the Protection of Personal Information Act (POPIA) of South Africa.

**OPERATOR INFORMATION:**
- Name: ________________________________
- Institution: ___________________________
- Role in HE²AT Center: ___________________
- Date: ________________________________

**AGREEMENT TERMS:**

**1. SCOPE OF ACCESS**
I acknowledge that I will have access to personal information as defined under POPIA, including but not limited to health data, demographic information, and potentially identifiable information collected as part of HE²AT Center research activities.

**2. PROCESSING OBLIGATIONS**
I agree to:
- Process personal information only for the specified research purposes of the HE²AT Center
- Implement appropriate security measures to protect personal information
- Not attempt to re-identify any de-identified data
- Report any suspected unauthorized access immediately to the responsible party
- Maintain confidentiality of all personal information

**3. SECURITY MEASURES**
I commit to:
- Using secure passwords and authentication methods
- Accessing data only from authorized systems and locations
- Not sharing access credentials with unauthorized persons
- Following all technical and organizational security protocols established by the HE²AT Center

**4. DATA SHARING RESTRICTIONS**
I understand that:
- Personal information may not be shared with unauthorized parties
- Any data sharing must be approved through the Data Access Committee
- Cross-border data transfers must comply with applicable regulations
- Data must be used only for approved research purposes

**5. RETENTION AND DISPOSAL**
I agree to:
- Retain personal information only for the authorized period
- Securely delete or return data as instructed by the responsible party
- Not retain copies of data beyond the authorized period

**6. COMPLIANCE MONITORING**
I acknowledge that:
- My access and use of data may be monitored and audited
- I must cooperate with compliance reviews and investigations
- Violations may result in access termination and legal consequences

**7. NOTIFICATION OBLIGATIONS**
I will immediately notify the HE²AT Center Data Management team of:
- Any suspected data breaches or unauthorized access
- Changes in my employment or role that affect data access needs
- Any concerns about data security or compliance

**SIGNATURE:**
Operator Signature: ___________________________ Date: ___________
Print Name: ___________________________

**RESPONSIBLE PARTY APPROVAL:**
Authorized Representative: ___________________________ Date: ___________
Print Name and Title: ___________________________

### Annex 3: Ethics notification letter template

**UNIVERSITY OF THE WITWATERSRAND HUMAN RESEARCH ETHICS COMMITTEE (MEDICAL)**

**NOTIFICATION OF NEW STUDY DATA CONTRIBUTION TO HE²AT CENTER**

**Date:** [Insert Date]

**To:** Wits Human Research Ethics Committee (Medical)

**From:** HE²AT Center Data Management Team

**Re:** Notification of New Study Contributing Data to HE²AT Center Research

---

**STUDY DETAILS:**

**Study Name:** [Full study name]

**Study Acronym:** [If applicable]

**Principal Investigator:** [Name and affiliation]

**Contact Information:** 
- Email: [PI email address]
- Phone: [PI phone number]
- Institution: [Institution name and address]

**Data Owner/Provider:** [Name and institution of data owner]

---

**ETHICS APPROVAL INFORMATION:**

**Original Ethics Committee:** [Name of ethics committee that approved the study]

**Ethics Reference Number:** [Original ethics approval number]

**Approval Date:** [Date of original ethics approval]

**Study Population:** [Description of study participants]

**Data Collection Period:** [Start date - End date]

---

**CONSENT PARAMETERS:**

**Consent Type:** [Description of consent obtained from participants]

**Consent for Secondary Use:** [Yes/No - details of consent for data sharing/secondary analysis]

**Geographical Scope of Consent:** [Local/National/International data sharing permissions]

**Data Sharing Provisions:** [Specific provisions in original consent regarding data sharing]

---

**HE²AT CENTER INTEGRATION:**

**Planned Use in HE²AT Center:** [Brief description of how data will be used in RP1/RP2]

**De-identification Level:** [Description of de-identification procedures to be applied]

**Data Categories:** [Original Study Data/Consortium Shared Data/De-identified Data]

**Integration Timeline:** [Expected timeline for data processing and integration]

---

**COMPLIANCE MEASURES:**

**Data Transfer Agreement Status:** [Signed/In Progress/Pending]

**POPIA Compliance:** [Description of compliance measures]

**Security Measures:** [Brief description of data security protocols]

**Access Restrictions:** [Description of who will have access to the data]

---

**CONCERNS OR ISSUES:**

[Any specific concerns, limitations, or issues identified with the study data or ethics approvals]

---

**ATTACHMENTS:**

□ Copy of original ethics approval letter
□ Copy of study protocol (if available)
□ Copy of informed consent form
□ Data Transfer Agreement
□ Other: [Specify]

---

**CONTACT FOR QUERIES:**

**HE²AT Center Data Management Lead:**
- Name: [Contact name]
- Email: [Contact email]
- Phone: [Contact phone]

**Signature:**

_________________________
[Name and Title]
HE²AT Center Data Management Team

Date: ___________

---

*This notification is submitted in accordance with HE²AT Center ethics procedures and the ongoing monitoring requirements of the Wits Human Research Ethics Committee (Medical).*

### Annex 4: Data Access Committee Terms of Reference

**HE²AT CENTER DATA ACCESS COMMITTEE**
**TERMS OF REFERENCE**

---

**1. PURPOSE AND SCOPE**

**1.1 Purpose**
The HE²AT Center Data Access Committee (DAC) is established to provide independent oversight of data access requests for de-identified datasets produced by the HE²AT Center. The DAC ensures that data sharing complies with ethical, legal, and scientific standards whilst facilitating legitimate research that advances knowledge in heat-health relationships and climate change impacts on health.

**1.2 Scope of Authority**
The DAC has authority to:
- Review and approve/deny requests for access to RP1/RP2 de-identified datasets
- Establish criteria and procedures for data access evaluation
- Monitor compliance with data transfer agreements
- Recommend modifications to data sharing policies and procedures
- Oversee the ethical and scientific standards of data sharing activities

---

**2. MEMBERSHIP**

**2.1 Composition**
The DAC shall comprise 5-7 members including:
- Chair (independent expert in data ethics or health research ethics)
- At least one member with expertise in data science and health informatics
- At least one member with legal expertise in data protection and privacy law
- At least one member from the DS-I Africa ELSI team or eLwazi platform
- At least one member with expertise in climate-health research
- At least one member representing community or public interest perspectives
- Ex-officio: HE²AT Center DMAC representative (non-voting)

**2.2 Selection Process**
- DAC members are appointed by the HE²AT Center Steering Committee in consultation with the Scientific Advisory Board
- Members serve staggered terms of 3 years, renewable once
- The Chair is elected by DAC members for a 2-year term
- Members must declare any conflicts of interest and recuse themselves from relevant decisions

**2.3 Independence**
- DAC operates independently from the HE²AT Center research activities
- Members are not directly involved in HE²AT Center data collection or analysis
- Decisions are made by majority vote of voting members
- Appeal processes are available for disputed decisions

---

**3. RESPONSIBILITIES AND PROCEDURES**

**3.1 Data Access Review Process**

**Step 1: Application Receipt and Screening**
- Applications received through standardized Data Request Form (Annex 5)
- Preliminary screening by HE²AT Center Steering Committee for completeness
- Distribution to DAC members within 5 working days of complete submission

**Step 2: Initial Review**
- Each application assigned to primary and secondary reviewers
- Initial review period: 15 working days
- Reviewers assess against established criteria (Section 3.2)
- Reviewers may request additional information from applicants

**Step 3: DAC Meeting and Decision**
- Monthly DAC meetings (or as needed for urgent requests)
- Discussion of applications with reviewer recommendations
- Decision options: Approve, Conditional Approval, Deny, Request Revision
- Written decision with rationale provided within 5 working days of meeting

**Step 4: Implementation**
- Approved applications proceed to data transfer agreement execution
- Conditional approvals specify requirements to be met before data access
- Denied applications receive detailed explanation and appeal options

**3.2 Evaluation Criteria**

Applications are evaluated based on:

**Scientific Merit**
- Research question significance and innovation
- Methodological soundness and feasibility
- Potential contribution to heat-health knowledge
- Complementarity with existing research (avoid duplication)

**Researcher Qualifications**
- Evidence of bona fide researcher status
- Relevant expertise and track record
- Institutional affiliation and support
- Previous compliance with data sharing agreements

**Ethical and Legal Compliance**
- Institutional ethics approval for proposed research
- Compliance with applicable data protection regulations
- Appropriate consent and authorization frameworks
- Data security and confidentiality measures at receiving institution

**Technical Feasibility**
- Available resources in HE²AT Center for data preparation
- Technical compatibility and data processing capabilities
- Timeline feasibility and resource requirements

**Public Benefit**
- Potential public health impact and knowledge advancement
- Alignment with HE²AT Center objectives and DS-I Africa goals
- Contribution to capacity building in African research institutions

---

**4. GOVERNANCE AND OPERATIONS**

**4.1 Meeting Schedule**
- Regular monthly meetings (virtual or in-person)
- Special meetings convened as needed for urgent requests
- Annual face-to-face meeting for strategic planning and policy review
- Quorum: At least 60% of voting members

**4.2 Documentation and Reporting**
- Meeting minutes maintained for all DAC meetings
- Decision register tracking all applications and outcomes
- Annual report to HE²AT Center Steering Committee and Scientific Advisory Board
- Regular review of decision patterns and policy effectiveness

**4.3 Confidentiality**
- All DAC members bound by confidentiality agreements
- Application details and deliberations remain confidential
- Public reporting focuses on aggregate statistics and policy matters

**4.4 Appeals Process**
- Applicants may appeal denied or conditional decisions
- Appeals reviewed by independent panel (not involved in original decision)
- Appeal process completed within 30 working days
- Final appeal decisions are binding

---

**5. MONITORING AND COMPLIANCE**

**5.1 Ongoing Monitoring**
- Regular review of data transfer agreement compliance
- Annual surveys of data recipients regarding data use and outcomes
- Monitoring of publications and outputs using HE²AT Center data
- Investigation of reported compliance violations

**5.2 Compliance Enforcement**
- Warning notices for minor violations
- Suspension of data access for serious violations
- Termination of data access for severe or repeated violations
- Referral to institutional authorities for misconduct

**5.3 Policy Review and Updates**
- Annual review of DAC procedures and criteria
- Regular consultation with HE²AT Center stakeholders
- Updates to reflect changes in regulations, technology, and best practices
- Coordination with DS-I Africa data sharing guidelines

---

**6. RESOURCES AND SUPPORT**

**6.1 Administrative Support**
- Secretariat support provided by HE²AT Center DMAC
- Technical support for data preparation and transfer
- Legal support for data transfer agreement development

**6.2 Training and Development**
- Regular training on data protection regulations and ethical frameworks
- Updates on technological developments and best practices
- Networking with other data access committees and oversight bodies

---

**APPROVAL AND IMPLEMENTATION**

These Terms of Reference are approved by the HE²AT Center Steering Committee and come into effect immediately. They will be reviewed annually and updated as necessary to ensure effective governance of data access activities.

**Date of Approval:** [Insert Date]

**Approved by:**
- HE²AT Center Steering Committee Chair: _______________
- Scientific Advisory Board Representative: _______________
- DMAC Co-Principal Investigators: _______________

### Annex 5: Data Request Form

**HE²AT CENTER DATA ACCESS REQUEST FORM**

**Instructions:** Please complete all sections of this form. Incomplete applications will not be reviewed. Submit this form electronically to the HE²AT Center Data Access Committee at [email address].

---

**SECTION A: APPLICANT INFORMATION**

**A1. Primary Applicant Details**
- Full Name: ________________________________
- Title/Position: ____________________________
- Institution/Organization: ___________________
- Department: _______________________________
- Complete Address: __________________________
  _________________________________________
- Email: ___________________________________
- Phone: ___________________________________
- ORCID ID: _________________________________

**A2. Co-Applicants/Collaborators**
[For each co-applicant, provide name, institution, and role in the project]

Co-Applicant 1:
- Name: ____________________________________
- Institution: ______________________________
- Role: ____________________________________

Co-Applicant 2:
- Name: ____________________________________
- Institution: ______________________________
- Role: ____________________________________

[Add additional co-applicants as needed]

**A3. DS-I Africa Consortium Membership**
Are you or your institution members of the DS-I Africa Consortium?
□ Yes - Please specify which DS-I Africa project: ________________
□ No

If No, please provide detailed information about your institutional affiliation and research credentials.

---

**SECTION B: INSTITUTIONAL INFORMATION**

**B1. Institution Accreditation**
- Type of Institution: □ University □ Research Institute □ Government Agency □ NGO □ Other: _______
- Institutional Website: ________________________
- Research Office Contact: ______________________
- Institutional Ethics Committee Name: _____________

**B2. Data Management Capabilities**
Describe your institution's data management infrastructure:
- Secure storage capabilities: ____________________
- Data protection policies: _______________________
- IT security measures: __________________________
- Previous experience with health data: ______________

---

**SECTION C: DATA REQUEST SPECIFICATION**

**C1. Dataset(s) Requested**
Please specify which datasets you are requesting access to:

□ RP1 De-identified Dataset (Maternal and Child Health)
  - Specific variables needed: ______________________
  - Geographical scope: ____________________________
  - Temporal scope: _______________________________

□ RP2 De-identified Dataset (Urban Heat-Health)
  - Specific variables needed: ______________________
  - Geographical scope: ____________________________
  - Temporal scope: _______________________________

□ Integrated Climate-Health Dataset
  - Specific variables needed: ______________________
  - Geographical scope: ____________________________
  - Temporal scope: _______________________________

□ Other (please specify): ____________________________

**C2. Data Sharing Modality Preference**
□ Data Download (with justification): ___________________
□ Analysis within HE²AT Center platform (preferred for sensitive data)

**Justification for Download Request:**
_______________________________________________________
_______________________________________________________

---

**SECTION D: RESEARCH PROJECT DETAILS**

**D1. Project Title**
_______________________________________________________

**D2. Research Objectives**
Provide a detailed description of your research objectives (max 500 words):
_______________________________________________________
_______________________________________________________
_______________________________________________________

**D3. Scientific Rationale**
Explain the scientific rationale and significance of your research (max 500 words):
_______________________________________________________
_______________________________________________________
_______________________________________________________

**D4. Methodology**
Describe your analytical approach and methods (max 500 words):
_______________________________________________________
_______________________________________________________
_______________________________________________________

**D5. Expected Outcomes and Impact**
Describe the expected outcomes and potential public health impact (max 300 words):
_______________________________________________________
_______________________________________________________

**D6. Timeline**
- Project Start Date: ____________________________
- Expected Completion Date: ______________________
- Data Access Period Needed: _____________________

**D7. Funding**
- Funding Source: _______________________________
- Funding Status: □ Secured □ Applied □ Not applicable
- Grant Reference (if applicable): __________________

---

**SECTION E: ETHICS AND COMPLIANCE**

**E1. Ethics Approval**
□ Ethics approval obtained - Reference Number: ____________
□ Ethics approval pending - Expected date: _______________
□ Ethics approval not required - Justification: ____________

**Attach:** Copy of ethics approval letter or application

**E2. Regulatory Compliance**
Confirm compliance with applicable regulations:
□ GDPR (if applicable)
□ HIPAA (if applicable)  
□ Local data protection laws
□ Other: ___________________________________________

**E3. Consent and Authorization**
Describe how your research complies with consent requirements:
_______________________________________________________
_______________________________________________________

---

**SECTION F: DATA PROTECTION AND SECURITY**

**F1. Technical Safeguards**
Describe technical measures for data protection:

**Storage Security:**
- Encryption standards: _____________________________
- Access controls: __________________________________
- Backup procedures: _______________________________

**Network Security:**
- Firewall protection: ______________________________
- VPN requirements: ________________________________
- Data transmission security: _______________________

**F2. Organizational Safeguards**
Describe organizational measures:

**Personnel:**
- Who will have access to the data: ___________________
- Training on data protection: _______________________
- Confidentiality agreements: _______________________

**Policies:**
- Institutional data protection policy: ________________
- Data sharing procedures: ___________________________
- Incident response procedures: ______________________

**F3. Data Handling Procedures**
- Data processing location: ___________________________
- Data retention period: _____________________________
- Data disposal procedures: __________________________
- Data sharing restrictions: __________________________

---

**SECTION G: COLLABORATION AND OUTPUT**

**G1. Collaboration with HE²AT Center**
Are you interested in collaborating with HE²AT Center researchers?
□ Yes - Please specify areas of interest: ________________
□ No

**G2. Expected Outputs**
□ Peer-reviewed publications
□ Conference presentations  
□ Policy reports
□ Other: ___________________________________________

**G3. Data Citation and Acknowledgment**
Do you agree to appropriately cite and acknowledge the HE²AT Center in all outputs?
□ Yes
□ No

**G4. Results Sharing**
Do you agree to share research results with the HE²AT Center?
□ Yes - Summary reports
□ Yes - Full results sharing
□ No

---

**SECTION H: DECLARATIONS AND AGREEMENTS**

**H1. Accuracy Declaration**
I declare that the information provided in this application is accurate and complete to the best of my knowledge.

**H2. Compliance Agreement**
I agree to comply with:
□ HE²AT Center Data Management Plan requirements
□ Data Transfer Agreement terms and conditions
□ Applicable data protection and privacy regulations
□ Ethical guidelines for health research

**H3. Non-Disclosure Agreement**
I agree not to attempt to re-identify any individuals in the dataset or share data with unauthorized parties.

**H4. Reporting Agreement**
I agree to:
□ Report any data security incidents immediately
□ Provide annual progress reports on data use
□ Notify the DAC of any changes to the research project
□ Submit copies of publications using the data

---

**SECTION I: SIGNATURES**

**Primary Applicant:**
Signature: _________________________ Date: __________
Print Name: _______________________________________

**Institutional Representative (Head of Department/Research Office):**
Signature: _________________________ Date: __________
Print Name: _______________________________________
Title: ___________________________________________

---

**FOR OFFICE USE ONLY**

**Application Received:** Date: _______ By: _____________
**Initial Screening:** Date: _______ Outcome: ___________
**DAC Review:** Date: _______ Decision: _______________
**Data Transfer:** Date: _______ Completed: ____________

---

**ATTACHMENTS REQUIRED:**
□ Ethics approval letter or application
□ Institutional data protection policy
□ CV of primary applicant
□ Institutional letter of support
□ Data management plan
□ Other: _________________________________________

**SUBMISSION:**
Submit completed form and attachments to:
HE²AT Center Data Access Committee
Email: [data-access@he2at.org]
Subject: "Data Access Request - [Your Name] - [Date]"