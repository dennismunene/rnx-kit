# Change Log - @rnx-kit/metro-config

## 1.3.1

### Patch Changes

- e0d01e30: Remove `module` from `resolverMainFields` as Metro currently does not support it and causes confusion when bundling fails.

## 1.3.0

### Minor Changes

- 5314ae94: Added `react-native` to main fields

## 1.2.39

### Patch Changes

- 3e706f3e: Fix monorepo asset plugin breaking bundling

## 1.2.38

### Patch Changes

- a9296175: Verify `server.enhanceMiddleware` is only set if `transformer.assetPlugins` includes the asset plugin.

## 1.2.37

### Patch Changes

- be0b6511: Publish type declaration files

## 1.2.36

### Patch Changes

- c0393431: Fixed invalid regular expression on Windows

## 1.2.35

### Patch Changes

- 54edf48a: Fixed react-native not being found when using pnpm and GitHub URLs

## 1.2.34

### Patch Changes

- cf4070ac: Replace `workspace-tools` with `@rnx-kit/tools-workspaces`
- Updated dependencies [37245c33]
  - @rnx-kit/tools-workspaces@0.1.0

## 1.2.33

### Patch Changes

- 4674e761: Enable `resolveSymlinks` and remove dupe code
- Updated dependencies [1edb9acd]
  - @rnx-kit/tools-node@1.3.0

## 1.2.32

### Patch Changes

- 77b9f0d9: Fix `resolveUniqueModule` not resolving symlinks that are relative paths

## 1.2.31

### Patch Changes

- 3ee09f6: Fix Rush workspaces not being detected when set up as a post-install step

## 1.2.30

### Patch Changes

- d1df99c: Add a helper function that returns both the path to a specified package and a regex pattern that excludes other copies of it.

## 1.2.29

### Patch Changes

- 0e703fe: Metro introduced `blockList` in 0.60, but still prefers `blacklistRE` if it is also set.

## 1.2.28

### Patch Changes

- 0eb8b8b: Bump workspace-tools to 0.18.2 for performance improvements
- 8ffd299: Ignore .tlog files to avoid crashing the dev server while building the Windows app

## 1.2.27

### Patch Changes

- 09edaab: Prefer `module` main field

## 1.2.26

Tue, 30 Nov 2021 17:24:14 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.17
- Bump @rnx-kit/tools-node to v1.2.6

## 1.2.25

Thu, 18 Nov 2021 20:51:05 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.16
- Bump @rnx-kit/tools-node to v1.2.5

## 1.2.24

Fri, 05 Nov 2021 19:24:49 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.15
- Bump @rnx-kit/tools-node to v1.2.4

## 1.2.23

Fri, 05 Nov 2021 07:33:42 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.14
- Bump @rnx-kit/tools-node to v1.2.3

## 1.2.22

Wed, 03 Nov 2021 18:15:39 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.13
- Bump @rnx-kit/tools-node to v1.2.2

## 1.2.21

Mon, 01 Nov 2021 13:46:13 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.12
- Bump @rnx-kit/tools-node to v1.2.1

## 1.2.20

Sat, 30 Oct 2021 07:50:51 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.11
- Bump @rnx-kit/tools-node to v1.2.0

## 1.2.19

Fri, 29 Oct 2021 12:14:31 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.10
- Bump @rnx-kit/tools-node to v1.1.6

## 1.2.18

Fri, 29 Oct 2021 10:31:10 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.9
- Bump @rnx-kit/tools-node to v1.1.5

## 1.2.17

Fri, 29 Oct 2021 08:51:30 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.8
- Bump @rnx-kit/tools-node to v1.1.4

## 1.2.16

Wed, 22 Sep 2021 08:38:38 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.7

## 1.2.15

Tue, 21 Sep 2021 13:01:58 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.6

## 1.2.14

Thu, 16 Sep 2021 10:10:39 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.14 (4123478+tido64@users.noreply.github.com)

## 1.2.13

Wed, 08 Sep 2021 06:42:50 GMT

### Patches

- Wrong module may be resolved because we're ignoring symlinks (4123478+tido64@users.noreply.github.com)
- Bump @rnx-kit/metro-config to v1.2.13 (4123478+tido64@users.noreply.github.com)

