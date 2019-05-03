package org.duckdns.owly.locate_me.wl.proxy.client;

import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.QueryValue;
import io.micronaut.http.client.annotation.Client;
import io.reactivex.Single;
import org.duckdns.owly.locate_me.wl.proxy.domain.WlLocation;

@Client("https://www.wienerlinien.at/ogd_routing/")
public interface WlClient {

    @Get("XML_TRIP_REQUEST2?locationServerActive=1&type_origin=coord&type_destination=coord&outputFormat=JSON")
    Single<String> getRoute(
            @QueryValue("name_origin") String origin,
            @QueryValue("name_destination") String destination);

    default Single<String> getRoute(WlLocation origin, WlLocation destination) {
        return getRoute(origin.format(), destination.format());
    }
}
