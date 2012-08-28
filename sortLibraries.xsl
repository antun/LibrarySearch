<?xml version="1.0" ?> 
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <libraries>
        <xsl:for-each select="libraries/library">
            <xsl:sort select="name" data-type="text" order="ascending"/>
            <library>
                <name><xsl:value-of select="name"/></name>
                <url><xsl:value-of select="url"/></url>
            </library>
        </xsl:for-each>
        </libraries>
    </xsl:template>
</xsl:stylesheet>
