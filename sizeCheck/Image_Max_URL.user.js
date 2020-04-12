// ==UserScript==
// @name              Image Max URL
// @namespace         http://tampermonkey.net/
// @version           0.12.23
// @description       Finds larger or original versions of images for 6400+ websites, including a powerful image popup feature
// @description:ko    6400개 이상의 사이트에 대해 고화질이나 원본 이미지를 찾아드립니다
// @description:fr    Trouve des images plus grandes ou originales pour plus de 6400 sites
// @description:es    Encuentra imágenes más grandes y originales para más de 6400 sitios
// @description:ru    Находит увеличенные или оригинальные версии изображений для более чем 6400 веб-сайтов
// @description:zh    为6400多个网站查找更大或原始图像
// @description:zh-CN 为6400多个网站查找更大或原始图像
// @description:zh-TW 為6400多個網站查找更大或原始圖像
// @description:zh-HK 為6400多個網站查找更大或原始圖像
// @author            qsniyg
// @homepageURL       https://qsniyg.github.io/maxurl/options.html
// @supportURL        https://github.com/qsniyg/maxurl/issues
// @icon              https://raw.githubusercontent.com/qsniyg/maxurl/b5c5488ec05e6e2398d4e0d6e32f1bbad115f6d2/resources/logo_256.png
// @include           *
// @grant             GM.xmlHttpRequest
// @grant             GM_xmlhttpRequest
// @grant             GM.setValue
// @grant             GM_setValue
// @grant             GM.getValue
// @grant             GM_getValue
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_addValueChangeListener
// @grant             GM_download
// @grant             GM_openInTab
// @grant             GM.openInTab
// @connect           *
// api.github.com is used for checking for updates (can be disabled through the "Check Updates" setting)
// @connect           api.github.com
// @run-at            document-start
// @license           Apache-2.0
// ==/UserScript==
