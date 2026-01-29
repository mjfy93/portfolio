import { library } from '@fortawesome/fontawesome-svg-core'

// Import icons you want to use globally
import {
  faLightbulb,
  faHome,
  faUser,
  faEnvelope,
  faLink,
  faDisplay,
  faBook,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faBolt,
  faCertificate
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Add them to the library
library.add(
  faLightbulb,
  faHome,
  faUser,
  faEnvelope,
  faDisplay,
  faGithub,
  faLinkedin,
  faLink,
  faBook,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faBolt,
  faCertificate
)

// Export for potential direct use if needed
export {
  faLightbulb,
  faHome,
  faUser,
  faEnvelope,
  faDisplay,
  faGithub,
  faLinkedin,
  faLink,
  faBook,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faBolt,
  faCertificate
}

// When using the icon, just use the name in lowercase, no 'fa'
// Look at the Navbar.jsx file to see how to use it