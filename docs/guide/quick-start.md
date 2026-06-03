# Quick Start

Get started with Bootstrap IntelliSense in minutes!

## Installation

### Via Marketplace

The easiest way to install is through the Visual Studio Code Marketplace:

1. Open Visual Studio Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on macOS) to open the Extensions view
3. Search for "Bootstrap IntelliSense"
4. Click "Install"


### Via Command Line

You can also install the extension via the command line:

```bash
code --install-extension hossaini.bootstrap-intellisense
```

### Via GitHub Releases

Download and install the latest release directly from GitHub:

1. Go to the <Link type="releases">GitHub Releases</Link> page
2. Download the latest `.vsix` file
3. Open Visual Studio Code
4. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
5. Type "Install from VSIX" and select **Extensions: Install from VSIX...**
6. Select the downloaded `.vsix` file

::: tip Tip
This method is useful if you want to install a specific version or if you're working in an offline environment.
:::

## Prerequisites

::: warning Important
For the extension to activate, Bootstrap must be installed in your workspace.
:::

### Install Bootstrap

If you haven't installed Bootstrap yet, you can install it with one of these package managers:

::: code-group

```bash [npm]
npm install bootstrap
```

```bash [pnpm]
pnpm add bootstrap
```

```bash [yarn]
yarn add bootstrap
```

```bash [bun]
bun add bootstrap
```

:::

## Activation

The extension will be automatically activated when:
- You have installed the extension
- Bootstrap is present in your workspace
- You open a supported file (HTML, JSX, Vue, etc.)

You should see a notification that Bootstrap IntelliSense is active.

### Activation Status

You can check if the extension is currently active by looking at the status bar icon at the bottom of VS Code:

- **Active**: The Bootstrap IntelliSense icon is displayed normally in the status bar
- **Inactive**: The Bootstrap IntelliSense icon appears with a strikethrough


## Getting Started

### 1. Open an HTML File

Create a new HTML file or open an existing one.

### 2. Start Typing

Start typing a Bootstrap class name:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <!-- Type here: btn- -->
    </div>
  </div>
</div>
```

### 3. Use Autocomplete

As you start typing, suggestions will appear automatically. Color-related classes show a color swatch right next to the suggestion:

<img src="/autocomplete.png" alt="Autocomplete Feature" style="max-width: 100%; margin: 1rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

::: tip Tip
If suggestions don't appear automatically, press `Ctrl+Space` (or `Cmd+Space` on macOS) to manually trigger autocomplete.
:::

### 4. Use Hover Preview

Hover your mouse over a Bootstrap class to see the CSS properties. For color-related classes, a color swatch and its hex code are shown above the rule:

<img src="/css-hover-preview.png" alt="CSS Hover Preview" style="max-width: 100%; margin: 1rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

::: tip Tip
Autocomplete works not only in `class`/`className`, but also in framework bindings (`:class`, `v-bind:class`, `[ngClass]`, Svelte `class:`) and helpers like `cn()`, `clsx()` or `cva()` — including across multiple lines.
:::

