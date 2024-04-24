Path:
from `<tpd-widgets>/projects/commons/src/lib` to `<tpd-web-libs>/src/libs`

---

\***\*\*\*\*\*\*\*** INTERFACE \***\*\*\*\*\***\*\***\*\*\*\*\***

---

```
import { Data } from '@angular/router';
import { ValidatorFn } from '@angular/forms';

export interface UsGenericInputInt {
  controlName: string;
  required?: boolean;
  errorsMessages?: Data;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  initialValue?: string;
  validators?: Array<ValidatorFn>;
  tooltip?: string;
}
```

```
export interface UsGenericInputInt<Data, ValidatorFn> {
  controlName: string;
  required?: boolean;
  errorsMessages?: Data;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  initialValue?: string;
  validators?: Array<ValidatorFn>;
  tooltip?: string;
}
```

---

\***\*\*\*\*\*\*\*** MODULE \***\*\*\*\*\***\*\***\*\*\*\*\***

---

```
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCommunicator } from './common/base-communicator.service';
import { MockService } from './common/mock.service';

import { UserInfoService } from './user-info/user-info.service';
import { IndirizziService } from './indirizzi/indirizzi.service';
import { FascicoliInformativiService } from './fascicoli-informativi/fascicoli-informativi.service';
import { ConfiguratoriRamiElementaliService } from './configuratori-rami-elementari/configuratori-rami-elementari.service';
import { PreventivatoreAutoService } from './preventivatore-auto/preventivatore-auto.service';
import { LocatorService } from './locator/locator.service';
import { VariazioneDatiAgenzialiService } from './variazione-dati-agenziali/variazione-dati-agenziali.service';
import { SearchSemanticoService } from './search-semantico/search-semantico.service';

@NgModule({
  imports: [CommonModule],
  bootstrap: []
})
export class NetworkModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NetworkModule,
      providers: [
        BaseCommunicator,
        MockService,
        UserInfoService,
        IndirizziService,
        FascicoliInformativiService,
        ConfiguratoriRamiElementaliService,
        PreventivatoreAutoService,
        LocatorService,
        VariazioneDatiAgenzialiService,
        SearchSemanticoService
      ]
    };
  }
}
```

```
import { BaseCommunicator } from './common/base-communicator.service';
import { MockService } from './common/mock.service';
import { UserInfoService } from './user-info/user-info.service';
import { IndirizziService } from './indirizzi/indirizzi.service';
import { FascicoliInformativiService } from './fascicoli-informativi/fascicoli-informativi.service';
import { ConfiguratoriRamiElementaliService } from './configuratori-rami-elementari/configuratori-rami-elementari.service';
import { PreventivatoreAutoService } from './preventivatore-auto/preventivatore-auto.service';
import { LocatorService } from './locator/locator.service';
import { VariazioneDatiAgenzialiService } from './variazione-dati-agenziali/variazione-dati-agenziali.service';
import { SearchSemanticoService } from './search-semantico/search-semantico.service';


export function NetworkModuleFactory({ NgModule, ModuleWithProviders, CommonModule }) {
  @NgModule({
    imports: [CommonModule],
    bootstrap: []
  })
  class NetworkModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: NetworkModule,
        providers: [
          BaseCommunicator,
          MockService,
          UserInfoService,
          IndirizziService,
          FascicoliInformativiService,
          ConfiguratoriRamiElementaliService,
          PreventivatoreAutoService,
          LocatorService,
          VariazioneDatiAgenzialiService,
          SearchSemanticoService
        ]
      };
    }
  }

  return NetworkModule;
}


```
