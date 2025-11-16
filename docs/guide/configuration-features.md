# Configuration & Features

## Features

### Smart Autocomplete

Get intelligent Bootstrap class suggestions as you type.

<img src="/autocomplete.png" alt="Autocomplete Feature" style="max-width: 100%; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

::: tip
Press `Ctrl+Space` (or `Cmd+Space` on macOS) to manually trigger autocomplete.
:::

### CSS Hover Preview

Hover over any Bootstrap class to see its CSS properties.

<img src="/css-hover-preview.png" alt="CSS Hover Preview" style="max-width: 100%; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>

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

Toggle extension via Status Bar menu: **"Enable/Disable completion"**

## Advanced Settings (settings.json)

Open: `Ctrl+Shift+P` → "Preferences: Open User Settings (JSON)"

```json
"bootstrapIntelliSense": {
  "enable": true,
  "bsVersion": "5.3.7",
  "useLocalFile": false,
  "cssFilePath": "",
  "languageSupport": ["html", "typescript", "typescriptreact", "angular"]
}
```


## Troubleshooting

| Problem | Solution |
|---------|----------|
| Status Bar button not visible | Check extension is installed; reload VS Code |
| Settings not applied | Reload VS Code; check JSON syntax |
| Local file not found | Verify `cssFilePath`; use relative paths |
| Language not working | Add via "Add language support"; check language ID |
