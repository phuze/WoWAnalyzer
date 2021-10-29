import SPELLS from 'common/SPELLS';
import RESOURCE_TYPES from 'game/RESOURCE_TYPES';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import Events, { SpendResourceEvent } from 'parser/core/Events';
import SpellUsable from 'parser/shared/modules/SpellUsable';

/**
 * Restless Blades
 * Finishing moves reduce the remaining cooldown of Adrenaline Rush, Between the Eyes, Sprint, Grappling Hook, Ghostly Strike, Marked for Death, Blade Rush, Killing Spree and Vanish by 1 sec per combo point spent.
 */

const AFFECTED_ABILITIES: number[] = [
  SPELLS.ADRENALINE_RUSH.id,
  SPELLS.BETWEEN_THE_EYES.id,
  SPELLS.SPRINT.id,
  SPELLS.GRAPPLING_HOOK.id,
  SPELLS.GHOSTLY_STRIKE_TALENT.id,
  SPELLS.MARKED_FOR_DEATH_TALENT.id,
  SPELLS.BLADE_RUSH_TALENT.id,
  SPELLS.KILLING_SPREE_TALENT.id,
  SPELLS.VANISH.id,
];

class RestlessBlades extends Analyzer {
  static dependencies = {
    spellUsable: SpellUsable,
  };
  protected spellUsable!: SpellUsable;

  constructor(options: Options) {
    super(options);
    this.addEventListener(Events.SpendResource.by(SELECTED_PLAYER), this.onSpendResource);
  }

  onSpendResource(event: SpendResourceEvent) {
    const spent = event.resourceChange;
    if (event.resourceChangeType !== RESOURCE_TYPES.COMBO_POINTS.id) {
      return;
    }

    let cdr = 1000;
    if (this.selectedCombatant.hasBuff(SPELLS.TRUE_BEARING.id)) {
      cdr += 1000;
    }
    const amount = cdr * spent;

    AFFECTED_ABILITIES.forEach((spell) => this.reduceCooldown(spell, amount));
  }

  reduceCooldown(spellId: number, amount: number) {
    if (this.spellUsable.isOnCooldown(spellId)) {
      this.spellUsable.reduceCooldown(spellId, amount);
    }
  }
}

export default RestlessBlades;
