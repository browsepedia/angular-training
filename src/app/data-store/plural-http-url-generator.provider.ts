import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer,
} from '@ngrx/data';

@Injectable()
export class PluralHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string
  ): HttpResourceUrls {
    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (!resourceUrls) {
      const nRoot = normalizeRoot(root);
      const dashEntityName = this.myPluralizer
        .pluralize(entityName)
        .replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
      const url = `${nRoot}/${dashEntityName.substr(1)}/`.toLowerCase();

      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url.slice(0, -1),
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
