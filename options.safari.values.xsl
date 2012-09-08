<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html"/>

    <xsl:template match="/">
        <xsl:apply-templates select="libraries/library"/>
    </xsl:template>

    <xsl:template match="library">
        <string><xsl:value-of select="url"/></string>
    </xsl:template>

</xsl:stylesheet>
