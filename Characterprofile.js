const Main = document.getElementById("MainContent");
const Options = document.getElementById("dropbox");

const classChoice = document.getElementById("ClassSelect");

const classSelect = document.getElementById("classSelect");
const subclassSelect = document.getElementById("SubclassSelect");
const subclassDescription = document.getElementById("subclassDescription");

    const CLASS_DATA = [
        { 
            ClassName: "Artificer", 
            hitDice:8,
            primaryAttribute:['CON','INT'], 
            spellAttribute: 'INT', 
            isHalfCast: true,
            subClass:[
                        ['Alchemist', 'An Alchemist is an expert at combining reagents to produce magical effects. Alchemists use their creations to give life and to leech it away.'],
                        ['Armorer', 'An artificer who specializes as an Armorer modifies armor to function almost like a second skin. The armor is enhanced to hone the artificers magic, unleash potent attacks, and generate a formidable defense. The artificer bonds with this armor, becoming one with it even as they experiment with it and refine its magical capabilities.'],
                        ['Artillerist', 'An Artillerist specializes in using magic t o hurl energy, projectiles, and explosions on a battlefield. This destructive power was valued by all the armies of the Last War. Now that the war is over, some members of this specialization have sought to build a more peaceful world by using their powers to fight the resurgence of strife in Khorvaire. The gnome artificer Vi, an unlikely yet key member of House Canniths warforged project, has been especially vocal about making things right: "Its about time we fixed things instead of blowing them all to hell."'],
                        ['BattleSmith', 'Battle-Ready: INT for weapon attacks. Steel Defender: loyal mechanical pet that fights for you. Extra Attack at 5th.'],
                        ['Cartographer', 'Map Mastery: advantage on Navigation checks. Territorial Awareness: bonus action to mark an area, granting allies +1 AC and primaryAttribute while in it. At higher levels, create Cartographic Traps and Shortcut routes.'],
            ]
        },
  { 
            ClassName: "Barbarian",
            hitDice:12, 
            primaryAttribute:"STR,CON", 
            spellAttribute:null,
            subClass:[  
                    ['Path of the Berserker', 'official', 'Frenzy: bonus action unarmed strike while raging. Mindless Rage: immune to charm/fright while raging. Retaliation: reaction attack when hit.'],
                    ['Path of the Totem Warrior', 'official', 'Totem Spirit: Bear (resistance to all dmg), Eagle (no OA), Wolf (allies adv vs enemies near you). Totem bonuses scale.'],
                    ['Path of the Ancestral Guardian','official', 'Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.'],
                    ['Path of the Battlerager', 'official', 'Spiked armor deals damage on grapple. Reckless Abandon adds temp HP on Reckless Attack. Requires Dwarf.'],
                    ['Path of the Storm Herald', 'official', 'Aura of lightning, fire, or cold. Desert: fire damage; Sea: lightning; Tundra: temp HP to allies.'],
                    ['Path of the Zealot',  'official',    'Divine Fury: extra radiant/necrotic damage. Warrior of the Gods: resurrection spells use no material components. Rage at death.'],
                    ['Path of the Beast',   'official',    'Beast Aspect: claws, bite, or tail. Bestial Soul: swim/climb speed or jump. Call the Hunt: allies gain temp HP.'],
                    ['Path of Wild Magic',  'official',    'Wild Surge: random magical effects when raging. Magic Awareness: detect spells. Unstable Backlash: redirect damage to Wild Surge.'],
                    ['Path of the Juggernaut',  'Homebrew', 'Unstoppable: cannot be knocked prone while raging. Pulverizing Blow: knock enemies back 15ft on hit. Overwhelming Cleave: attack multiple creatures in a line. Juggernaut\'s Rush: charge through enemies.'],
                    ['Path of the Dragon',      'Homebrew', 'Draconic Rage: breath weapon during rage, choose damage type. Dragon Hide: natural AC. Frightful Presence: frighten enemies on rage entry. Wings at 14th level.'],
                ]
  },
  { 
   ClassName: "Bard", 
    hitDice:8, 
    primaryAttribute:['DEX','CHA'], 
    spellAttribute:'CHA',
    subClass:[
            ['College of Lore',      'official',   'Bonus Proficiencies (3 skills). Cutting Words: reduce enemy attack/check with Bardic Inspiration. Magical Secrets (6th instead of 10th). Peerless Skill.'],
            ['College of Valor',     'official',   'Bonus Proficiencies: medium armor, shields, martial weapons. Combat Inspiration: Bardic die to damage/AC. Extra Attack at 6th.'],
            ['College of Glamour',   'official',   'Mantle of Inspiration: temp HP + free move to allies. Enthralling Performance: charm crowd. Mantle of Majesty: command as bonus action for 1 min.'],
            ['College of Swords',    'official',   'Bonus Proficiency: medium armor, scimitars. Blade Flourish: Defensive, Slashing, Mobile flourishes using Bardic die. Extra Attack.'],
            ['College of Eloquence', 'official',   'Silver Tongue: min 10 on Persuasion/Deception. Unsettling Words: reduce target save. Infectious Inspiration: refund Bardic die when it helps.'],
            ['College of Creation',  'official',   'Mote of Potential: extra effects when Bardic die used. Performance of Creation: create large nonmagical object. Animating Performance: animated objects.'],
            ['College of Spirits',   'official',   'Guiding Whispers: spare the dying cantrip. Spiritual Focus: bonus to spell damage. Tales from Beyond: d6 table random spirit powers.'],
            ['College of Whispers',  'official',   'Psychic Blades: extra psychic damage with Bardic die. Words of Terror: frighten targets. Mantle of Whispers: steal identity of slain humanoid.'],
            ['College of Tragedy',   'official',   'Bonus Proficiency: Performance. Subtle Magic: illusion/enchantment spells ignore resistances. Bewitching Performance: charm on performance. Tragic Inspiration: Bardic die to ability checks.'],
            ['College of the Moon',  'official',   'Bonus Proficiency: Performance. Moonlit Shroud: illusion spells ignore invisibility. Lunar Inspiration: Bardic die to damage or healing. Unfathomable Inspiration: Bardic die can be used on death saving throws.'],
            ['College of Tragedy',   'Homebrew',   ' Poetry in Misery: regain Bardic Inspiration when ally fails a check. Sorrowful Fate: impose disadvantage on a death save. Tale of Hubris: exploit enemy crits. Inevitable Demise: escalating damage on cursed targets.'],
        ]
  },
   { 
    ClassName:"Cleric",
    hitDice:8, 
    primaryAttribute:['WIS','CHA'], 
    spellAttribute:'WIS',
    subClass:[
            ['Life Domain',        'official',      'Bonus: heavy armor. Disciple of Life: heals restore extra 2+spell level HP. Preserve Life: channel to spread HP among allies.'],
            ['Light Domain',       'official',      'Bonus: light cantrip. Warding Flare: impose disadvantage on attacker. Radiance of the Dawn: channel to deal radiant and dispel darkness.'],
            ['Trickery Domain',    'official',      'Blessing of the Trickster: adv Stealth. Invoke Duplicity: create illusion duplicate. Cloak of Shadows: become invisible.'],
            ['Knowledge Domain',   'official',       'Blessings of Knowledge: 2 languages, 2 skill proficiencies with expertise. Read Thoughts: channel to read minds. Visions of the Past.'],
            ['War Domain',         'official',       'Bonus: heavy armor, martial weapons. War Priest: weapon attack as bonus action. Guided Strike: channel for +10 to hit.'],
            ['Nature Domain',      'official',      'Bonus: heavy armor, 1 druid cantrip. Dampen Elements: reduce elemental damage to ally. Master of Nature: command charmed animals/plants.'],
            ['Tempest Domain',     'official',      'Bonus: heavy armor, martial weapons. Wrath of the Storm: reaction lightning/thunder. Destructive Wrath: maximize thunder/lightning damage.'],
            ['Death Domain',       'official',      'Bonus: martial weapons. Reaper: cantrips hit two targets. Touch of Death: add necrotic damage on kills. Inescapable Destruction: ignore necrotic resistance.'],
            ['Forge Domain',       'official',     'Bonus: heavy armor, smith tools. Artisan\'s Blessing: create metal items. Blessing of the Forge: give item +1 AC or +1 attack.'],
            ['Grave Domain',       'official',     'Circle of Mortality: maximize dice on 0 HP healing. Eyes of the Grave: sense undead. Sentinel at Death\'s Door: cancel crits. Keeper of Souls.'],
            ['Order Domain',       'official',      'Bonus: heavy armor. Voice of Authority: allies attack after you heal them. Order\'s Demand: channel to charm creatures.'],
            ['Peace Domain',       'official',     'Implement of Peace: proficiency in Insight/Performance/Persuasion. Emboldening Bond: bonded allies can add d4 to checks. Balm of Peace.'],
            ['Twilight Domain',    'official',     'Bonus: heavy armor, martial weapons. Eyes of Night: darkvision 300ft, share with allies. Twilight Sanctuary: aura of protection (temp HP or end charm/fear).'],
            ['Arcana Domain',      'official',   'Arcane Initiate: two wizard cantrips. Spell Breaker: dispel lower-level spells when healing. Arcane Mastery: add high-level wizard spells to list.'],
        ]
  },
  {
    ClassName: "Druid",
    hitDice:8, 
    primaryAttribute:['INT','WIS'], 
    spellAttribute:'WIS',
    subClass:[
            ['Circle of the Land',    'official',  'Bonus Cantrip. Natural Recovery: recover spell slots on short rest. Land bonus spells by terrain type. Nature\'s Ward: immune charm/fright by fey/elementals.'],
            ['Circle of the Moon',    'official',  'Combat Wild Shape: wildshape as bonus action, expend slots for HP. Elemental Wild Shape: become air/earth/fire/water elemental. Enhanced wild shape CR.'],
            ['Circle of Dreams',      'official',  'Balm of the Summer Court: spend Wild Shape uses to heal. Hearth of Moonlight: protect rest location. Hidden Paths: teleport through trees.',]
            ['Circle of the Shepherd','official',  'Speech of the Woods: speak with beasts/plants. Spirit Totem: Hawk/Unicorn/Bear aura in wildshape. Faithful Summons on incapacitation.'],
            ['Circle of Spores',      'official',  'Halo of Spores: reaction necrotic damage. Symbiotic Entity: wildshape charges give temp HP and bonus damage. Spreading Spores. Fungal Infestation.',]
            ['Circle of Stars',       'official',  'Star Map: free Guidance cantrip, Guiding Bolt. Starry Form: Archer/Chalice/Dragon constellation bonuses. Full of Stars: translucence.'],
            ['Circle of Wildfire',    'official',  'Wildfire Spirit familiar for bonus summon damage. Enhanced Bond: teleport and boost spells via spirit. Cauterizing Flames: healing on death.'],
            ['Circle of the Primeval','Homebrew',  '(2022 UA) Keeper of Old: primal beast companion that grows with you. Prehistoric Conduit: boost companion\'s attacks. Titanic Bond: companion grows Large. Eldritch Wilds: companion becomes Huge.'],
            ['Circle of the Blighted', 'Homebrew', '(Homebrew) Blighted Sapling: create a zone of necrotic terrain. Corrupted Wildshape: necrotic energy melds with beast form. Blight Spores: poison and slow enemies. Death Bloom: massive necrotic AoE.'],
        ]
  },
  {
    ClassName: "Fighter",
    hitDice:10, 
    primaryAttribute:['STR','CON'], 
    spellAttribute:null,
    subClass:[
            ['Champion',            'official',      'Improved Critical: crit on 19-20. Remarkable Athlete: half prof to unproficient STR/DEX/CON checks. Additional Fighting Style. Superior Critical (18-20).'],
            ['Battle Master',       'official',      'Combat Superiority: d8 maneuver dice (scale to d10/d12). Choose 3 maneuvers (trip, disarm, feint, riposte, etc.). Know Your Enemy.'],
            ['Eldritch Knight',     'official',      'Spellcasting (INT, abjuration/evocation focus). Weapon Bond: teleport bonded weapon. War Magic: attack after cantrip. Improved War Magic.',]
            ['Arcane Archer',       'official',      'Arcane Shot (2/rest): Banishing, Beguiling, Bursting, Enfeebling, Grasping, Piercing, Seeking, Shadow arrow effects.'],
            ['Cavalier',            'official',      'Bonus Proficiency. Born to the Saddle: mount advantages. Unwavering Mark: mark and punish enemies who attack others. Hold the Line.'],
            ['Samurai',             'official',      'Bonus Proficiency. Fighting Spirit: temp HP + advantage on attacks 3/day. Elegant Courtier: WIS + CHA primaryAttribute. Tireless Spirit. Strength Before Death.'],
            ['Psi Warrior',         'official',      'Psionic Power dice (d6→d12): Protective Field, Psionic Strike, Telekinetic Movement. Telekinetic Adept: flight + forceful step.'],
            ['Rune Knight',         'official',      'Rune Carving: Cloud/Fire/Frost/Stone/Storm runes with passive and triggered effects. Giant\'s Might: grow Large, bonus damage. Runic Shield. Great Stature.'],
            ['Echo Knight',         'official',      'Manifest Echo: create duplicate, swap positions, attack through it. Unleash Incarnation: extra attacks through echo. Echo Avatar: long-range scouting.'],
            ['Purple Dragon Knight','official',      'Rallying Cry: Second Wind heals allies. Royal Envoy: Persuasion expertise. Inspiring Surge: ally attacks on Action Surge. Bulwark: Indomitable for allies.'],
            ['Gunslinger',          'Homebrew',      'Grit: gain grit points to perform special shots. Gunsmith: create a firearm. Quickdraw: draw as part of attack. Special shots: Deadeye, Thunderclap, etc.'],
            ['Banneret',            'official',      'Bonus Proficiency. Rallying Cry: Second Wind heals allies. Royal Envoy: Persuasion expertise. Inspiring Surge: ally attacks on Action Surge. Bulwark: Indomitable for allies.'],
        ]
  },
  {
    ClassName: "Healer",
    hitDice:8, 
    primaryAttribute:['WIS','CON'], 
    spellAttribute:'WIS', 
    subClass:[
            ['Vow of the Martyr',     'Homebrew',  'Healers that take the Vow of the Martyr embody selflessness in its truest form. Through relentless study and practice, they wield powers to spare others from suffering, but at their own expense. The heroism of these Healers has inspired many great works of art, and continues to inspire acts of bravery on the battlefield.'],
            ['Vow of the Augmenter',  'Homebrew',  'Healers who take the Vow of the Augmenter dedicate themselves to the study of life’s potency. Dissatisfied with the limitations of their allies and themselves, they learn transformative magics which make their team-mates stronger, faster and more effective at whatever role they claim. An adventurer never inhabits their full potential until they travel with one of these Healers.'],
            ['Vow of the Protector',  'Homebrew',  'Healers who take the Vow of the Protector are honor-bound to protect their allies from danger in all forms that it takes. Their abjurative magic empowers their healing and conjures radiant barriers to shield their companions from every threat. Their companions rarely fall - and only after the world itself has tried.'],
            ['Vow of the Sipher',     'Homebrew',  'Sipher’s vow: sigils and runes that turn healing into lasting protection and resilience.'],    
        ]
  },
  {
    ClassName: "Monk",
    hitDice:8, primaryAttribute:['STR','DEX'], 
    spellAttribute:null,
    subClass:[
            ['Way of the Open Hand',  'official',    'Open Hand Technique: knock prone, push, deny reactions on Flurry hits. Wholeness of Body: self-heal 3× monk level 1/rest. Tranquility. Quivering Palm.'],
            ['Way of Shadow',         'official',   'Shadow Arts: darkness/darkvision/silence/pass without trace. Shadow Step: teleport between shadows. Cloak of Shadows (invisible in dim). Shadow Strike.'],
            ['Way of the Four Elements','official',   'Elemental Disciplines: spend ki for elemental spells/effects (water whip, flame, earth, air). Ride the Wind, Flames of the Phoenix, etc.'],
            ['Way of the Sun Soul',     'official',  'Radiant Sun Bolt: ranged ki attack. Searing Arc Strike: burning hands with ki. Searing Sunburst: AoE radiant. Sun Shield: light + fire retaliation.'],
            ['Way of the Kensei',      'official',  'Kensei Weapons: chosen weapons become monk weapons. Agile Parry: +2 AC with kensei weapon. Deft Strike: +1d4 damage. Sharpen the Blade: magic bonus.'],
            ['Way of Mercy',           'official',   'Implements of Mercy: Insight/Medicine proficiency, healer kit. Hand of Healing: restore HP with Flurry. Hand of Harm: necrotic damage. Physician\'s Touch.'],
            ['Way of the Astral Self',  'official',  'Arms of the Astral Self: WIS for attacks, bonus action extra attacks. Visage of the Astral Self: darkvision, WIS for Intimidation. Body of the Astral Self.'],
            ['Way of the Ascendant Dragon','official',   'Draconic Disciple: change damage to acid/cold/fire/lightning/poison, speak Draconic. Breath of the Dragon. Wings Unfurled: fly speed.'],
            ['Way of the Drunken Master', 'Homebrew', 'Drunken Technique: Tumble + +10ft speed on Flurry. Tipsy Sway: redirect attacks. Drunkard\'s Luck: adv when both dice show same. Intoxicated Frenzy.'],
            ['Way of the Long Death',   'official',  'Touch of Death: gain temp HP equal to damage dealt to dying creatures. Hour of Reaping: frighten all nearby. Mastery of Death: avoid death with ki. Touch of the Long Death.'],
        ]
  },
  {
    ClassName: "Paladin",
    hitDice:10, 
    primaryAttribute:['WIS','CHA'], 
    spellAttribute:'CHA', 
    isHalf:true,
    subClass:[
            ['Oath of Devotion',       'official',    'Sacred Weapon: +CHA to attacks. Holy Nimbus: 30ft radiant aura harms fiends/undead. Oath spells: Protection from Evil, Aid, Beacon of Hope, Guardian of Faith.'],
            ['Oath of the Ancients',   'official',   'Nature\'s Wrath: restrain target. Turn the Faithless: repel fey/fiends. Elder Champion: regrow limbs, spells as bonus, nature attacks. Spells: Ensnaring Strike, Moonbeam, etc.'],
            ['Oath of Vengeance',      'official',   'Abjure Enemy: frighten one creature. Vow of Enmity: advantage vs target. Relentless Avenger: bonus speed on OA. Soul of Vengeance: bonus attack on Vow target.'],
            ['Oath of Conquest',       'official',   'Conquering Presence: frighten area. Guided Strike: +10 to hit. Aura of Conquest: frightened creatures speed 0, take psychic damage. Invincible Conqueror.'],
            ['Oath of Redemption',     'official',   'Emissary of Peace: +5 to Persuasion. Rebuke the Violent: punish attackers with their own damage. Aura of the Guardian: take ally\'s damage. Protective Spirit.'],
            ['Oath of Glory',          'official',  'Inspiring Smite: distribute temp HP on Divine Smite. Peerless Athlete: adv Athletics/Acrobatics. Aura of Alacrity: speed bonus to allies. Glorious Defense.'],
            ['Oath of the Watchers',   'official',  'Watcher\'s Will: CHA bonus to INT/WIS/CHA primaryAttribute for allies. Abjure the Extraplanar: turn extraplanar creatures. Aura of the Sentinel: +PB to initiative. Mortal Bulwark.'],
            ['Oathbreaker',            'official',  'Dark Blessing: CHA to death primaryAttribute. Control Undead. Aura of Hate: CHA to weapon damage + fiends/undead nearby also gain it. Supernatural Resistance. Dread Lord.'],
            ['Oath of Heroism',        'official',  'Peerless Athlete: adv Athletics/Acrobatics. Inspiring Smite: temp HP on smite. Aura of Alacrity: speed boost. Glorious Defense: deflect attacks with CHA.'],
            ['Oath of the Crown',      'official',  'Champion Challenge: pull enemies into duel. Turn the Tide: heal allies at 0 HP. Divine Allegiance: redirect ally damage to yourself. Unyielding Saint: STR/CON primaryAttribute.'],
            ['Oath of Treachery',      'official',  'Betrayer\'s Tongue: proficiency in Deception and disguise kit. Heartbreaker: CHA to damage against charmed targets. Mace of Treachery: magic weapon that can turn on you. Traitor\'s Fate.'],
            ['Oath of the Dragon',     'official',  'Dragon\'s Breath: exhale elemental damage. Draconic Presence: frighten or charm in 30ft. Dragon\'s Flight: fly speed. Draconic Majesty: advantage on CHA checks vs dragons.'],
            ['Oath of the nobleGenies','official', 'Genie\'s Vessel: summon elemental servant. Elemental Gift: resistance to one damage type, extra damage on smite. Sanctuary Vessel: teleport to vessel as reaction. Genie\'s Wrath: extra damage and push on smite.'],
            ['Oath of Treachery',   'Homebrew',    '(UA) Invoke Duplicity-style abilities. Blackguard\'s Escape: disengage as bonus action. Aura of Treachery: enemies within 10ft have disadvantage on primaryAttribute vs your allies. Blackguard\'s Smite.'],
            ['Oath of the Dragon',  'Homebrew',    '(Homebrew) Draconic Smite: smite deals chosen elemental damage. Wyrm\'s Aura: allies gain elemental resistance. Aspect of the Dragon: grow wings, use breath weapon. Dragonic Presence: frighten with your aura.'],
        ]
  },
  {
    ClassName: "Ranger",
    hitDice:10, 
    primaryAttribute:['STR','DEX'], 
    spellAttribute:'WIS', 
    isHalf:true,
    subClass:[
            ['Hunter',           'official',        'Hunter\'s Prey: Colossus Slayer / Giant Killer / Horde Breaker. Defensive Tactics: Escape the Horde / Multiattack Defense / Steel Will. Multiattack options.'],
            ['Beast Master',     'official',        'Ranger\'s Companion: bond with a beast. Exceptional Training: beast uses your bonus action, can take non-attack actions. Bestial Fury: beast makes 2 attacks.'],
            ['Gloom Stalker',    'official',       'Dread Ambusher: +1d8 on first turn attacks, +10ft speed on first turn. Umbral Sight: invisible in darkness. Iron Mind: WIS save prof. Stalker\'s Flurry.'],
            ['Horizon Walker',   'official',       'Detect Portal: sense planar portals. Planar Warrior: extra force damage. Ethereal Step: ethereal plane briefly. Distant Strike: teleport before attacking.'],
            ['Monster Slayer',   'official',       'Hunter\'s Sense: sense vulnerabilities/immunities. Slayer\'s Prey: bonus damage vs one target. Supernatural Defense: bonus to primaryAttribute/grapple vs prey. Slayer\'s Counter.'],
            ['Fey Wanderer',     'official',      'Dreadful Strikes: psychic damage. Otherworldly Glamour: CHA bonus to checks, extra language. Beguiling Twist: redirect charm/fright. Fey Reinforcements.'],
            ['Swarmkeeper',      'official',      'Gathered Swarm: bonus attack move/damage. Writhing Tide: fly speed. Mighty Swarm: knock prone/restrain. Swarming Dispersal: escape with temp HP.'],
            ['Drakewarden',      'official',     'Drake Companion: bonded drake fights with you. Bond of Fang and Scale: share drake\'s resistances, ride it. Drake\'s Breath weapon. Perfected Bond: drake grows Large.'],
            ['Monster Hunter',   'official',       'Hunter\'s Sense: sense vulnerabilities/immunities. Slayer\'s Prey: bonus damage vs one target. Supernatural Defense: bonus to primaryAttribute/grapple vs prey. Slayer\'s Counter.'],
            ['winter walker',    'official',      'Ice Walk: move across ice without penalty, ignore difficult terrain from ice/snow. Arctic Camouflage: advantage on Stealth in cold environments. Snow Mastery: create difficult terrain with snow. Subzero Shroud: resistance to cold, immunity to snow/ice.'],
            ['Monster Hunter',   'Homebrew',      '(Matt Mercer homebrew) Monster\'s Bane: bonus damage vs monstrosities/undead. Supernatural Defense: bonus to primaryAttribute vs monster abilities. Relentless: advantage on checks vs creatures you\'ve hit. Magic\'s Bane: resistance to spell damage.'],
        ]
  },
  {
    ClassName: "Rogue",
    hitDice:8, 
    primaryAttribute:['DEX','INT'], 
    spellAttribute:null,
    subClass:[
            ['Thief',          'official',         'Fast Hands: bonus action Sleight of Hand/thieves tools/object. Second-Story Work: climb speed, running jump bonus. Supreme Sneak: adv Stealth at half speed. Thief\'s Reflexes.'],
            ['Assassin',        'official',        'Bonus Proficiencies: disguise kit, poisoner\'s kit. Assassinate: adv vs creatures that haven\'t acted + auto-crit on surprised targets. Infiltration Expertise. Impostor.'],
            ['Arcane Trickster','official',        'Spellcasting (INT, enchantment/illusion focus). Mage Hand Legerdemain: bonus action hide/pickpocket with mage hand. Magical Ambush: adv on spells vs unaware targets.'],
            ['Inquisitive',     'official',        'Ear for Deceit: min 8 on Insight. Eye for Detail: bonus action Perception/Investigation. Insightful Fighting: Sneak Attack without ally using Insight vs Deception.'],
            ['Mastermind',      'official',        'Master of Intrigue: disguise/forgery kits, 2 languages. Master of Tactics: Help as bonus action from 30ft. Insightful Manipulator. Misdirection. Soul of Deceit.'],
            ['Scout',           'official',        'Skirmisher: reaction to move half speed when enemy ends near you. Survivalist: Nature/Survival proficiency + expertise. Superior Mobility: +10 speed. Ambush Master.'],
            ['Swashbuckler',    'official',        'Fancy Footwork: no OA after attacking. Rakish Audacity: add CHA to initiative; Sneak Attack without ally if 1v1. Panache. Elegant Maneuver. Master Duelist.'],
            ['Phantom',         'official',        'Whispers of the Dead: gain skill/tool prof from nearby dead. Wails from the Grave: extra Sneak Attack damage to second target. Tokens of the Departed. Ghost Walk.'],
            ['Soulknife',       'official',        'Psionic Power: Psionic Whispers, Psychic Blades (1d6 psychic finesse thrown), Psychic Veil: invisibility. Rend Mind: stun target on sneak attack.'],
            ['scorn of the three','official',      'Bonus Proficiency: Intimidation. Mark of the Blade: teleport to marked target, add INT to damage. Mark of the Shadow: teleport between shadows. Mark of the Whisper: invisibility and telepathy.'],
            ['The Seeker',         'Homebrew',     '(UA) Shielding Aurora: resistance to radiant damage and aura of light. Astral Refuge: escape to astral plane briefly. Far Wanderer: fly speed. Astral Sequestration: banish a creature.'],
            ['Investigator',        'Homebrew',    '(Ravnica) Eye for Weakness: bonus sneak attack dice on first hit per turn vs unseen target. Probing Investigation: bonus action Insight check. Underworld Connections: gather information from criminal contacts. Versatile Crimestopper.'],

        ]
  },
  {
    ClassName: "Sorcerer",
    hitDice:6, 
    primaryAttribute:['CON','CHA'], 
    spellAttribute:'CHA',
    subClass:[
            ['Draconic Bloodline',  'official',    'Dragon Ancestor: choose dragon type for damage resistance and language. Draconic Resilience: +1 HP/level, AC 13+DEX without armor. Elemental Affinity: add CHA to damage. Dragon Wings.'],
            ['Wild Magic',          'official',    'Wild Magic Surge: 1-in-20 random effects after casting. Tides of Chaos: advantage 1/rest (recharges on surge). Bend Luck: spend 2 points to adjust any roll.'],
            ['Shadow Magic',        'official',    'Eyes of the Dark: darkness for 1 point. Strength of the Grave: CON save to stay at 1 HP 1/day. Hound of Ill Omen: summon shadowy hound. Shadow Walk.'],
            ['Divine Soul',         'official',    'Divine Magic: access to cleric spell list. Favored by the Gods: +2d4 to primaryAttribute/attacks 1/rest. Empowered Healing: reroll healing dice. Otherworldly Wings.'],
            ['Aberrant Mind',       'official',    'Telepathic Speech: communicate telepathically. Psionic Spells: bonus spells (detect thoughts, etc.). Revelation in Flesh: spend points for wings/swim/see invisible.'],
            ['Clockwork Soul',      'official',    'Clockwork Magic: bonus restoration/protection spells. Restore Balance: cancel adv/disadv. Bulwark of Law: absorb d8s = Sorcery points. Trance of Order.'],
            ['Lunar Sorcery',       'official',    'Moon Fire: sacred flame hits two. Lunar Embodiment: bonus spells per phase. Waxing/Full/Waning moon powers. Lunar Phenomenon: zone of power.'],
            ['Runechild',           'Homebrew',    'Rune Magic: inscribe runes for various effects. Rune Carver: use runes as spellcasting focus, extra runes. Runic Shield: reaction shield. Rune Mastery: extra effects on runes.'],
            ['spellfire sorcery',   'official',    'Spellfire Magic: heal with spell slots, damage with spell slots. Spellfire Adept: gain spellfire magic at 1st level, extra damage on spell attacks. Spellfire Master: regain spell slot on kill, extra damage on spell attacks.'],
        ]
  },
  {
    ClassName: "Warlock",
    hitDice:8, 
    primaryAttribute:['WIS','CHA'], 
    spellAttribute:'CHA', 
    isPact:true,
    subClass:[
            ['The Archfey',        'official',    'Fey Presence: charm or frighten nearby. Misty Escape: reaction to teleport and become invisible. Beguiling Defenses: immune to charm, reflect it. Dark Delirium.'],
            ['The Fiend',          'official',    'Dark One\'s Blessing: temp HP on kills (= CHA mod + level). Dark One\'s Own Luck: +1d10 to ability check/save 1/rest. Fiendish Resilience: damage resistance choice.'],
            ['The Great Old One',  'official',    'Awakened Mind: telepathy 30ft. Entropic Ward: impose disadv on attacker, gain adv next attack. Thought Shield: psychic resistance, reflect damage.'],
            ['The Undying',        'official',    'Among the Dead: Spare the Dying cantrip. Defy Death: regain HP on 0 HP 1/rest. Undying Nature: no aging, no food/water/air, advantage vs disease. Indestructible Life.'],
            ['The Celestial',      'official',    'Bonus Cantrips: Light, Sacred Flame. Healing Light: pool of d6s (= 1 + Warlock level) for bonus action healing. Radiant Soul: resistance + add CHA to radiant/fire spells.'],
            ['The Hexblade',       'official',    'Hexblade\'s Curse: mark target for bonus damage, crit range, HP on kill. Hex Warrior: medium armor/shields/martial weapons with CHA attacks. Accursed Specter.'],
            ['The Fathomless',     'official',    'Tentacle of the Deeps: summon 10ft tentacle that slows and damages. Gift of the Sea: swim speed, water breathing. Oceanic Soul: resistance to cold, speak with water creatures.'],
            ['The Genie',          'official',    'Genie\'s Vessel: enter tiny vessel for rest. Elemental Gift: resistance (by genie type) + fly speed. Sanctuary Vessel: invite allies. Limited Wish at 17th.'],
            ['The Undead',         'official',    'Form of Dread: frighten creatures, temp HP, death immunity briefly. Grave Touched: ignore resistance to necrotic. Necrotic Husk: necrotic resistance, explosion on death.'],
        ]
  },
  {
    ClassName:"Wizard",
    hitDice:6, 
    primaryAttribute:['INT','WIS'], 
    spellAttribute:'INT',
    subClass:[
           [ 'School of Abjuration',   'official', 'Abjuration Savant: half cost to copy abjuration spells. Arcane Ward: absorb damage with ward HP pool (2× INT mod + Wizard level). Projected Ward. Improved Abjuration.'],
           [ 'School of Conjuration',  'official', 'Conjuration Savant: half cost. Minor Conjuration: create small objects. Benign Transposition: teleport or swap with ally 1/rest. Focused Conjuration. Durable Summons.'],
           [ 'School of Divination',   'official', 'Divination Savant. Portent: roll 2d20 at dawn, replace any roll with these results. Expert Divination: recover lower spell slots when casting divination. Third Eye.'],
           [ 'School of Enchantment',  'official', 'Enchantment Savant. Hypnotic Gaze: charm one creature each short rest. Instinctive Charm: redirect attacks to nearby creatures. Split Enchantment: hit two with enchantments.'],
           [ 'School of Evocation',    'official', 'Evocation Savant. Sculpt Spells: protect allies from your AoE. Potent Cantrip: half damage on successful save. Empowered Evocation: add INT mod to evocation damage.'],
           [ 'School of Illusion',     'official', 'Illusion Savant. Improved Minor Illusion: add sound AND image. Malleable Illusions: move existing illusions. Illusory Self: reaction duplicate that absorbs hit. Illusory Reality.'],
           [ 'School of Necromancy',   'official', 'Necromancy Savant. Grim Harvest: regain HP when spells kill. Undead Thralls: animate dead creates extra zombies with better HP. Inured to Undeath. Command Undead.'],
           [ 'School of Transmutation','official', 'Transmutation Savant. Minor Alchemy: temporarily change material of object. Transmuter\'s Stone: grant darkvision/speed/resist/proficiency aura. Shapechanger. Master Transmuter.'],
           [ 'Bladesinging',           'official', 'Training in War and Song: light armor + performance proficiency. Bladesong: +INT to AC, +10 speed, advantage on DEX(Acrobatics), concentration primaryAttribute. Extra Attack. Song of Defense.'],
           [ 'War Magic',              'official', 'Arcane Deflection: reaction +2 AC / +4 to save. Tactical Wit: add INT to initiative. Power Surge: extra force damage stored from counterspell/dispel.'],
           [ 'Chronurgy Magic',        'official', 'Chronal Shift: reroll d20 twice per long rest. Temporal Awareness: add INT to initiative. Momentary Stasis: incapacitate target. Convergent Future: guarantee results.'],
           [ 'Graviturgy Magic',       'official', 'Adjust Density: slow or speed creature. Gravity Well: move creature 5ft after spell. Violent Attraction: add d10 to damage or falling. Event Horizon: pull/slow all nearby.'],
           [ 'Order of Scribes',       'official', 'Awakened Spellbook: use book as focus, change damage type of spells. Manifest Mind: project spellcasting focus 300ft. Master Scrivener: create 1st/2nd level spell scrolls free.'],
           [ 'School of Artifice',     'official', 'Bonus tool proficiency. Arcane Armaments: attune to more items. Craft Magical Item: create magical items using spell slots. Artificer\'s Magic: INT for magic item primaryAttribute.'],
           ['School of Psionics',      'Homebrew', '(UA) Psionic Focus: bonus to one mental ability check type. Psionic Devotion: bonus cantrips powered by mind. Thought Form: shed body and become psionic entity. Mental Discipline: resistance to psychic damage.'],
        ]
  },
  {
    ClassName: "Bloodhunter",
    hitDice:10, 
    primaryAttribute:['DEX','INT'], 
    spellAttribute:'INT', 
    isHalf:false,
    subClass:[
             ['Order of the Ghostslayer','Homebrew','(Critical Role — Matt Mercer) Rite of the Dawn: Crimson Rite deals radiant damage and suppresses undead regeneration. Ethereal Step: enter the Border Ethereal briefly as a bonus action. Vengeful Spirit: when you die, your spirit remains for 1 minute to continue fighting.'],
             ['Order of the Profane Soul','Homebrew','(Critical Role) Pact Magic: gain warlock spell slots and cantrips (2 patrons available). Mystical Nitro: add your Hemocraft die to spell damage. Runic Ward: reduce damage with blood rune reaction.'],
             ['Order of the Mutant', 'Homebrew',    '(Critical Role) Mutagencraft: brew mutagens each long rest — Potency (+STR), Swiftness (+DEX), Toughness (+CON), Sagacity (+INT), Perception (+WIS), Unbreakable (+resistance). Mutagens have a Mutagen Flaw (disadvantage on related primaryAttribute while active).'],
             ['Order of the Lycan',   'Homebrew',   '(Critical Role) Hybrid Transformation: partially transform into a bestial hybrid. Feral Might: +1d6 to STR-based attacks while transformed. Bloodlust: when you drop to 0 HP while transformed, make a WIS save or attack the nearest creature.'],
         ]
  },
    ];
