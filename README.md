# GISaApp

[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)

Models:

1. `Shop` - Each Shop Location

   | Field     | Type          | Meaning                                                |
   | --------- | ------------- | ------------------------------------------------------ |
   | `name`    | `string`      | The Name of the Location itself                        |
   | `description`  | `string`      |The Description of the Location |
   | `location`    | `srid=4326`      | The Location coordinates.|
   
   
   
 | API Endpoint                    | Details                                                                                 |
   | --------------------------- | --------------------------------------------------------------------------------------- |
   | `GET /dataset`               | List all locations in the database as a GeoJson             |



-All Docker Images are fine except for the geodjango image it does not seem to have a fixed behaviour.  
-A GeoJSON file is provided if you want to use it in the DB or import it.  
-The DB docker instance has postgis extension enabled it is enabled by the default postgres user.  
-The frontend and the backend have different docker files   
-docker-compose up for each application.  
