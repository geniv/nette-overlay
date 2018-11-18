<?php declare(strict_types=1);

use GeneralForm\ITemplatePath;
use Nette\Application\UI\Control;
use Nette\Localization\ITranslator;


/**
 * Class Overlay
 *
 * @author  geniv, MartinFugess
 */
class Overlay extends Control implements ITemplatePath
{
    /** @var ITranslator */
    private $translator = null;
    /** @var string */
    private $templatePath;


    /**
     * Overlay constructor.
     *
     * @param ITranslator|null $translator
     */
    public function __construct(ITranslator $translator = null)
    {
        parent::__construct();

        $this->translator = $translator;

        // implicit path
        $this->templatePath = [
            'begin' => __DIR__ . '/OverlayBegin.latte',
            'end'   => __DIR__ . '/OverlayEnd.latte',
        ];
    }


    /**
     * Set template path.
     *
     * @param string $path
     */
    public function setTemplatePath(string $path)
    {
        $this->templatePath['begin'] = $path;
    }


    /**
     * Set template path.
     *
     * @param string $pathBegin
     * @param string $pathEnd
     */
    public function setTemplatePathBoth(string $pathBegin, string $pathEnd)
    {
        $this->templatePath['begin'] = $pathBegin;
        $this->templatePath['end'] = $pathEnd;
    }


    /**
     * Render begin.
     *
     * @param string      $name
     * @param string|null $class
     */
    public function renderBegin(string $name, string $class = null)
    {
        $template = $this->getTemplate();

        $template->name = $name;
        $template->class = $class;

        $template->setTranslator($this->translator);
        $template->setFile($this->templatePath['begin']);
        $template->render();
    }


    /**
     * Render end.
     */
    public function renderEnd()
    {
        $template = $this->getTemplate();

        $template->setTranslator($this->translator);
        $template->setFile($this->templatePath['end']);
        $template->render();
    }
}
