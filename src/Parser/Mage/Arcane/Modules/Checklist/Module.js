import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import CastEfficiency from 'Parser/Core/Modules/CastEfficiency';
import Combatants from 'Parser/Core/Modules/Combatants';
import PreparationRuleAnalyzer from 'Parser/Core/Modules/Features/Checklist2/PreparationRuleAnalyzer';

import ArcaneFamiliar from '../Features/ArcaneFamiliar';
import ArcaneOrb from '../Features/ArcaneOrb';
import ArcanePower from '../Features/ArcanePower';
import RuleOfThrees from '../Features/RuleOfThrees';
import TimeAnomaly from '../Features/TimeAnomaly';
import ArcaneMissiles from '../Features/ArcaneMissiles';
import AlwaysBeCasting from '../Features/AlwaysBeCasting';
import ManaValues from '../ManaChart/ManaValues';
import ArcaneIntellect from '../../../Shared/Modules/Features/ArcaneIntellect';
import CancelledCasts from '../../../Shared/Modules/Features/CancelledCasts';
import MirrorImage from '../../../Shared/Modules/Features/MirrorImage';
import RuneOfPower from '../../../Shared/Modules/Features/RuneOfPower';

import Component from './Component';

class Checklist extends Analyzer {
  static dependencies = {
    combatants: Combatants,
    castEfficiency: CastEfficiency,
    arcaneFamiliar: ArcaneFamiliar,
    arcaneOrb: ArcaneOrb,
    arcanePower: ArcanePower,
    ruleOfThrees: RuleOfThrees,
    timeAnomaly: TimeAnomaly,
    arcaneMissiles: ArcaneMissiles,
    manaValues: ManaValues,
    arcaneIntellect: ArcaneIntellect,
    cancelledCasts: CancelledCasts,
    mirrorImage: MirrorImage,
    runeOfPower: RuneOfPower,
    alwaysBeCasting: AlwaysBeCasting,
    preparationRuleAnalyzer: PreparationRuleAnalyzer,
  };

  render() {
    return (
      <Component
        combatant={this.combatants.selected}
        castEfficiency={this.castEfficiency}
        thresholds={{
          ...this.preparationRuleAnalyzer.thresholds,
          
          downtimeSuggestionThresholds: this.alwaysBeCasting.downtimeSuggestionThresholds,
          arcaneFamiliarUptime: this.arcaneFamiliar.suggestionThresholds,
          arcaneOrbAverageHits: this.arcaneOrb.averageHitThresholds,
          arcanePowerCooldown: this.arcanePower.cooldownSuggestionThresholds,
          arcanePowerManaUtilization: this.arcanePower.manaUtilizationThresholds,
          arcanePowerCasts: this.arcanePower.castSuggestionThresholds,
          arcanePowerOnKill: this.arcanePower.arcanePowerOnKillSuggestionThresholds,
          ruleOfThreesUsage: this.ruleOfThrees.suggestionThresholds,
          timeAnomalyManaUtilization: this.timeAnomaly.manaUtilizationThresholds,
          arcaneMissilesUtilization: this.arcaneMissiles.missilesSuggestionThresholds,
          manaOnKill: this.manaValues.suggestionThresholds,
          arcaneIntellectUptime: this.arcaneIntellect.suggestionThresholds,
          cancelledCasts: this.cancelledCasts.suggestionThresholds,
          runeOfPowerBuffUptime: this.runeOfPower.roundedSecondsSuggestionThresholds,
        }}
      />
    );
  }
}

export default Checklist;