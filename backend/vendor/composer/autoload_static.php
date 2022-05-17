<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd75539ee350547a86286ba518b0856ee
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Model\\' => 6,
        ),
        'C' => 
        array (
            'Controllers\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Model\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Model',
        ),
        'Controllers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Controllers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd75539ee350547a86286ba518b0856ee::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd75539ee350547a86286ba518b0856ee::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd75539ee350547a86286ba518b0856ee::$classMap;

        }, null, ClassLoader::class);
    }
}
