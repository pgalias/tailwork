import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { BasicAlert } from '../../../components/alerts';
import { Section } from '../types';

export const Alerts: Section = {
  title: 'Alerts',
  icon: faExclamationCircle,
  components: {
    basic: { component: BasicAlert, url: '/alerts/basic' },
  },
};
