import { NgModule, RendererFactory2, NgZone } from '@angular/core';
import { ServerModule, ɵServerRendererFactory2 } from '@angular/platform-server';
import { NoopAnimationsModule, BrowserAnimationsModule, ɵAnimationRendererFactory } from '@angular/platform-browser/animations';
import { ɵAnimationEngine } from '@angular/animations/browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// declarations
export function instantiateServerRendererFactory(
  renderer: RendererFactory2, engine: ɵAnimationEngine, zone: NgZone) {
  return new ɵAnimationRendererFactory(renderer, engine, zone);
}

const createRenderer = ɵServerRendererFactory2.prototype.createRenderer;

createRenderer.prototype.createRenderer = function () {
  const result = createRenderer.apply(this, arguments);

  const setProperty = result.setProperty;

  result.setProperty = function () {
    try {
      setProperty.apply(this, arguments);
    } catch (e) {
      if (e.message.indexOf('Found the synthetic') === -1) {
        throw e;
      }
    }
  };

  return result;
};

export const SERVER_RENDER_PROVIDERS = [
  {
    provide: RendererFactory2,
    useFactory: instantiateServerRendererFactory,
    deps: [ɵServerRendererFactory2, ɵAnimationEngine, NgZone]
  }
];

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [SERVER_RENDER_PROVIDERS]
})
export class AppServerModule { }
