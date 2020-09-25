# GISaApp

[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)

Models:

1. `Inc` - Each Incoming Location

   | Field     | Type          | Meaning                                                |
   | --------- | ------------- | ------------------------------------------------------ |
   | `name`    | `string`      | The Name of the Location itself                        |
   | `description`  | `string`      |The Description of the Location |
   | `location`    | `srid=4326`      | The Location coordinates.|
   
   
   
 | API Endpoint                    | Details                                                                                 |
   | --------------------------- | --------------------------------------------------------------------------------------- |
   | `GET /dataset`               | List all locations in the database as a GeoJson             |
