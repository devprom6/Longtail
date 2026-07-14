# Contributing to Longtail

Thank you for your interest in contributing to Longtail! This document provides guidelines and instructions to help you get started.

## Prerequisites

- Node.js >= 20
- pnpm >= 9

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/longtail.git
   cd longtail
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
5. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```

## Development

### Monorepo Structure

Longtail is a pnpm monorepo managed by Turborepo:

- `apps/pos/` -- Merchant-facing POS application
- `packages/stellar-core/` -- Low-level Stellar network interactions
- `packages/fx-engine/` -- Foreign exchange / currency conversion logic
- `packages/wallet-sdk/` -- Client-side wallet SDK (social login, ephemeral wallets)
- `packages/ui-kit/` -- Shared UI components
- `infra/` -- Infrastructure and deployment configuration
- `docs/` -- Architecture and design documentation

### Common Commands

```bash
# Build all packages
pnpm build

# Run in development (watch mode)
pnpm dev

# Lint (type checking across all packages)
pnpm lint

# Type check
pnpm typecheck

# Run tests
pnpm test

# Format code
pnpm format

# Check formatting
pnpm format:check
```

### Working on a Specific Package

```bash
# Work on a specific package
pnpm --filter @longtail/wallet-sdk dev

# Build a specific package
pnpm --filter @longtail/stellar-core build

# Test a specific package
pnpm --filter @longtail/fx-engine test
```

## Code Style

- We use **TypeScript** with strict mode enabled
- Code is formatted with **Prettier** (run `pnpm format` before committing)
- Type checking is enforced via `tsc --noEmit`
- The pre-commit hook runs lint-staged automatically on staged files

## Testing

- Tests are written with **Vitest**
- Place test files next to source files: `src/index.test.ts`
- Run all tests: `pnpm test`
- Run tests for a specific package: `pnpm --filter @longtail/fx-engine test`

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` -- New feature
- `fix:` -- Bug fix
- `chore:` -- Maintenance tasks
- `docs:` -- Documentation changes
- `test:` -- Adding or updating tests
- `refactor:` -- Code refactoring without behavior changes

Examples:

```
feat: add OAuth token exchange to wallet-sdk
fix: handle network timeout in stellar-core
chore: update dependencies
docs: add architecture overview
```

## Pull Request Process

1. Ensure your code builds (`pnpm build`) and passes all checks (`pnpm lint && pnpm test`)
2. Update documentation if needed
3. Open a PR against `main` with a clear title and description
4. Link any related issues
5. Wait for CI to pass and request a review

## Reporting Issues

- Use [GitHub Issues](https://github.com/devprom6/Longtail/issues)
- Include steps to reproduce for bugs
- Label feature requests appropriately

## Security

If you discover a security vulnerability, please do **not** open a public issue. Instead, contact the maintainers directly.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
