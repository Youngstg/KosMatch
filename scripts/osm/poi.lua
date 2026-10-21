-- osm2pgsql flex configuration for KosMatch POI extraction
-- Maps relevant OSM amenities and shops to KosMatch POI categories:
-- food, laundry, convenience, pharmacy, worship, bus_stop, atm, supermarket, marketplace

local pois = osm2pgsql.define_table({
    name = 'pois',
    schema = 'public',
    columns = {
        { column = 'osm_type', type = 'text', not_null = true },
        { column = 'osm_id', type = 'int8', not_null = true },
        { column = 'category', type = 'text', not_null = true },
        { column = 'name', type = 'text' },
        { column = 'tags', type = 'jsonb' },
        { column = 'geom', type = 'point', projection = 4326, not_null = true },
    }
})

local function categorize(tags)
    if not tags then return nil end
    local amenity = tags.amenity
    local shop = tags.shop
    local highway = tags.highway

    if amenity == 'restaurant' or amenity == 'cafe' or amenity == 'fast_food' or amenity == 'food_court' then
        return 'food'
    elseif shop == 'laundry' then
        return 'laundry'
    elseif shop == 'convenience' then
        return 'convenience'
    elseif shop == 'supermarket' then
        return 'supermarket'
    elseif amenity == 'marketplace' then
        return 'marketplace'
    elseif amenity == 'pharmacy' then
        return 'pharmacy'
    elseif amenity == 'place_of_worship' then
        return 'worship'
    elseif highway == 'bus_stop' or amenity == 'bus_station' then
        return 'bus_stop'
    elseif amenity == 'atm' or amenity == 'bank' then
        return 'atm'
    end

    return nil
end

function osm2pgsql.process_node(object)
    local category = categorize(object.tags)
    if not category then return end

    pois:insert({
        osm_type = 'N',
        osm_id = object.id,
        category = category,
        name = object.tags.name,
        tags = object.tags,
        geom = object:as_point()
    })
end

function osm2pgsql.process_way(object)
    local category = categorize(object.tags)
    if not category then return end

    local geom = nil
    if object.is_closed then
        local poly = object:as_polygon()
        if poly then
            geom = poly:centroid()
        end
    end

    if not geom then
        geom = object:as_linestring():centroid()
    end

    if geom then
        pois:insert({
            osm_type = 'W',
            osm_id = object.id,
            category = category,
            name = object.tags.name,
            tags = object.tags,
            geom = geom
        })
    end
end
