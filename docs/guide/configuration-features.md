# Configuration & Features

## Features

### Smart Autocomplete

Get intelligent Bootstrap class suggestions as you type.

<img src="/autocomplete.png" alt="Autocomplete Feature" style="max-width: 100%; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

::: tip
Press `Ctrl+Space` (or `Cmd+Space` on macOS) to manually trigger autocomplete.
:::

### Color Previews

Bootstrap classes that map to a color now show a color swatch directly in the autocomplete list, so you can pick the right color at a glance. The same swatch (together with its hex code) is shown above the CSS rule when you hover the class.

### CSS Hover Preview

Hover over any Bootstrap class to see its CSS properties. For color-related classes, a color swatch and the hex code are shown above the rule.

<img src="/css-hover-preview.png" alt="CSS Hover Preview" style="max-width: 100%; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

::: tip
Hover can be toggled independently of autocomplete via the Status Bar menu (**"Enable/Disable hover"**) or the `enableHover` setting.
:::

### Broad Class-Attribute Support

Class names are detected across a wide range of frameworks and syntaxes, both for autocomplete and hover:

- Standard attributes: `class`, `className`
- Framework bindings: `:class`, `v-bind:class`, `[ngClass]`, `[class]`, Svelte `class:` directives
- Class helper calls such as `cn()`, `clsx()`, `classNames()`, `twMerge()` and `cva()`
- **Multi-line** class attributes are fully supported.

## Configuration

### Status Bar Menu

Click the Bootstrap version button in the Status Bar to open the menu:

```
Bootstrap vX.X.X
```

**Menu options:**
- Select Bootstrap version
- From local files for offline use
- Add language support
- Enable/Disable completion
- Enable/Disable hover
- Reload / Clear Class Cache

### Select Bootstrap Version

<img src="/bootsrap-version.png" alt="Bootstrap Version Selection" style="max-width: 100%; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

1. Click Status Bar button
2. Select **"Select Bootstrap version"**
3. Choose version (Bootstrap 5, 4, or 3)

### Use Local CSS File

1. Click Status Bar button
2. Select **"From local files for offline use"**
3. Browse and select your CSS file

### Add Language Support

<img src="/custom-language-support.png" alt="Custom Language Support" style="max-width: 100%; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

**From predefined list:**
1. Select **"Add language support"** → **"Select from available languages"**
2. Check/uncheck languages
3. Press **OK**

**Custom language ID:**
1. Select **"Add custom language ID"**
2. Enter language identifier (e.g., `astro`, `mdx`)
3. Press Enter

### Enable/Disable

- Toggle autocompletion via Status Bar menu: **"Enable/Disable completion"**
- Toggle the hover preview independently via **"Enable/Disable hover"** (enabled by default)

Runtime toggles take effect immediately — no reload required.

### Reload / Clear Class Cache

If Bootstrap classes look outdated (for example after changing the version or your local CSS file), select **"Reload / Clear Class Cache"** from the Status Bar menu or run it from the Command Palette (`Ctrl+Shift+P`). This clears the cached Bootstrap classes and reloads them.

## Advanced Settings (settings.json)

Open: `Ctrl+Shift+P` → "Preferences: Open User Settings (JSON)"

```json
"bootstrapIntelliSense": {
  "enable": true,
  "enableHover": true,
  "bsVersion": "5.3.7",
  "useLocalFile": false,
  "cssFilePath": "",
  "languageSupport": ["html", "typescript", "typescriptreact", "angular"]
}
```

::: tip
If `bsVersion` is not set, the extension falls back dynamically to the newest available Bootstrap version. Settings are saved to the scope where they are already defined (workspace folder / workspace / global) instead of always overwriting the global value.
:::


## Troubleshooting

| Problem | Solution |
|---------|----------|
| Status Bar button not visible | Check extension is installed; reload VS Code |
| Settings not applied | Reload VS Code; check JSON syntax |
| Local file not found | Verify `cssFilePath`; use relative paths |
| Language not working | Add via "Add language support"; check language ID |