## 1.2.12

Fri, 03 Sep 2021 12:18:30 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.12 (4123478+tido64@users.noreply.github.com)

## 1.2.11

Tue, 31 Aug 2021 06:43:13 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.11 (4123478+tido64@users.noreply.github.com)

## 1.2.10

Tue, 31 Aug 2021 06:21:44 GMT

### Patches

- Fix assets not resolving correctly in monorepos (4123478+tido64@users.noreply.github.com)

## 1.2.9

Fri, 27 Aug 2021 18:41:43 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.9 (4123478+tido64@users.noreply.github.com)

## 1.2.8

Wed, 25 Aug 2021 08:52:48 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.8 (afoxman@microsoft.com)

## 1.2.7

Wed, 25 Aug 2021 07:32:57 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.7 (afoxman@microsoft.com)

## 1.2.6

Sat, 21 Aug 2021 08:22:48 GMT

### Patches

- Integrate tools package and other common libraries throughout monorepo, removing custom code. (afoxman@microsoft.com)
- Bump @rnx-kit/metro-config to v1.2.6 (afoxman@microsoft.com)

## 1.2.5

Fri, 20 Aug 2021 10:36:13 GMT

### Patches

- Add react peer dependencies (asgramme@microsoft.com)

## 1.2.4

Mon, 16 Aug 2021 14:17:13 GMT

### Patches

- Bump @rnx-kit/metro-config to v1.2.4 (4123478+tido64@users.noreply.github.com)

## 1.2.3

Thu, 22 Jul 2021 09:12:14 GMT

### Patches

- Prevent Metro from watching temporary files generated by Visual Studio (4123478+tido64@users.noreply.github.com)

## 1.2.2

Tue, 20 Jul 2021 09:17:58 GMT

### Patches

- Fix handling of scoped dependencies in exclusions (arabisho@microsoft.com)

## 1.2.1

Tue, 22 Jun 2021 15:04:23 GMT

### Patches

- Bumped find-up to 5.0, and workspace-tools to 0.16.2 (4123478+tido64@users.noreply.github.com)

## 1.2.0

Thu, 20 May 2021 06:03:39 GMT

### Minor changes

- Added support for Lerna, pnpm, Rush workspaces (4123478+tido64@users.noreply.github.com)

## 1.1.4

Tue, 18 May 2021 19:20:51 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.3 (4123478+tido64@users.noreply.github.com)

## 1.1.3

Fri, 16 Apr 2021 12:03:52 GMT

### Patches

- Bump @rnx-kit/babel-preset-metro-react-native to v1.0.2 (4123478+tido64@users.noreply.github.com)

## 1.1.2

Thu, 11 Mar 2021 23:54:05 GMT

### Patches

- Fixed a typo in README (4123478+tido64@users.noreply.github.com)

## 1.1.1

Thu, 11 Mar 2021 22:51:12 GMT

### Patches

- Fix fail to resolve react-native on Windows (4123478+tido64@users.noreply.github.com)

## 1.1.0

Thu, 11 Mar 2021 15:31:28 GMT

### Minor changes

- Removes makeBabelConfig() for @rnx-kit/babel-preset-metro-react-native (4123478+tido64@users.noreply.github.com)

## 1.0.4

Tue, 09 Mar 2021 08:21:51 GMT

### Patches

- Exclusion rules should ignore symlinks (4123478+tido64@users.noreply.github.com)

## 1.0.3

Mon, 08 Mar 2021 10:59:59 GMT

### Patches

- Fix sibling packages resolving to wrong react-native copy (4123478+tido64@users.noreply.github.com)

## 1.0.2

Thu, 18 Feb 2021 09:33:32 GMT

### Patches

- Ignore hoisted react-native if a local copy exists (4123478+tido64@users.noreply.github.com)

## 1.0.1

Tue, 16 Feb 2021 09:27:59 GMT

### Patches

- Publish babel-plugin-import-path-remapper separately (4123478+tido64@users.noreply.github.com)

## 1.0.0

Mon, 25 Jan 2021 07:42:30 GMT

### Patches

- Replace scope option for a test function (4123478+tido64@users.noreply.github.com)
