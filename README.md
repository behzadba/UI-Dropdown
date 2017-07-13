# Semantic Dropdown

This repository contains pre-compiled Semantic dropdown files using the default themes. This is intended for use in projects that do not need all features of Semantic UI, and want to keep file size to a minimum.


If you're looking for the full version of Semantic including all components and build tools [check out the main project repository](https://github.com/Semantic-Org/Semantic-UI/tree/1.0)


#### Usage Example
```
<head>
<link rel="stylesheet" href="map/dropdown/dropdown.css">
<script src="resources/jquery-3.1.1.min.js"></script>
<script src="dropdown.js"></script>
</head>

<body>
<select name="selection[]" multiple="" class="ui dropdown">
	 <option value="option1">option1</option>
	 <option value="option2">option2</option>
	 <option value="option3">option3</option>
</select>

<script>
$('.dropdown').dropdown({
			         forceSelection:false
			}); 
</script>
</body>

```


## More Examples and Usage

For more example and usage please visit [UI Docs](https://semantic-ui.com/modules/dropdown.html)


