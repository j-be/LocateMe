package org.duckdns.owly.locate_me.wl.proxy.controllers;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import org.duckdns.owly.locate_me.wl.proxy.client.WlClient;
import org.duckdns.owly.locate_me.wl.proxy.domain.WlLocation;

import javax.inject.Inject;

@Controller("/route")
public class WlProxy {

    @Inject
    private WlClient wlClient;

    @Get(value = "/{latOrigin}/{lonOrigin}/{latDestination}/{lonDestination}", produces = MediaType.APPLICATION_JSON)
    public HttpResponse<String> getRoute(String latOrigin, String lonOrigin, String latDestination, String lonDestination) {
        return HttpResponse.ok(wlClient.getRoute(
                new WlLocation(latOrigin, lonOrigin),
                new WlLocation(latDestination, lonDestination))
                .blockingGet())
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET");
    }
}
