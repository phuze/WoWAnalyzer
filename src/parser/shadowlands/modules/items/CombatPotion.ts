import SPELLS from 'common/SPELLS';
import Potion from 'parser/shadowlands/modules/items/Potion';

/**
 * Tracks combat potion cooldown (DPS, HPS, mana, mitigation).
 */
class CombatPotion extends Potion {
  static spells = [
    SPELLS.POTION_OF_SPECTRAL_INTELLECT.id,
    SPELLS.POTION_OF_SPECTRAL_STRENGTH.id,
    SPELLS.POTION_OF_SPECTRAL_AGILITY.id,
    SPELLS.POTION_OF_SPECTRAL_STAMINA.id,
    SPELLS.POTION_OF_DEATHLY_FIXATION.id,
    SPELLS.POTION_OF_EMPOWERED_EXORCISMS.id,
    SPELLS.POTION_OF_PHANTOM_FIRE.id,
    SPELLS.POTION_OF_DIVINE_AWAKENING.id,
    SPELLS.POTION_OF_SACRIFICIAL_ANIMA.id,
    SPELLS.POTION_OF_HARDENED_SHADOWS.id,
    SPELLS.SPIRITUAL_MANA_POTION.id,
    SPELLS.SPIRITUAL_REJUVENATION_POTION.id,
    SPELLS.POTION_OF_SPIRITUAL_CLARITY.id,
  ];
  static recommendedEfficiency = 0;
  static extraAbilityInfo = {
    name: 'Combat Potion',
    buffSpellId: [
      SPELLS.POTION_OF_SPECTRAL_INTELLECT.id,
      SPELLS.POTION_OF_SPECTRAL_STRENGTH.id,
      SPELLS.POTION_OF_SPECTRAL_AGILITY.id,
      SPELLS.POTION_OF_SPECTRAL_STAMINA.id,
      SPELLS.POTION_OF_DEATHLY_FIXATION.id,
      SPELLS.POTION_OF_EMPOWERED_EXORCISMS.id,
      SPELLS.POTION_OF_PHANTOM_FIRE.id,
      SPELLS.POTION_OF_DIVINE_AWAKENING.id,
      SPELLS.POTION_OF_SACRIFICIAL_ANIMA.id,
      SPELLS.POTION_OF_HARDENED_SHADOWS.id,
      SPELLS.SPIRITUAL_MANA_POTION.id,
      SPELLS.SPIRITUAL_REJUVENATION_POTION.id,
      SPELLS.POTION_OF_SPIRITUAL_CLARITY.id,
    ],
  };
}

export default CombatPotion;
