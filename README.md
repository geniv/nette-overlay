Overlay
=======

Installation
------------
```sh
$ composer require geniv/nette-overlay
```
or
```json
"geniv/nette-overlay": ">=1.0.0"
```

require:
```json
"php": ">=7.0.0",
"nette/nette": ">=2.4.0",
"geniv/nette-general-form": ">=1.0.0"
```

Include in application
----------------------
neon configure:
```neon
services:
    - Overlay
```

usage:
```php
protected function createComponentOverlay(Overlay $overlay): Overlay
{
    //$overlay->setTemplatePath(__DIR__.'/templates/overlayBegin.latte');
    //$overlay->setTemplatePathBoth(__DIR__.'/templates/overlayBegin.latte',__DIR__.'/templates/overlayEnd.latte');
    return $overlay;
}
```

usage:

_data-specific_ in href `custom-layer-1` correspond name by in `{control overlay:begin ...`
```latte
<a href="#" class="nette-overlay__open" data-specific="custom-layer-1" data-body-padding-fix="true" data-body-overflow-fix="true">Open custom layer #1</a>
...
{control overlay:begin 'custom-layer-1'}
or
{control overlay:begin 'custom-layer-1', 'class-modifier'}
content
{control overlay:end}
```

or extreme usage, better usage is: Multiplier
```php
protected function createComponentOverlay1(Overlay $overlay): Overlay
{
    $overlay = clone $overlay;
    //$overlay->setTemplatePath(__DIR__.'/templates/overlayBegin.latte');
    return $overlay;
}
```
and latte:
```latte
{control overlay1:begin 'custom-layer-2'}form{control overlay1:end}
```

JS:
```javascript
netteOverlayOpen([specificNetteOverlay, firstFocus, bodyOverflowFix, bodyPaddingFix]);
netteOverlayClose();
```
