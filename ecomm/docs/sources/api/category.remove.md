# category.remove

This method is used to remove a Category

# Arguments

This method has the URL https://server/services/catalog/v1/category.remove and 
follows the MicroBase API calling conventions.

Argument | Example | Required | Description
---------|---------|----------|------------
token | Bearer xxxxx... | true | Authentication token
id | SJlkcsaQ | true | The id of the Category remove

# Response

Returns a default response
```javascript
{
    "ok": true
}
```

# Errors

Expected errors that this method could return. Some errors return additional data.

Error | Data | Description
------|------|------------
category_not_found | The id not found | The Category was not found
category_not_empty | - | The Category has products therefore it cannot be deleted

# Example
```bash
curl --request POST \
  --url 'http://localhost:3000/services/catalog/v1/category.remove?id=SJlkcsaQ \
  --header 'authorization: Bearer xxxxx...' \
  --header 'accept: application/json' \
  --header 'content-type: application/json'
```