const selectedClass = CLASS_DATA.find(
    characterClass => characterClass.ClassName === classSelect.value);

switch (selectedClass?.ClassName) {
    case "Artificer":
        console.log("Artificer selected");
        break;
    case "Barbarian":
        console.log("Barbarian selected");
        break;
    case "Cleric":
        console.log("Cleric selected");
        break;
    case "Druid":
        console.log("Druid Selected");
        break;
    case "Fighter":
        console.log("Fighter Selected");
        break;
    case "Healer":
        console.log("Healer Selected");
        break;
    case "Monk":
        console.log("Monk Selected");
        break;
    case "Paladin":
        console.log("Paladin Selected");
        break;
    case "Ranger":
        console.log("Ranger Selected");
        break;
    case "Rogue":
        console.log("Rogue Selected");
        break;
    case "Sorcerer":
        console.log("Sorcerer Selected");
        break;
    case "Warlock":
        console.log("Warlock Selected");
        break;
    case "Wizard":
        console.log("Wizard Selected");
        break;
    case "Bloodhunter":
        console.log("Bloodhunter selected");
        break;
    default:
        console.log("No class selected");
}





// Create Class options
CLASS_DATA.forEach(characterClass => {

    const option = document.createElement("option");

    option.value = characterClass.ClassName;
    option.textContent = characterClass.ClassName;

    classSelect.appendChild(option);

});


