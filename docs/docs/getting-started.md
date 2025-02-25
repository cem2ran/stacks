---
id: getting-started
title: Getting started
---

## Motivation

[Max Stoiber](https://github.com/mxstbr) has written an interesting [article](https://mxstbr.com/thoughts/margin) about why margin is considered harmful. There are three main disadvantages of using margin:

- margin breaks component encapsulation
- margin makes reusability harder
- margin conflicts with how designers think

It's obvious that handling margins across the entire project is simply difficult and might be not scalable. For web projects, a design system called [Braid](https://seek-oss.github.io/braid-design-system/foundations/layout) has developer-friendly API for building layouts. However, a similar library was missing for React Native based projects. Therefore, **Stacks** has been created and it adopts Braid Layouts API with subtle differences.

## Compatibility

`Stacks` is written in [ReScript](https://rescript-lang.org/). It is compiled using BuckleScript to plain JavaScript and has typings for TypeScript and Flow.

This means that out of the box `Stacks` is usable in any project that use the following:

- plain JavaScript
- TypeScript
- Flow
- ReScript

`Stacks` is supported in React Native and React Native Web projects.
