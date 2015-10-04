<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output encoding="UTF-8"
                method="xml"
                omit-xml-declaration="yes"
                indent="yes"/>
    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <tr><th>Titles</th></tr>
                    <xsl:for-each select="catalog/journal">
                        <tr><td>
                            <xsl:apply-templates select=".">
                            </xsl:apply-templates>
                        </td></tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="journal">
        <xsl:value-of select="@title"/>
    </xsl:template>
</xsl:stylesheet>