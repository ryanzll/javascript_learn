<?php
header('Content-Type: text/xml');
header("Cache-Control: no-cache, must-revalidate");
echo '<?xml version="1.0" encoding="ISO-8859-1"?>';
$output = "<selectChoice>
  <selectElement>
    <formName>Form1</formName>
    <formElem>ddlTerritory</formElem>
  </selectElement>
  <entry>
    <optionText>Select A Territory</optionText>
    <optionValue>-1</optionValue>
  </entry>
  <entry>
    <optionText>TerritoryDescription</optionText>
    <optionValue>TerritoryID</optionValue>
  </entry>
</selectChoice>";
print($output);
?>
