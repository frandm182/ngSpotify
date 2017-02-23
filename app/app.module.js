"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var about_component_1 = require("./components/about/about.component");
var search_component_1 = require("./components/search/search.component");
var artist_component_1 = require("./components/artist/artist.component");
var album_component_1 = require("./components/album/album.component");
var spotify_service_1 = require("./services/spotify.service");
var appRoutes = [
    { path: '', component: search_component_1.SearchComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'artist/:id', component: artist_component_1.ArtistComponent },
    { path: 'album/:id', component: album_component_1.AlbumComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, about_component_1.AboutComponent, search_component_1.SearchComponent, artist_component_1.ArtistComponent, album_component_1.AlbumComponent],
        providers: [spotify_service_1.SpotifyService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map