// When Class changes
classSelect.addEventListener("change", () => {

    subclassSelect.innerHTML =
        `<option value="">Select a Subclass`;

    subclassDescription.textContent = "";

    const selectedClass = CLASS_DATA.find(
        characterClass =>
            characterClass.ClassName === classSelect.value
    );

    if (!selectedClass) return;


    // Create subclass options
    selectedClass.subClass.forEach(subclass => {

        const option = document.createElement("option");

        option.value = subclass;
        option.textContent = subclass;

        subclassSelect.appendChild(option);

    });

});


// When Subclass changes
subclassSelect.addEventListener("change", () => {

    const selectedSubclass = subclassSelect.value;

    subclassDescription.textContent =
        SUBCLASS_INFO[selectedSubclass] || "";

});
//
const backGround = [
            ['Acolyte', 'Insight (Wis), Religion (Int)', 'none', '15 gp'],
            ['Anthropologist',	'Insight (Wis), Religion (Int)', 'none', '10 gp']
            ['Archaeologist',	'History (Int), Survival (Wis)',	'Any x1	Choose 1: cartographers tools, navigators tools',	'25 gp']
            ['Athlete',	'Acrobatics (Dex), Athletics (Str)',	'Any x1	Vehicles (Land)', '10 gp']
            ['Azorius Functionary',	'Insight (Wis), Intimidation (Cha)',	'Any x2	None',  '10 gp']
            ['Black Fist Double Agent', 'CoS (AL)	Deception (Cha), Insight (Wis)',	'Any X2; Disguise kit, and choose 1: artisans tools x1, gaming set x1',	'15 gp']
            ['Boros Legionnaire',	'Athletics (Str), Intimidation (Cha)',	'Choose 1: Celestial, Draconic, Goblin, Minotaur	Choose 1: cartographers tools, navigators tools',	'2 gp']
            ['Caravan Specialist',	'Animal Handling (Wis), Survival (Wis)',	'Any x1	Vehicles (land)',	'10 gp']
            ['Celebrity Adventurers Scion',	'Perception (Wis), Performance (Cha)',	'Any x2	Disguise kit',	'30 gp']
            ['Charlatan',	',Deception (Cha), Sleight of Hand (Dex)',	'Disguise kit, forgery kit',	'15 gp']
            ['City Watch',	'Athletics (Str), Insight (Wis)',	'None',	'10 gp']
            ['Clan Crafter',	'History (Int), Insight (Wis)',	'Any x1	Artisans tools', '15 gp']
            ['Cloistered Scholar',	'History (Int)', 'choose 1: Arcana (Int), Nature (Int), Religion (Int)', '10 gp']
            ['Cormanthor Refugee',	'Nature (Int), Survival (Wis)',	'Artisans tools',	'5 gp']
            ['Courtier',	'Insight (Wis), Persuasion (Cha)',	'None',	'5 gp']
            [' Criminal',	'Deception (Cha), Stealth (Dex)',	'Gaming set x1, thieves tools',	'15 gp']
            ['Dimir Operative',	'Deception (Cha), Stealth (Dex)',	'None',	'Special']
            ['Dragon Casualty',	'Intimidation (Cha), Survival (Wis)',	'Special (see page)',	'5 gp']
            ['Earthspur Miner',	'Athletics (Str), Survival (Wis)',	'None',	'5 gp']
            ['Entertainer',	'Acrobatics (Dex), Performance (Cha)',	'Disguise kit, musical instrument x1',	'15 gp']
            ['Faceless',	'Deception (Cha), Intimidation (Cha)',	'Disguise kit',	'10 gp']
            ['Faction Agent',	'Insight (Wis), and choose 1: special (see page)',	'None',	'15 gp']
            ['Failed Merchant',	'Investigation (Int), Persuasion (Cha)', 'Artisans tools x1',	'10 gp']
            ['Far Traveler',	'Insight (Wis), Perception (Wis)',	'Choose 1: musical instrument x1, gaming set x1', '5 gp']
            ['Feylost',	'Deception (Cha), Survival (Wis)',	'Musical instrument x1',	'8 gp']
            ['Fisher',	'History (Int), Survival (Wis)',	'None',	'10 gp']
            ['Folk Hero',	'Animal Handling (Wis), Survival (Wis)',	'Artisans tools x1, vehicles (land)',	'10 gp']
            ['Gambler',	'Deception (Cha), Insight (Wis)',	'Gaming set x1',	'15 gp']
            ['Gate Urchin',	'Deception (Cha), Sleight of Hand (Dex)',	'Musical instrument x1, thieves tools',	'10 gp']
            ['Gate Warden',	'Persuasion (Cha), Survival (Wis)',	'None',	'10 gp']
            ['Giant Foundling',	'Intimidation (Cha), Survival (Wis)',	'None',	'10 gp']
            ['Golgari Agent',	'Nature (Int), Survival (Wis)',	'Poisoners Kit',	'10 gp']
            ['Grinner',	'Deception (Cha), Performance (Cha)',	'Musical instrument x1, thieves tools',	'15 gp']
            ['Gruul Anarch',	'Animal Handling (Wis), Athletics (Str)', 'None',	'10 gp']
            ['Guild Artisan	', 'Insight (Wis), Persuasion (Cha)',	'Artisans tools x1',	'15 gp']
            ['Harborfolk',	'Athletics (Str), Sleight of Hand (Dex)',	'Gaming set x1, vehicles (water)',	'5 gp']
            ['Haunted One',	'Choose 2: Arcana (Int), Investigation (Int), Religion (Int), Survival (Wis)',	'None',	'1 sp']
            ['Hermit',	'Medicine (Wis), Religion (Int)',	'Herbalism kit', '5 gp']
            ['Hillsfar Merchant',	'Insight (Wis), Persuasion (Cha)', 'Vehicles (land), vehicles (water)',	'25 gp']
            ['Hillsfar Smuggler',	'Perception (Wis), Stealth (Dex)',	'Forgery kit',	'5 gp']
            ['House Agent',	'Investigation (Int), Persuasion (Cha)',	'none',	'20 gp']
            ['Inheritor',	'Survival (Wis), and choose 1: Arcana (Int), History (Int), Religion (Int)', 'Gaming set x1, musical instrument x1', '15 gp']
            ['Initiate',	'Athletics (Str), Intimidation (Cha)',	'Gaming set x1, vehicles (land)', '15 gp']
            ['Inquisitor',	'Investigation (Int), Religion (Int)',	'Artisans tools x1, thieves tools',	'15 gp']

//unfinished
            ['Investigator	VRGtR	Choose 2: Insight (Wis), Investigation (Int), Perception (Wis)	None	Disguise kit, thieves tools	10 gp']
            ['Iron Route Bandit	CoS (AL)	Animal Handling (Wis), Stealth (Dex)	None	Gaming set x1, vehicles (land)	5 gp']
            ['Izzet Engineer	GGR	Arcana (Int), Investigation (Int)	Choose 1: Draconic, Goblin, Vedalken	Artisans tools x1	5 gp']
            ['Knight of the Order	SCAG	Persuasion (Cha), and choose 1: special (see page)	Any x1	Choose 1: gaming set x1, musical instrument x1	10 gp']
            ['Knight of Solamnia	UA	Athletics (Str), Survival (Wis)	Any x2	None	10 gp']
            [' Lorehold Student	SCC	History (Int), Religion (Int)	Any x2	None	15 gp']
            ['Mage of High Sorcery	UA	Arcana (Int), History (Int)	Any x2	None	10 gp']
            ['Marine	GoS	Athletics (Str), Survival (Wis)	None	Vehicles (water, land)	10 gp']
            ['Mercenary Veteran	SCAG	Athletics (Str), Persuasion (Cha)	None	Gaming set x1, vehicles (land)	10 gp']
            ['Mulmaster Aristocrat	EE (AL)	Deception (Cha), Performance (Cha)	None	Artisans tools x1, musical instrument x1	10 gp']
            ['Noble	PHB	History (Int), Persuasion (Cha)	Any x1	Gaming set x1	25 gp']
            ['Orzhov Representative	GGR	Intimidation (Cha), Religion (Int)	Any x2	None	1 pp']
            ['Outlander	PHB	Athletics (Str), Survival (Wis)	Any x1	Musical instrument x1	10 gp']
            ['Phlan Insurgent	CoS (AL)	Stealth (Dex), Survival (Wis)	None	Artisans tools x1, vehicles (land)	5 gp']
            ['Phlan Refugee	EE (AL)	Athletics (Str), Insight (Wis)	Any x1	Artisans tools x1	15 gp']
            ['Plaintiff	AI	Medicine (Wis), Persuasion (Cha)	Any x1	Artisans tools x1	20 gp']
            ['Planar Philosopher	UA	Arcana (Int), Persuasion (Cha)	Any x2	None	10 gp']
            ['Prismari Student	SCC	Acrobatics (Dex), Performance (Cha)	Any x1	Choose 1: musical instrument x1, artisans tools x1	10 gp']
            ['Quandrix Student	SCC	Arcana (Int), Nature (Int)	Any x1	Artisans tools x1	15 gp']
            ['Rakdos Cultist	GGR	Acrobatics (Dex), Performance (Cha)	Choose 1: Abyssal, Giant	Musical instrument x1	10 gp']
            ['Rival Intern	AI	History (Int), Investigation (Int)	Any x1	Artisans tools x1	10 gp']
            ['Rune Carver	UA	History (Int), Perception (Wis)	Giant, Any x1	None	10 gp']
            ['Sage	PHB	Arcana (Int), History (Int)	Any x2	None	10 gp']
            ['Sailor	PHB	Athletics (Str), Perception (Wis)	None	Navigators tools, vehicles (water)	10 gp']
            ['Secret Identity	OotA (AL)	Deception (Cha), Stealth (Dex)	None	Disguise kit, forgery kit	5 gp']
            ['Selesnya Initiate	GGR	Nature (Int), Persuasion (Cha)	Choose 1: Elvish, Loxodon, Sylvan	Choose 1: artisans tools x1, musical instrument x1	5 gp']
            ['Shade Fanatic	OotA (AL)	Deception (Cha), Intimidation (Cha)	Netherese	Forgery kit	15 gp']
            ['Shipwright	GoS	History (Int), Perception (Wis)	None	Carpenters tools, vehicles (water)	10 gp']
            ['Silverquill Student	SCC	Intimidation (Cha), Persuasion (Cha)	Any x2	None	15 gp']
            ['Simic Scientist	GGR	Arcana (Int), Medicine (Wis)	Any x2	None	10 gp']
            ['Smuggler	GoS	Athletics (Str), Deception (Cha)	None	Vehicles (water)	15 gp']
            ['Soldier	PHB	Athletics (Str), Intimidation (Cha)	None	Gaming set x1, vehicles (land)	10 gp']
            ['Stojanow Prisoner	CoS (AL)	Deception (Cha), Perception (Wis)	None	Gaming set x1, thieves tools	10 gp']
            ['Ticklebelly Nomad	CoS (AL)	Animal handling (Wis), Nature (Int)	Giant	Herbalism kit	5 gp']
            ['Trade Sheriff	OotA (AL)	Investigation (Int), Persuasion (Cha)	Elvish	Thieves tools	17 gp']
            ['Urban Bounty Hunter	SCAG	Choose 2: Deception (Cha), Insight (Wis), Persuasion (Cha), Stealth (Dex)	None	Choose 2: gaming set x1, musical instrument x1, thieves tools	20 gp']
            ['Urchin	PHB	Sleight of Hand (Dex), Stealth (Dex)	None	Disguise kit, thieves tools	10 gp']
            ['Uthgardt Tribe Member	SCAG	Athletics (Str), Survival (Wis)	Any x1	Choose 1: artisans tools x1, musical instrument x1	10 gp']
            ['Vizier	PSA	History (Int), Religion (Int)	None	Artisans tools x1, musical instrument x1	25 gp']
            ['Volstrucker Agent	EGtW	Deception (Cha), Stealth (Dex)	None	Poisoners kit	10 gp']
            ['Waterdhavian Noble	SCAG	History (Int), Persuasion (Cha)	Any x1	Choose 1: gaming set x1, musical instrument x1	20 gp']
            ['Witchlight Hand	TWBtW	Performance (Cha), Sleight of Hand (Dex)	Any x1	Choose 1: disguise kit, musical instrument x1	8 gp']
            ['Witherbloom Student	SCC	Nature (Int), Survival (Wis)	Any x1	Herbalism kit	15 gp']
]
const hitPointroll = document.getElementById("")
// if (Options== "Character-inputs"){
    const CharacterInputs = [
        {
        //Character header inputs
            name: "",
            level: "",
            background: "",
            PlayerName: "",
            Race: "",
            Alignment: "",
            XP: "",
        //Main Character inputs
            Procficiency: "",
            inspiration: false,
            Strength: "",
            Dexterity: "",
            Constitution: "",
            Intelligence: "",
            Wisdom: "",
            Charisma: "",
        //Hit point and AC stuff
            ArmorClass: "",
            Initiative: "",
            Speed : 30,
            HitPoints: "",
        //Attacks and Spells
            AttackName: "",
            ATKBonus: "",
            DamageType: "",
        }
    ];
