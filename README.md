Nette overlay
=============

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
"php": ">=5.6.0",
"nette/nette": ">=2.4.0"
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
    //$overlay->setTemplatePath('','');
    return $overlay;
}
```

usage:
```latte
<a href="#" class="nette-overlay-open" data-specific="custom-layer-1">Open custom layer #1</a>

...
{control overlay:begin 'custom-layer-1'}
{control overlay:begin 'custom-layer-1', ''}
content
{control overlay:end}
```
