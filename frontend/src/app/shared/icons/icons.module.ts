import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faMask,
  faSpinner,
  faHome,
  faPeopleCarry,
  faSign,
  faSignInAlt,
  faUser,
  faUserFriends,
  faTools,
  faTag,
  faRunning,
  faSwimmer
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faMask,
      faSpinner,
      faHome,
      faPeopleCarry,
      faSign,
      faSignInAlt,
      faUser,
      faUserFriends,
      faTools,
      faTag,
      faRunning,
      faSwimmer
    );
  }
}
