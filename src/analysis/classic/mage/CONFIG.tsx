import { t } from '@lingui/macro';
import { Klex } from 'CONTRIBUTORS';
import Expansion from 'game/Expansion';
import PRIMARY_STATS from 'game/PRIMARY_STATS';
import ROLES from 'game/ROLES';
import { Icon } from 'interface';
import Config from 'parser/Config';

import CHANGELOG from './CHANGELOG';

export enum Build {
  DEFAULT = 'default',
}

const config: Config = {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list. If someone goes MIA, they may be removed after major changes or during a new expansion.
  contributors: [Klex],
  expansion: Expansion.WrathOfTheLichKing,
  // The WoW client patch this spec was last updated.
  patchCompatibility: '3.4.0',
  isPartial: true,
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: <>Analysis for Classic WotLK Mages.</>,
  pages: {
    overview: {
      hideChecklist: true,
      text: <>Classic WotLK support is still a Work in Progress.</>,
      type: 'info',
    },
  },
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport: '/report/PJFahjyTHXz93wCt/47-Normal+Sapphiron+-+Kill+(2:33)/Jurgy',
  builds: {
    [Build.DEFAULT]: {
      url: 'standard',
      name: '56/3/12',
      talents: [56, 3, 12],
      icon: <Icon icon="spell_arcane_blast" />,
      visible: true,
    },
  },
  timeline: {
    separateCastBars: [],
  },

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: {
    id: 0,
    index: 0,
    type: 'Mage',
    className: t({
      id: 'specs.mage',
      message: `Mage`,
    }),
    specName: t({
      id: 'specs.mage.arcane',
      message: `Arcane`,
    }),
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    ranking: {
      class: 4,
      spec: 1,
    },
  },
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () =>
    import('./CombatLogParser' /* webpackChunkName: "ClassicMage" */).then(
      (exports) => exports.default,
    ),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: __dirname,
};

export default config;
