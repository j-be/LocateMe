package org.duckdns.owly.locate_me.wl.proxy.domain;

public class WlLocation {
    private String lat;
    private String lon;

    public WlLocation(String lat, String lon) {
        this.lat = lat;
        this.lon = lon;
    }

    public String format() {
        return lon + ":" + lat + ":WGS84";
    }
}
