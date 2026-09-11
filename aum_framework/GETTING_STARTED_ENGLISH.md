# AUM Engine: Getting Started (English Version)

Welcome to the AUM Engine! This is a simple guide on how to install and use the framework using standard, easy-to-understand software engineering terminology (the English mode).

## 1. Installation

To install the AUM framework into your project, open your terminal and run:
```bash
npm install aum-framework
```

## 2. Initialization & Setup

Once installed, you need to set up the framework in your workspace. Run the following command:
```bash
npx aum init
```

The installer will ask you a few simple questions:
1. **Project Name:** Enter the name of your project.
2. **Architecture Directory:** Press enter to use the default `docs/architecture`.
3. **Guardrails Preset:** Choose `1` for the recommended Strict Guardrails.
4. **Language Version:** **Choose `2` (English Terminology)**.

*That's it!* The installer will generate a hidden `.aum/` folder in your project containing all your configuration files, task logs, and rules in simple English.

## 3. How to Use the Framework

The framework operates in a simple, turn-based lifecycle. You (or your AI agent) will use these commands to manage your work:

### Starting a Task
Before writing any code, always start by running:
```bash
npx aum start
```
This prepares the system for a new **Task**. The AI will clarify your requirements, map out a blueprint, and then begin making edits safely.

### Verifying Code
If you want the AI to run tests and ensure the environment is healthy, run:
```bash
npx aum verify
```
This triggers the framework's self-healing compiler to automatically fix dependency errors or crashes.

### Auditing Your Changes
Before you commit your code to Git, run:
```bash
npx aum audit
```
This runs the internal linter. It scans your changed files to ensure the AI didn't leave behind empty `TODO` stubs, messy `console.log` statements, or violate your architecture rules.

## Core Concepts (English Dictionary)

If you ever see the original Sanskrit terms in logs or advanced documentation, here is what they mean in your English workspace:

- **Manifest (`manifest.json`)**: Previously *Sphota*. This is the core state file tracking what the AI is currently focused on.
- **Tasks (`tasks/`)**: Previously *Sankalpas*. These are your individual feature branches or work tickets.
- **Memory (`memory/`)**: Previously *Samskaras*. This is where the AI saves lessons it learns from bugs so it doesn't repeat mistakes.
- **Ideas (`ideas/`)**: Previously *Intent Awakening*. A scratchpad for the AI to brainstorm before locking into a task.

You are now ready to build safely with AUM!