// } else if(Options == "Character-Sheet") {
    function Character_SHeet(){
            Main.innerHTML =`
           
            <div id="header-containor"
                <h4>Dungeons & Dragons</h4>
                <div id="Character-Name" class="heading">
                    <h5 id="Character-name"> ${CharacterInputs.name} </h5>
                </div>

                <div id="basic-info" class="heading">
                    <p>${CLASS_DATA.class} ${CharacterInputs.level}</p>
                    <p>${CharacterInputs.background}</p>
                </div>
            </div>

            <div id="Stats">
                <div id="Proficency-bonus> <h4> ${CharacterInputs.Procficiency} </h4> </div>
                <div id="Inspiration"> <p>${CharacterInputs.inspiration}</p>
                <div class="StatPoints"> <h3>${CharacterInputs.Strength}</h3> </div>
                <div class="StatPoints"> <h3>${CharacterInputs.Dexterity}</h3>  </div>
                <div class="StatPoints"> <h3>${CharacterInputs.Constitution}</h3>  </div>
                <div class="StatPoints"> <h3>${CharacterInputs.Intelligence}</h3>  </div>
                <div class="StatPoints"> <h3>${CharacterInputs.Wisdom}</h3>  </div>
                <div class="StatPoints"> <h3>${CharacterInputs.Charisma}</h3>  </div>

            </div>
            
            `
        
    }
// };