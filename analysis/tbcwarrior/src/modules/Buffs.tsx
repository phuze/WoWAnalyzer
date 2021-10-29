import BLOODLUST_BUFFS from 'game/BLOODLUST_BUFFS';
import CoreBuffs from 'parser/core/modules/Buffs';

import * as SPELLS from '@wowanalyzer/tbc-warrior/src/SPELLS';

class Buffs extends CoreBuffs {
  buffs() {
    return [
      {
        spellId: SPELLS.SHIELD_BLOCK,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.SHIELD_WALL,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.LAST_STAND,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.COMMANDING_SHOUT,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.BATTLE_SHOUT,
        timelineHighlight: true,
      },
      {
        spellId: Object.keys(BLOODLUST_BUFFS).map((item) => Number(item)),
        timelineHighlight: true,
      },
    ];
  }
}

export default Buffs;
