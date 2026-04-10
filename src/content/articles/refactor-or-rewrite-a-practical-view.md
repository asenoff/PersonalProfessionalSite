---
title: "Refactor or Rewrite? A Practical View"
summary: "A practical view on when to refactor, when a rewrite becomes too risky, and how to evaluate the decision in terms of business value."
description: "An article about refactoring versus rewriting legacy systems, using examples from .NET, SQL-heavy reporting, and business-critical software."
tags:
  - Legacy Systems
  - Refactoring
  - Rewrites
  - Engineering Decisions
order: 1
publishedAt: "2026-04-10"
---

Early in my career, I was given a task that, in hindsight, was bound to fail.

I had to extend a .NET RAD generator from desktop to web. The core architectural decision was to assemble JavaScript interfaces server-side in C#. Every change required writing JavaScript, building, running, debugging, and repeating the cycle. It was slow, hard to test, and even harder to reason about.

After two years of work, the system accumulated bugs at a pace that forced us to freeze the product.

> A poor architectural decision can make years of effort largely ineffective.

## The Instinct to Rewrite

Experiences like this naturally lead to a common instinct: rewrite everything.

I have had that instinct as well. Along with it came others, such as believing that newer technologies are always better, or that applying patterns and modern architectures automatically improves systems.

Over time, I learned that these are traps.

Modern tools, patterns, and architectures do not solve every problem. And rewriting a system does not guarantee a better outcome.

## The Actual Question

In practice, the question is not `refactor or rewrite?` in isolation.

It is:

> What is the most economical way to solve the business problem?

That is the real decision.

My default is to refactor.

A rewrite only makes sense when the cost of maintaining and improving the existing system clearly exceeds the cost and risk of rebuilding it.

## When Rewriting Becomes Difficult

In one long-lived, business-critical system, the core had evolved over many years. The data was scattered, inconsistent, and deeply embedded in the system's behavior.

A rewrite was considered, but no one could realistically estimate the effort, the risks, or the impact on business continuity. At the same time, the system was actively serving critical operations.

So the existing system had to keep working. A large team was involved in maintaining it in a barely stable condition. The work often felt like archaeology, but it remained meaningful because it supported real processes and real users.

> Even tedious maintenance work can carry significant business value.

## When Refactoring Is the Only Viable Path

In another case, in a data-heavy system focused on reporting, I worked with large, complex SQL procedures and unclear data relationships.

The system already had established behavior that could not be easily replaced. The main challenge was balancing:

- data completeness
- query performance
- execution time
- correctness

A full rewrite of the data layer would have introduced significant risk. Incremental improvement was the only viable option.

The hardest part was not the technical work, but communicating the trade-offs:

- more data usually means slower queries
- better performance often means limiting scope

## Architecture vs Implementation

I have also seen systems with good initial design degrade over time.

In one case, a well-designed system was extended mostly by junior developers under time pressure. Maintainability was sacrificed for speed. Over time, the structure eroded.

The key lesson there was:

> Good architecture cannot compensate for poor implementation discipline.

At the same time, it also showed that even degraded systems with solid foundations are often easier to improve than completely rebuilding them.

## A Principle on Complexity

Working with legacy systems has led me to a simple rule:

> Do not add complexity unless it reduces more complexity elsewhere.

I have introduced additional structure, dependency injection, design patterns, or more formal object-oriented approaches, but only when they clearly simplified other parts of the system or improved testability.

For example:

- introducing structured logging reduced data duplication and saved significant storage over time
- adding minimal dependency injection improved testability without overengineering

These are trade-offs, not ideals. The goal is always to reduce overall complexity, not increase it.

## Tests and Documentation

Two things consistently prove their value:

- tests
- documentation

I have spent days debugging issues in systems without tests, tracking behavior through layers of unclear logic.

In systems where tests are treated as first-class citizens, many of those issues are caught early.

In one recent project, following a strict test-driven approach, I was able to grow the codebase to several thousand lines without allowing serious bugs to reach production.

Documentation plays a similar role. It reduces onboarding time and prevents repeated reverse-engineering of the same problems.

## A Practical Decision Framework

When deciding between refactoring and rewriting, I look at:

- **Cost:** Does maintaining the system cost more than rebuilding it?
- **Risk:** Can we estimate the impact of a rewrite?
- **Stability:** Does the system currently serve its purpose?
- **Team capability:** Can the team realistically deliver a rewrite while maintaining the existing system?

If these questions cannot be answered clearly, a rewrite is usually too risky.

## Closing Thought

Even the best systems eventually reach the end of their lifecycle.

But most of the time, the work lies in between: maintaining, improving, and adapting systems that already exist.

My role as an engineer is not to pursue ideal architectures or rewrite code for its own sake.

My job is to solve business problems, ideally with as little code, risk, and disruption as possible.

And more often than not, that means working with what already exists and making it better step by step.
