<?php declare(strict_types=1);

use GeneralForm\ITemplatePath;


/**
 * Interface IOverlay
 *
 * @author  geniv
 */
interface IOverlay extends ITemplatePath
{
    /**
     * Set template path.
     *
     * @param string $pathBegin
     * @param string $pathEnd
     */
    public function setTemplatePathBoth(string $pathBegin, string $pathEnd);
}
