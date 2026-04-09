---
title: "Public Sector System - Data Mart and Reporting Optimization"
summary: "Owned reporting work in a public-sector system with complex SQL Server procedures, undocumented data relationships, and strict delivery deadlines."
description: "Case study about Data Mart contribution, reporting optimization, and SQL Server performance work in a public-sector system."
tags:
  - SQL Server
  - Reporting
  - Data Mart
  - Public Sector
order: 1
---

## Context

I worked on a public-sector system supporting regulatory workflows and internal reporting, operating under strict deadlines and external EU-level coordination requirements.

The system included:

- a public-facing portal
- an operational database with complex and undocumented data relationships
- a reporting layer built around large SQL Server stored procedures

## Responsibilities

- Took technical ownership of public-facing reporting functionality
- Contributed to a Data Mart solution for internal reporting
- Delivered ad-hoc and high-priority reports under time constraints
- Clarified requirements and collaborated with domain experts for data validation

## Challenges

- No documentation and highly implicit data relationships
- Complex SQL layer:
  - around 20 stored procedures
  - key procedures reaching 2000 to 3000 lines
  - joins across 20 to 30 tables and views
- Data inconsistencies and hidden edge cases
- High I/O costs, from tens to hundreds of gigabytes during execution
- Need for real-time or near-real-time reporting under performance constraints

## Approach

### Data understanding and mapping

- Reverse-engineered data flows across dozens of tables and procedures
- Mapped data transformations and relationships within about two weeks
- Worked closely with domain experts to validate correctness

### SQL and performance optimization

- Optimized critical stored procedures
- Reduced unnecessary joins while introducing targeted joins where needed
- Applied pre-aggregation strategies
- Used caching of intermediate results
- Split queries into staged processing where that reduced pressure on the system
- Introduced partial or asynchronous processing depending on the report inputs

### Trade-off management

I continuously balanced:

- performance versus completeness of data
- real-time versus near-real-time delivery
- system limitations versus reporting requirements

### Data integrity

- Performed manual validation and cross-checking of results
- Identified and surfaced data inconsistencies to upstream teams

## Outcome

- Significantly improved performance of key reporting workflows
- Enabled delivery of new reporting features on top of an unstable foundation
- Extended the usable life of an otherwise fragile reporting system
- Established a clearer understanding of data flows within the system

## Takeaway

This experience strengthened my ability to work deeply with SQL Server, data-heavy systems, and reporting trade-offs, especially in environments where full redesign is not feasible and correctness must be preserved.
