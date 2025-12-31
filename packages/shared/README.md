# @metallicjs/shared

Shared configurations for TypeScript, ESLint, and other development tools across the MetallicJS monorepo.

## Overview

This package consolidates all shared configuration files to ensure consistency across all apps and packages in the monorepo. It includes:

- **TypeScript configurations** for different project types
- **ESLint configurations** for various environments
- Centralized dependency management for config-related packages

## TypeScript Configurations

### Available Configs

- `@metallicjs/shared/typescript-config/base` - Base TypeScript configuration
- `@metallicjs/shared/typescript-config/nextjs` - Next.js specific configuration
- `@metallicjs/shared/typescript-config/react-library` - React library configuration
- `@metallicjs/shared/typescript-config/node` - Node.js specific configuration

### Usage

In your `tsconfig.json`:

```json
{
  "extends": "@metallicjs/shared/typescript-config/base",
  "compilerOptions": {
    // Your project-specific overrides
  }
}
```

For Next.js projects:

```json
{
  "extends": "@metallicjs/shared/typescript-config/nextjs"
}
```

For React libraries:

```json
{
  "extends": "@metallicjs/shared/typescript-config/react-library"
}
```

For Node.js projects:

```json
{
  "extends": "@metallicjs/shared/typescript-config/node"
}
```

## ESLint Configurations

### Available Configs

- `@metallicjs/shared/eslint-config/base` - Base ESLint configuration
- `@metallicjs/shared/eslint-config/react` - React specific configuration
- `@metallicjs/shared/eslint-config/next` - Next.js specific configuration
- `@metallicjs/shared/eslint-config/node` - Node.js specific configuration

### Usage

In your `eslint.config.js`:

```javascript
import sharedConfig from "@metallicjs/shared/eslint-config/base";

export default [
  ...sharedConfig,
  // Your project-specific overrides
];
```

For React projects:

```javascript
import reactConfig from "@metallicjs/shared/eslint-config/react";

export default [...reactConfig];
```

For Next.js projects:

```javascript
import nextConfig from "@metallicjs/shared/eslint-config/next";

export default [...nextConfig];
```

For Node.js projects:

```javascript
import nodeConfig from "@metallicjs/shared/eslint-config/node";

export default [...nodeConfig];
```

## Migration Guide

### From Old Config Packages

If you're migrating from the old `@metallicjs/typescript-config` or `@metallicjs/eslint-config` packages:

1. Update your `package.json` dependencies to remove the old packages
2. Update your config file imports to use the new shared package paths
3. Run `pnpm install` to update dependencies

### Example Migration

**Before:**

```json
// tsconfig.json
{
  "extends": "@metallicjs/typescript-config/base.json"
}
```

**After:**

```json
// tsconfig.json
{
  "extends": "@metallicjs/shared/typescript-config/base"
}
```

## Development

This package is part of the MetallicJS monorepo and should be updated when:

- Adding new project types that need specific configurations
- Updating shared linting rules or TypeScript settings
- Adding new development tools that need shared configuration

## Dependencies

All ESLint and TypeScript related dependencies are managed in this package to ensure version consistency across the monorepo.
