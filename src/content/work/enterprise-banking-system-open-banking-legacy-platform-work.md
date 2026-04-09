---
title: "Enterprise Banking System - Open Banking and Legacy Platform Work"
summary: "Owned Open Banking functionality inside a large public-facing banking system built on a highly coupled legacy WebForms codebase."
description: "Case study about Open Banking ownership, legacy WebForms platform work, and safe delivery in a production-critical banking system."
tags:
  - Banking
  - Open Banking
  - Legacy Systems
  - .NET
  - WebForms
order: 2
---

## Context

I contributed to a large-scale, public-facing banking system used by tens of thousands of end users, operating under strict regulatory requirements and tight delivery timelines.

The system was built on a legacy WebForms codebase with hundreds of thousands of lines of code, minimal separation of concerns, and no meaningful documentation. SQL Server was used in a very limited, outdated manner despite newer capabilities being available.

## Responsibilities

- Took technical ownership of Open Banking functionality, working as the sole developer on that area
- Contributed across the stack to the web banking portal
- Worked within multiple teams across different domains of the system
- Delivered features under strict deadlines and regulatory pressure

## Challenges

- Highly coupled legacy architecture with:
  - extremely large WebForms files, often 10k to 15k+ lines
  - duplicated logic
  - unclear and implicit data flows
- No documentation and limited institutional knowledge
- Functional-style implementations without clear boundaries
- Debugging was often the only way to understand system behavior
- High stakes, where errors could have direct financial and regulatory impact

## Approach

- Relied heavily on systematic debugging and tracing to reconstruct data flows and behavior
- Built a working mental model of the system despite the lack of documentation
- Focused on safe, incremental changes within fragile areas of the codebase
- Maintained discipline around correctness and edge cases in a high-risk domain
- Worked independently while coordinating across multiple teams when needed

## Outcome

- Delivered Open Banking functionality within a complex and constrained environment
- Contributed to ongoing development of a production-critical banking system
- Navigated and extended a large legacy codebase without introducing instability

## Takeaway

This work reinforced my ability to operate effectively in large, undocumented legacy systems, where correctness, caution, and persistence matter more than ideal architecture.
