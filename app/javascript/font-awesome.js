import { config, library, dom } from '@fortawesome/fontawesome-svg-core'

 // Change the config to fix the flicker
config.mutateApproach = 'sync'

import {
  faFacebook,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook);
library.add(faInstagram);
library.add(faLinkedin);

dom.watch()
