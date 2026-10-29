const Main = document.getElementById("MainContent");
const Options = document.getElementById("dropbox");

const classChoice = document.getElementById("ClassSelect");

const classSelect = document.getElementById("classSelect");
const subclassSelect = document.getElementById("SubclassSelect");
const subclassDescription = document.getElementById("subclassDescription");

    const CLASS_DATA = [
    { 
    ClassName: "Artificer", 
    hd:8,
    saves:['CON','INT'], 
    spellAb:'INT', 
    isHalf:true,
    subs:['Alchemist','Armorer','Artillerist','Battle Smith','Cartographer']
  },
  { 
    ClassName: "Barbarian",
    hd:12, 
    saves:"STR,CON", 
    spellAb:null,
    subs:['Path of the Berserker','Path of the Totem Warrior','Path of the Ancestral Guardian',
          'Path of the Battlerager','Path of the Storm Herald','Path of the Zealot',
          'Path of the Beast','Path of Wild Magic','Path of the Juggernaut','Path of the Dragon']
  },
  { 
   ClassName: "Bard", 
    hd:8, 
    saves:['DEX','CHA'], 
    spellAb:'CHA',
    subs:['College of Lore','College of Valor','College of Glamour','College of Swords',
          'College of Eloquence','College of Creation','College of Spirits','College of Whispers',
          'College of Tragedy', 'College of the Moon']
  },
   { 
    ClassName:"Cleric",
    hd:8, 
    saves:['WIS','CHA'], 
    spellAb:'WIS',
    subs:['Life Domain','Light Domain','Trickery Domain','Knowledge Domain','War Domain',
          'Nature Domain','Tempest Domain','Death Domain','Forge Domain','Grave Domain',
          'Order Domain','Peace Domain','Twilight Domain','Arcana Domain']
  },
  {
    ClassName: "Druid",
    hd:8, 
    saves:['INT','WIS'], 
    spellAb:'WIS',
    subs:['Circle of the Land','Circle of the Moon','Circle of Dreams','Circle of the Shepherd',
          'Circle of Spores','Circle of Stars','Circle of Wildfire','Circle of the Primeval','Circle of the Blighted']
  },
  {
    ClassName: "Fighter",
    hd:10, 
    saves:['STR','CON'], 
    spellAb:null,
    subs:['Champion','Battle Master','Banneret','Eldritch Knight','Arcane Archer','Cavalier','Samurai',
          'Psi Warrior','Rune Knight','Echo Knight','Purple Dragon Knight','Gunslinger']
  },
  {
    ClassName: "Healer",
    hd:8, 
    saves:['WIS','CON'], 
    spellAb:'WIS', 
    subs:['Vow of the Martyr','Vow of the Augmenter','Vow of the Protector','Vow of the Sipher']
  },
  {
    ClassName: "Monk",
    hd:8, saves:['STR','DEX'], 
    spellAb:null,
    subs:['Way of the Open Hand','Way of Shadow','Way of the Four Elements','Way of the Sun Soul',
          'Way of the Kensei','Way of Mercy','Way of the Astral Self','Way of the Ascendant Dragon',
          'Way of the Drunken Master','Way of the Long Death','Way of the Cobalt Soul']
  },
  {
    ClassName: "Paladin",
    hd:10, 
    saves:['WIS','CHA'], 
    spellAb:'CHA', 
    isHalf:true,
    subs:['Oath of Devotion','Oath of the Ancients','Oath of Vengeance','Oath of Conquest',
          'Oath of Redemption','Oath of Glory','Oath of the Watchers','Oathbreaker',
          'Oath of Heroism','Oath of the Crown','Oath of Treachery','Oath of the Dragon', 'Oath of the nobleGenies']
  },
  {
    ClassName: "Ranger",
    hd:10, 
    saves:['STR','DEX'], 
    spellAb:'WIS', 
    isHalf:true,
    subs:['Hunter','Beast Master','Gloom Stalker','Horizon Walker','Winter Walker','Monster Slayer',
          'Fey Wanderer','Swarmkeeper','Drakewarden','Monster Hunter']
  },
  {
    ClassName: "Rogue",
    hd:8, 
    saves:['DEX','INT'], 
    spellAb:null,
    subs:['Thief','Assassin','Arcane Trickster','Inquisitive','Mastermind','Scout',
          'Swashbuckler','Phantom','Soulknife','Revived','Investigator', 'Scorn of the three']
  },
  {
    ClassName: "Sorcerer",
    hd:6, 
    saves:['CON','CHA'], 
    spellAb:'CHA',
    subs:['Draconic Bloodline','Wild Magic','Shadow Magic','Storm Sorcery','Divine Soul',
          'Aberrant Mind','Clockwork Soul','Lunar Sorcery','Runechild', 'spellfire sorcery']
  },
  {
    ClassName: "Warlock",
    hd:8, 
    saves:['WIS','CHA'], 
    spellAb:'CHA', 
    isPact:true,
    subs:['The Archfey','The Fiend','The Great Old One','The Undying','The Celestial',
          'The Hexblade','The Fathomless','The Genie','The Undead','The Seeker']
  },
  {
    ClassName:"Wizard",
    hd:6, 
    saves:['INT','WIS'], 
    spellAb:'INT',
    subs:['School of Abjuration','School of Conjuration','School of Divination',
          'School of Enchantment','School of Evocation','School of Illusion',
          'School of Necromancy','School of Transmutation','Bladesinging',
          'War Magic','Chronurgy Magic','Graviturgy Magic','Order of Scribes',
          'School of Artifice','School of Psionics','Lore Mastery']
  },
  {
    ClassName: "Bloodhunter",
    hd:10, 
    saves:['DEX','INT'], 
    spellAb:'INT', 
    isHalf:false,
    subs:['Order of the Ghostslayer','Order of the Profane Soul','Order of the Mutant','Order of the Lycan']
  },
    ];

// const SUB_CLASS = [
//     {
//         name: "Alchemist",
//         description: "",
//         supporttingStat: [Int, ],
//         skills: []
//     },
// ]

const SUBCLASS_INFO = {
  // Artificer
    Alchemist:              'An Alchemist is an expert at combining reagents to produce magical effects. Alchemists use their creations to give life and to leech it away.',
    'Armorer':                'An artificer who specializes as an Armorer modifies armor to function almost like a second skin. The armor is enhanced to hone the artificers magic, unleash potent attacks, and generate a formidable defense. The artificer bonds with this armor, becoming one with it even as they experiment with it and refine its magical capabilities.',
    'Artillerist':            'An Artillerist specializes in using magic t o hurl energy, projectiles, and explosions on a battlefield. This destructive power was valued by all the armies of the Last War. Now that the war is over, some members of this specialization have sought to build a more peaceful world by using their powers to fight the resurgence of strife in Khorvaire. The gnome artificer Vi, an unlikely yet key member of House Canniths warforged project, has been especially vocal about making things right: "Its about time we fixed things instead of blowing them all to hell."',
    'BattleSmith':            'Battle-Ready: INT for weapon attacks. Steel Defender: loyal mechanical pet that fights for you. Extra Attack at 5th.',
    'Cartographer':           'Map Mastery: advantage on Navigation checks. Territorial Awareness: bonus action to mark an area, granting allies +1 AC and saves while in it. At higher levels, create Cartographic Traps and Shortcut routes.',
  // Barbarian
    'Path of the Berserker':  'Frenzy: bonus action unarmed strike while raging. Mindless Rage: immune to charm/fright while raging. Retaliation: reaction attack when hit.',
    'Path of the Totem Warrior':'Totem Spirit: Bear (resistance to all dmg), Eagle (no OA), Wolf (allies adv vs enemies near you). Totem bonuses scale.',
    'Path of the Ancestral Guardian':'Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.',
    'Path of the Battlerager': 'Spiked armor deals damage on grapple. Reckless Abandon adds temp HP on Reckless Attack. Requires Dwarf.',
    'Path of the Storm Herald': 'Aura of lightning, fire, or cold. Desert: fire damage; Sea: lightning; Tundra: temp HP to allies.',
    'Path of the Zealot':      'Divine Fury: extra radiant/necrotic damage. Warrior of the Gods: resurrection spells use no material components. Rage at death.',
    'Path of the Beast':       'Beast Aspect: claws, bite, or tail. Bestial Soul: swim/climb speed or jump. Call the Hunt: allies gain temp HP.',
    'Path of Wild Magic':      'Wild Surge: random magical effects when raging. Magic Awareness: detect spells. Unstable Backlash: redirect damage to Wild Surge.',
    // Bard
    'College of Lore':         'Bonus Proficiencies (3 skills). Cutting Words: reduce enemy attack/check with Bardic Inspiration. Magical Secrets (6th instead of 10th). Peerless Skill.',
    'College of Valor':        'Bonus Proficiencies: medium armor, shields, martial weapons. Combat Inspiration: Bardic die to damage/AC. Extra Attack at 6th.',
    'College of Glamour':      'Mantle of Inspiration: temp HP + free move to allies. Enthralling Performance: charm crowd. Mantle of Majesty: command as bonus action for 1 min.',
    'College of Swords':       'Bonus Proficiency: medium armor, scimitars. Blade Flourish: Defensive, Slashing, Mobile flourishes using Bardic die. Extra Attack.',
    'College of Eloquence':    'Silver Tongue: min 10 on Persuasion/Deception. Unsettling Words: reduce target save. Infectious Inspiration: refund Bardic die when it helps.',
    'College of Creation':     'Mote of Potential: extra effects when Bardic die used. Performance of Creation: create large nonmagical object. Animating Performance: animated objects.',
    'College of Spirits':      'Guiding Whispers: spare the dying cantrip. Spiritual Focus: bonus to spell damage. Tales from Beyond: d6 table random spirit powers.',
    'College of Whispers':     'Psychic Blades: extra psychic damage with Bardic die. Words of Terror: frighten targets. Mantle of Whispers: steal identity of slain humanoid.',
    'College of Tragedy':      'Bonus Proficiency: Performance. Subtle Magic: illusion/enchantment spells ignore resistances. Bewitching Performance: charm on performance. Tragic Inspiration: Bardic die to ability checks.',
    'College of the Moon':     'Bonus Proficiency: Performance. Moonlit Shroud: illusion spells ignore invisibility. Lunar Inspiration: Bardic die to damage or healing. Unfathomable Inspiration: Bardic die can be used on death saving throws.',
    // Cleric
    'Life Domain':             'Bonus: heavy armor. Disciple of Life: heals restore extra 2+spell level HP. Preserve Life: channel to spread HP among allies.',
    'Light Domain':            'Bonus: light cantrip. Warding Flare: impose disadvantage on attacker. Radiance of the Dawn: channel to deal radiant and dispel darkness.',
    'Trickery Domain':         'Blessing of the Trickster: adv Stealth. Invoke Duplicity: create illusion duplicate. Cloak of Shadows: become invisible.',
    'Knowledge Domain':        'Blessings of Knowledge: 2 languages, 2 skill proficiencies with expertise. Read Thoughts: channel to read minds. Visions of the Past.',
    'War Domain':              'Bonus: heavy armor, martial weapons. War Priest: weapon attack as bonus action. Guided Strike: channel for +10 to hit.',
    'Nature Domain':           'Bonus: heavy armor, 1 druid cantrip. Dampen Elements: reduce elemental damage to ally. Master of Nature: command charmed animals/plants.',
    'Tempest Domain':          'Bonus: heavy armor, martial weapons. Wrath of the Storm: reaction lightning/thunder. Destructive Wrath: maximize thunder/lightning damage.',
    'Death Domain':            'Bonus: martial weapons. Reaper: cantrips hit two targets. Touch of Death: add necrotic damage on kills. Inescapable Destruction: ignore necrotic resistance.',
    'Forge Domain':            'Bonus: heavy armor, smith tools. Artisan\'s Blessing: create metal items. Blessing of the Forge: give item +1 AC or +1 attack.',
    'Grave Domain':            'Circle of Mortality: maximize dice on 0 HP healing. Eyes of the Grave: sense undead. Sentinel at Death\'s Door: cancel crits. Keeper of Souls.',
    'Order Domain':            'Bonus: heavy armor. Voice of Authority: allies attack after you heal them. Order\'s Demand: channel to charm creatures.',
    'Peace Domain':            'Implement of Peace: proficiency in Insight/Performance/Persuasion. Emboldening Bond: bonded allies can add d4 to checks. Balm of Peace.',
    'Twilight Domain':         'Bonus: heavy armor, martial weapons. Eyes of Night: darkvision 300ft, share with allies. Twilight Sanctuary: aura of protection (temp HP or end charm/fear).',
    'Arcana Domain':           'Arcane Initiate: two wizard cantrips. Spell Breaker: dispel lower-level spells when healing. Arcane Mastery: add high-level wizard spells to list.',
    // Healer
    'Vow of the Martyr':       'Healers that take the Vow of the Martyr embody selflessness in its truest form. Through relentless study and practice, they wield powers to spare others from suffering, but at their own expense. The heroism of these Healers has inspired many great works of art, and continues to inspire acts of bravery on the battlefield.',
    'Vow of the Augmenter':    'Healers who take the Vow of the Augmenter dedicate themselves to the study of life’s potency. Dissatisfied with the limitations of their allies and themselves, they learn transformative magics which make their team-mates stronger, faster and more effective at whatever role they claim. An adventurer never inhabits their full potential until they travel with one of these Healers.',
    'Vow of the Protector':    'Healers who take the Vow of the Protector are honor-bound to protect their allies from danger in all forms that it takes. Their abjurative magic empowers their healing and conjures radiant barriers to shield their companions from every threat. Their companions rarely fall - and only after the world itself has tried.',
    'Vow of the Sipher':       'Sipher’s vow: sigils and runes that turn healing into lasting protection and resilience.',
    // Druid
    'Circle of the Land':      'Bonus Cantrip. Natural Recovery: recover spell slots on short rest. Land bonus spells by terrain type. Nature\'s Ward: immune charm/fright by fey/elementals.',
    'Circle of the Moon':      'Combat Wild Shape: wildshape as bonus action, expend slots for HP. Elemental Wild Shape: become air/earth/fire/water elemental. Enhanced wild shape CR.',
    'Circle of Dreams':        'Balm of the Summer Court: spend Wild Shape uses to heal. Hearth of Moonlight: protect rest location. Hidden Paths: teleport through trees.',
    'Circle of the Shepherd':  'Speech of the Woods: speak with beasts/plants. Spirit Totem: Hawk/Unicorn/Bear aura in wildshape. Faithful Summons on incapacitation.',
    'Circle of Spores':        'Halo of Spores: reaction necrotic damage. Symbiotic Entity: wildshape charges give temp HP and bonus damage. Spreading Spores. Fungal Infestation.',
    'Circle of Stars':         'Star Map: free Guidance cantrip, Guiding Bolt. Starry Form: Archer/Chalice/Dragon constellation bonuses. Full of Stars: translucence.',
    'Circle of Wildfire':      'Wildfire Spirit familiar for bonus summon damage. Enhanced Bond: teleport and boost spells via spirit. Cauterizing Flames: healing on death.',
    // Fighter
    'Champion':                'Improved Critical: crit on 19-20. Remarkable Athlete: half prof to unproficient STR/DEX/CON checks. Additional Fighting Style. Superior Critical (18-20).',
    'Battle Master':           'Combat Superiority: d8 maneuver dice (scale to d10/d12). Choose 3 maneuvers (trip, disarm, feint, riposte, etc.). Know Your Enemy.',
    'Eldritch Knight':         'Spellcasting (INT, abjuration/evocation focus). Weapon Bond: teleport bonded weapon. War Magic: attack after cantrip. Improved War Magic.',
    'Arcane Archer':           'Arcane Shot (2/rest): Banishing, Beguiling, Bursting, Enfeebling, Grasping, Piercing, Seeking, Shadow arrow effects.',
    'Cavalier':                'Bonus Proficiency. Born to the Saddle: mount advantages. Unwavering Mark: mark and punish enemies who attack others. Hold the Line.',
    'Samurai':                 'Bonus Proficiency. Fighting Spirit: temp HP + advantage on attacks 3/day. Elegant Courtier: WIS + CHA saves. Tireless Spirit. Strength Before Death.',
    'Psi Warrior':             'Psionic Power dice (d6→d12): Protective Field, Psionic Strike, Telekinetic Movement. Telekinetic Adept: flight + forceful step.',
    'Rune Knight':             'Rune Carving: Cloud/Fire/Frost/Stone/Storm runes with passive and triggered effects. Giant\'s Might: grow Large, bonus damage. Runic Shield. Great Stature.',
    'Echo Knight':             'Manifest Echo: create duplicate, swap positions, attack through it. Unleash Incarnation: extra attacks through echo. Echo Avatar: long-range scouting.',
    'Purple Dragon Knight':    'Rallying Cry: Second Wind heals allies. Royal Envoy: Persuasion expertise. Inspiring Surge: ally attacks on Action Surge. Bulwark: Indomitable for allies.',
    'Gunslinger':              'Grit: gain grit points to perform special shots. Gunsmith: create a firearm. Quickdraw: draw as part of attack. Special shots: Deadeye, Thunderclap, etc.',
    'Banneret':                'Bonus Proficiency. Rallying Cry: Second Wind heals allies. Royal Envoy: Persuasion expertise. Inspiring Surge: ally attacks on Action Surge. Bulwark: Indomitable for allies.',
    // Monk
    'Way of the Open Hand':    'Open Hand Technique: knock prone, push, deny reactions on Flurry hits. Wholeness of Body: self-heal 3× monk level 1/rest. Tranquility. Quivering Palm.',
    'Way of Shadow':           'Shadow Arts: darkness/darkvision/silence/pass without trace. Shadow Step: teleport between shadows. Cloak of Shadows (invisible in dim). Shadow Strike.',
    'Way of the Four Elements':'Elemental Disciplines: spend ki for elemental spells/effects (water whip, flame, earth, air). Ride the Wind, Flames of the Phoenix, etc.',
    'Way of the Sun Soul':     'Radiant Sun Bolt: ranged ki attack. Searing Arc Strike: burning hands with ki. Searing Sunburst: AoE radiant. Sun Shield: light + fire retaliation.',
    'Way of the Kensei':       'Kensei Weapons: chosen weapons become monk weapons. Agile Parry: +2 AC with kensei weapon. Deft Strike: +1d4 damage. Sharpen the Blade: magic bonus.',
    'Way of Mercy':            'Implements of Mercy: Insight/Medicine proficiency, healer kit. Hand of Healing: restore HP with Flurry. Hand of Harm: necrotic damage. Physician\'s Touch.',
    'Way of the Astral Self':  'Arms of the Astral Self: WIS for attacks, bonus action extra attacks. Visage of the Astral Self: darkvision, WIS for Intimidation. Body of the Astral Self.',
    'Way of the Ascendant Dragon':'Draconic Disciple: change damage to acid/cold/fire/lightning/poison, speak Draconic. Breath of the Dragon. Wings Unfurled: fly speed.',
    'Way of the Drunken Master':'Drunken Technique: Tumble + +10ft speed on Flurry. Tipsy Sway: redirect attacks. Drunkard\'s Luck: adv when both dice show same. Intoxicated Frenzy.',
    'Way of the Long Death':   'Touch of Death: gain temp HP equal to damage dealt to dying creatures. Hour of Reaping: frighten all nearby. Mastery of Death: avoid death with ki. Touch of the Long Death.',
    // Paladin
    'Oath of Devotion':        'Sacred Weapon: +CHA to attacks. Holy Nimbus: 30ft radiant aura harms fiends/undead. Oath spells: Protection from Evil, Aid, Beacon of Hope, Guardian of Faith.',
    'Oath of the Ancients':    'Nature\'s Wrath: restrain target. Turn the Faithless: repel fey/fiends. Elder Champion: regrow limbs, spells as bonus, nature attacks. Spells: Ensnaring Strike, Moonbeam, etc.',
    'Oath of Vengeance':       'Abjure Enemy: frighten one creature. Vow of Enmity: advantage vs target. Relentless Avenger: bonus speed on OA. Soul of Vengeance: bonus attack on Vow target.',
    'Oath of Conquest':        'Conquering Presence: frighten area. Guided Strike: +10 to hit. Aura of Conquest: frightened creatures speed 0, take psychic damage. Invincible Conqueror.',
    'Oath of Redemption':      'Emissary of Peace: +5 to Persuasion. Rebuke the Violent: punish attackers with their own damage. Aura of the Guardian: take ally\'s damage. Protective Spirit.',
    'Oath of Glory':           'Inspiring Smite: distribute temp HP on Divine Smite. Peerless Athlete: adv Athletics/Acrobatics. Aura of Alacrity: speed bonus to allies. Glorious Defense.',
    'Oath of the Watchers':    'Watcher\'s Will: CHA bonus to INT/WIS/CHA saves for allies. Abjure the Extraplanar: turn extraplanar creatures. Aura of the Sentinel: +PB to initiative. Mortal Bulwark.',
    'Oathbreaker':             'Dark Blessing: CHA to death saves. Control Undead. Aura of Hate: CHA to weapon damage + fiends/undead nearby also gain it. Supernatural Resistance. Dread Lord.',
    'Oath of Heroism':         'Peerless Athlete: adv Athletics/Acrobatics. Inspiring Smite: temp HP on smite. Aura of Alacrity: speed boost. Glorious Defense: deflect attacks with CHA.',
    'Oath of the Crown':       'Champion Challenge: pull enemies into duel. Turn the Tide: heal allies at 0 HP. Divine Allegiance: redirect ally damage to yourself. Unyielding Saint: STR/CON saves.',
    'Oath of Treachery':       'Betrayer\'s Tongue: proficiency in Deception and disguise kit. Heartbreaker: CHA to damage against charmed targets. Mace of Treachery: magic weapon that can turn on you. Traitor\'s Fate.',
    'Oath of the Dragon':      'Dragon\'s Breath: exhale elemental damage. Draconic Presence: frighten or charm in 30ft. Dragon\'s Flight: fly speed. Draconic Majesty: advantage on CHA checks vs dragons.',
    'Oath of the nobleGenies': 'Genie\'s Vessel: summon elemental servant. Elemental Gift: resistance to one damage type, extra damage on smite. Sanctuary Vessel: teleport to vessel as reaction. Genie\'s Wrath: extra damage and push on smite.',
    // Ranger
    'Hunter':                  'Hunter\'s Prey: Colossus Slayer / Giant Killer / Horde Breaker. Defensive Tactics: Escape the Horde / Multiattack Defense / Steel Will. Multiattack options.',
    'Beast Master':            'Ranger\'s Companion: bond with a beast. Exceptional Training: beast uses your bonus action, can take non-attack actions. Bestial Fury: beast makes 2 attacks.',
    'Gloom Stalker':           'Dread Ambusher: +1d8 on first turn attacks, +10ft speed on first turn. Umbral Sight: invisible in darkness. Iron Mind: WIS save prof. Stalker\'s Flurry.',
    'Horizon Walker':          'Detect Portal: sense planar portals. Planar Warrior: extra force damage. Ethereal Step: ethereal plane briefly. Distant Strike: teleport before attacking.',
    'Monster Slayer':          'Hunter\'s Sense: sense vulnerabilities/immunities. Slayer\'s Prey: bonus damage vs one target. Supernatural Defense: bonus to saves/grapple vs prey. Slayer\'s Counter.',
    'Fey Wanderer':            'Dreadful Strikes: psychic damage. Otherworldly Glamour: CHA bonus to checks, extra language. Beguiling Twist: redirect charm/fright. Fey Reinforcements.',
    'Swarmkeeper':             'Gathered Swarm: bonus attack move/damage. Writhing Tide: fly speed. Mighty Swarm: knock prone/restrain. Swarming Dispersal: escape with temp HP.',
    'Drakewarden':             'Drake Companion: bonded drake fights with you. Bond of Fang and Scale: share drake\'s resistances, ride it. Drake\'s Breath weapon. Perfected Bond: drake grows Large.',
    'Monster Hunter':          'Hunter\'s Sense: sense vulnerabilities/immunities. Slayer\'s Prey: bonus damage vs one target. Supernatural Defense: bonus to saves/grapple vs prey. Slayer\'s Counter.',
    'winter walker':           'Ice Walk: move across ice without penalty, ignore difficult terrain from ice/snow. Arctic Camouflage: advantage on Stealth in cold environments. Snow Mastery: create difficult terrain with snow. Subzero Shroud: resistance to cold, immunity to snow/ice.',
    // Rogue
    'Thief':                   'Fast Hands: bonus action Sleight of Hand/thieves tools/object. Second-Story Work: climb speed, running jump bonus. Supreme Sneak: adv Stealth at half speed. Thief\'s Reflexes.',
    'Assassin':                'Bonus Proficiencies: disguise kit, poisoner\'s kit. Assassinate: adv vs creatures that haven\'t acted + auto-crit on surprised targets. Infiltration Expertise. Impostor.',
    'Arcane Trickster':        'Spellcasting (INT, enchantment/illusion focus). Mage Hand Legerdemain: bonus action hide/pickpocket with mage hand. Magical Ambush: adv on spells vs unaware targets.',
    'Inquisitive':             'Ear for Deceit: min 8 on Insight. Eye for Detail: bonus action Perception/Investigation. Insightful Fighting: Sneak Attack without ally using Insight vs Deception.',
    'Mastermind':              'Master of Intrigue: disguise/forgery kits, 2 languages. Master of Tactics: Help as bonus action from 30ft. Insightful Manipulator. Misdirection. Soul of Deceit.',
    'Scout':                   'Skirmisher: reaction to move half speed when enemy ends near you. Survivalist: Nature/Survival proficiency + expertise. Superior Mobility: +10 speed. Ambush Master.',
    'Swashbuckler':            'Fancy Footwork: no OA after attacking. Rakish Audacity: add CHA to initiative; Sneak Attack without ally if 1v1. Panache. Elegant Maneuver. Master Duelist.',
    'Phantom':                 'Whispers of the Dead: gain skill/tool prof from nearby dead. Wails from the Grave: extra Sneak Attack damage to second target. Tokens of the Departed. Ghost Walk.',
    'Soulknife':               'Psionic Power: Psionic Whispers, Psychic Blades (1d6 psychic finesse thrown), Psychic Veil: invisibility. Rend Mind: stun target on sneak attack.',
    'scorn of the three':      'Bonus Proficiency: Intimidation. Mark of the Blade: teleport to marked target, add INT to damage. Mark of the Shadow: teleport between shadows. Mark of the Whisper: invisibility and telepathy.',
    // Sorcerer
    'Draconic Bloodline':      'Dragon Ancestor: choose dragon type for damage resistance and language. Draconic Resilience: +1 HP/level, AC 13+DEX without armor. Elemental Affinity: add CHA to damage. Dragon Wings.',
    'Wild Magic':              'Wild Magic Surge: 1-in-20 random effects after casting. Tides of Chaos: advantage 1/rest (recharges on surge). Bend Luck: spend 2 points to adjust any roll.',
    'Shadow Magic':            'Eyes of the Dark: darkness for 1 point. Strength of the Grave: CON save to stay at 1 HP 1/day. Hound of Ill Omen: summon shadowy hound. Shadow Walk.',
    'Divine Soul':             'Divine Magic: access to cleric spell list. Favored by the Gods: +2d4 to saves/attacks 1/rest. Empowered Healing: reroll healing dice. Otherworldly Wings.',
    'Aberrant Mind':           'Telepathic Speech: communicate telepathically. Psionic Spells: bonus spells (detect thoughts, etc.). Revelation in Flesh: spend points for wings/swim/see invisible.',
    'Clockwork Soul':          'Clockwork Magic: bonus restoration/protection spells. Restore Balance: cancel adv/disadv. Bulwark of Law: absorb d8s = Sorcery points. Trance of Order.',
    'Lunar Sorcery':           'Moon Fire: sacred flame hits two. Lunar Embodiment: bonus spells per phase. Waxing/Full/Waning moon powers. Lunar Phenomenon: zone of power.',
    'Runechild':               'Rune Magic: inscribe runes for various effects. Rune Carver: use runes as spellcasting focus, extra runes. Runic Shield: reaction shield. Rune Mastery: extra effects on runes.',
    'spellfire sorcery':       'Spellfire Magic: heal with spell slots, damage with spell slots. Spellfire Adept: gain spellfire magic at 1st level, extra damage on spell attacks. Spellfire Master: regain spell slot on kill, extra damage on spell attacks.',
    // Warlock
    'The Archfey':             'Fey Presence: charm or frighten nearby. Misty Escape: reaction to teleport and become invisible. Beguiling Defenses: immune to charm, reflect it. Dark Delirium.',
    'The Fiend':               'Dark One\'s Blessing: temp HP on kills (= CHA mod + level). Dark One\'s Own Luck: +1d10 to ability check/save 1/rest. Fiendish Resilience: damage resistance choice.',
    'The Great Old One':       'Awakened Mind: telepathy 30ft. Entropic Ward: impose disadv on attacker, gain adv next attack. Thought Shield: psychic resistance, reflect damage.',
    'The Undying':             'Among the Dead: Spare the Dying cantrip. Defy Death: regain HP on 0 HP 1/rest. Undying Nature: no aging, no food/water/air, advantage vs disease. Indestructible Life.',
    'The Celestial':           'Bonus Cantrips: Light, Sacred Flame. Healing Light: pool of d6s (= 1 + Warlock level) for bonus action healing. Radiant Soul: resistance + add CHA to radiant/fire spells.',
    'The Hexblade':            'Hexblade\'s Curse: mark target for bonus damage, crit range, HP on kill. Hex Warrior: medium armor/shields/martial weapons with CHA attacks. Accursed Specter.',
    'The Fathomless':          'Tentacle of the Deeps: summon 10ft tentacle that slows and damages. Gift of the Sea: swim speed, water breathing. Oceanic Soul: resistance to cold, speak with water creatures.',
    'The Genie':               'Genie\'s Vessel: enter tiny vessel for rest. Elemental Gift: resistance (by genie type) + fly speed. Sanctuary Vessel: invite allies. Limited Wish at 17th.',
    'The Undead':              'Form of Dread: frighten creatures, temp HP, death immunity briefly. Grave Touched: ignore resistance to necrotic. Necrotic Husk: necrotic resistance, explosion on death.',
    // Wizard
    'School of Abjuration':    'Abjuration Savant: half cost to copy abjuration spells. Arcane Ward: absorb damage with ward HP pool (2× INT mod + Wizard level). Projected Ward. Improved Abjuration.',
    'School of Conjuration':   'Conjuration Savant: half cost. Minor Conjuration: create small objects. Benign Transposition: teleport or swap with ally 1/rest. Focused Conjuration. Durable Summons.',
    'School of Divination':    'Divination Savant. Portent: roll 2d20 at dawn, replace any roll with these results. Expert Divination: recover lower spell slots when casting divination. Third Eye.',
    'School of Enchantment':   'Enchantment Savant. Hypnotic Gaze: charm one creature each short rest. Instinctive Charm: redirect attacks to nearby creatures. Split Enchantment: hit two with enchantments.',
    'School of Evocation':     'Evocation Savant. Sculpt Spells: protect allies from your AoE. Potent Cantrip: half damage on successful save. Empowered Evocation: add INT mod to evocation damage.',
    'School of Illusion':      'Illusion Savant. Improved Minor Illusion: add sound AND image. Malleable Illusions: move existing illusions. Illusory Self: reaction duplicate that absorbs hit. Illusory Reality.',
    'School of Necromancy':    'Necromancy Savant. Grim Harvest: regain HP when spells kill. Undead Thralls: animate dead creates extra zombies with better HP. Inured to Undeath. Command Undead.',
    'School of Transmutation': 'Transmutation Savant. Minor Alchemy: temporarily change material of object. Transmuter\'s Stone: grant darkvision/speed/resist/proficiency aura. Shapechanger. Master Transmuter.',
    'Bladesinging':            'Training in War and Song: light armor + performance proficiency. Bladesong: +INT to AC, +10 speed, advantage on DEX(Acrobatics), concentration saves. Extra Attack. Song of Defense.',
    'War Magic':               'Arcane Deflection: reaction +2 AC / +4 to save. Tactical Wit: add INT to initiative. Power Surge: extra force damage stored from counterspell/dispel.',
    'Chronurgy Magic':         'Chronal Shift: reroll d20 twice per long rest. Temporal Awareness: add INT to initiative. Momentary Stasis: incapacitate target. Convergent Future: guarantee results.',
    'Graviturgy Magic':        'Adjust Density: slow or speed creature. Gravity Well: move creature 5ft after spell. Violent Attraction: add d10 to damage or falling. Event Horizon: pull/slow all nearby.',
    'Order of Scribes':        'Awakened Spellbook: use book as focus, change damage type of spells. Manifest Mind: project spellcasting focus 300ft. Master Scrivener: create 1st/2nd level spell scrolls free.',
    'School of Artifice':      'Bonus tool proficiency. Arcane Armaments: attune to more items. Craft Magical Item: create magical items using spell slots. Artificer\'s Magic: INT for magic item saves.',
    // ── HOMEBREW / POPULAR UNOFFICIAL ──
    'Path of the Juggernaut':  '(Homebrew) Unstoppable: cannot be knocked prone while raging. Pulverizing Blow: knock enemies back 15ft on hit. Overwhelming Cleave: attack multiple creatures in a line. Juggernaut\'s Rush: charge through enemies.',
    'Path of the Dragon':      '(Homebrew) Draconic Rage: breath weapon during rage, choose damage type. Dragon Hide: natural AC. Frightful Presence: frighten enemies on rage entry. Wings at 14th level.',
    'College of Tragedy':      '(Homebrew) Poetry in Misery: regain Bardic Inspiration when ally fails a check. Sorrowful Fate: impose disadvantage on a death save. Tale of Hubris: exploit enemy crits. Inevitable Demise: escalating damage on cursed targets.',
    'Gunslinger':              '(Critical Role — Matt Mercer) Firearm Proficiency. Trick Shots: Disarming, Forceful, Piercing, Winging shots using Grit points. Quickdraw: initiative and quick-draw checks. Lightning Reload. Vicious Intent. Hemorrhaging Critical.',
    'Way of the Cobalt Soul':  '(Critical Role — Explorer\'s Guide) Extract Aspects: learn enemy resistances/immunities on hit. Extort Truth: force honesty. Mystical Erudition: bonus languages and INT skills. Mind of Mercury: extra reactions. Debilitating Barrage.',
    'Monster Hunter':          '(Matt Mercer homebrew) Monster\'s Bane: bonus damage vs monstrosities/undead. Supernatural Defense: bonus to saves vs monster abilities. Relentless: advantage on checks vs creatures you\'ve hit. Magic\'s Bane: resistance to spell damage.',
    'Runechild':               '(Tal\'Dorei Campaign Setting) Essence Runes charge up and power abilities. Glyph of Aegis: absorb damage. Sigilic Augmentation: temp ability bonuses. Runic Torrent: expel runes for area damage. Living Rune: transform into rune-empowered form.',
    'The Seeker':              '(UA) Shielding Aurora: resistance to radiant damage and aura of light. Astral Refuge: escape to astral plane briefly. Far Wanderer: fly speed. Astral Sequestration: banish a creature.',
    'Oath of Treachery':       '(UA) Invoke Duplicity-style abilities. Blackguard\'s Escape: disengage as bonus action. Aura of Treachery: enemies within 10ft have disadvantage on saves vs your allies. Blackguard\'s Smite.',
    'Oath of the Dragon':      '(Homebrew) Draconic Smite: smite deals chosen elemental damage. Wyrm\'s Aura: allies gain elemental resistance. Aspect of the Dragon: grow wings, use breath weapon. Dragonic Presence: frighten with your aura.',
    'Circle of the Primeval':  '(2022 UA) Keeper of Old: primal beast companion that grows with you. Prehistoric Conduit: boost companion\'s attacks. Titanic Bond: companion grows Large. Eldritch Wilds: companion becomes Huge.',
    'Circle of the Blighted':  '(Homebrew) Blighted Sapling: create a zone of necrotic terrain. Corrupted Wildshape: necrotic energy melds with beast form. Blight Spores: poison and slow enemies. Death Bloom: massive necrotic AoE.',
    'School of Psionics':      '(UA) Psionic Focus: bonus to one mental ability check type. Psionic Devotion: bonus cantrips powered by mind. Thought Form: shed body and become psionic entity. Mental Discipline: resistance to psychic damage.',
    'Lore Mastery':            '(UA) Lore Master: change damage type of spells. Spell Secrets: alter saving throw type. Alchemical Casting: spend spell slots to empower spells (widened area, longer duration, extra damage). Unerring Accuracy.',
    'Revived':                 '(Van Richten\'s Guide) Tokens of Past Lives: gain proficiency from past life each rest. Bolts from the Blue: reaction to avoid death, gain temp HP. Audience with Death: speak with dying creatures. Ethereal Jaunt: become incorporeal.',
    'Investigator':            '(Ravnica) Eye for Weakness: bonus sneak attack dice on first hit per turn vs unseen target. Probing Investigation: bonus action Insight check. Underworld Connections: gather information from criminal contacts. Versatile Crimestopper.',
    // ── OSTEOMANCER SUBCLASSES ────────────────────────────────────────────
    'Path of the Marrow':      '(Homebrew) Osteomancer subclass focused on bone manipulation as offense. Bone Spear: launch a bone spike at range (1d10 piercing). Osseous Armor: raise bone plating from fallen foes for temporary AC. Skeletal Burst: shatter a nearby skeleton into a damaging explosion.',
    'Path of the Grave Knight':'(Homebrew) Osteomancer subclass that raises and commands skeletal undead. Raise Servant: animate a skeletal warrior from any corpse as a bonus action. Death March: your undead gain bonus movement and attacks. Bone Throne: become surrounded by an aura of animated bones that protect and retaliate.',
    'Path of the Boneshaper':  '(Homebrew) Osteomancer focused on reshaping bone for utility and control. Osseous Craft: fashion tools, weapons, and structures from bone as an action. Cage of Ribs: restrain an enemy in a ribcage erupting from the ground (STR save). Living Architecture: reshape the battlefield using bone terrain.',
    'Path of the Reliquary':   '(Homebrew) Osteomancer who channels power through sacred bones of fallen heroes. Relic Communion: attune to a bone fragment to gain its bearer\'s skill proficiency. Sacred Marrow: once per rest, spend a relic charge to cast a spell without using a slot. Ancestral Chorus: call the voices of the dead for guidance (+1d6 to checks).',
    // ── WARDEN SUBCLASSES ─────────────────────────────────────────────────
    'Warden of the Wild':      '(Homebrew) Warden subclass bonded to forest and beasts. Nature\'s Sentinel: advantage on Perception in natural environments. Beast Bond: a beast companion shares your hit points and acts on your turn. Verdant Surge: when you take damage, vines erupt and slow the attacker.',
    'Warden of the Depths':    '(Homebrew) Warden subclass attuned to the sea and underground. Darktide Sight: darkvision 120 ft and Truesight 30 ft while submerged. Crushing Current: ranged water lash (2d8 bludgeoning, pushed 15 ft). Abyssal Ward: resistance to cold and pressure damage.',
    'Warden of the Citadel':   '(Homebrew) Warden subclass devoted to protecting civilized places. Shield of Hearth: +2 AC to all allies within 10 ft as a reaction. Stoneguard Stance: immunity to forced movement while standing on stone or metal. Rally the Defenders: bonus action inspiring shout that removes the frightened condition from allies.',
    'Warden of the Storm':     '(Homebrew) Warden subclass channeling weather and sky. Storm Step: teleport 30 ft in a flash of lightning as a bonus action. Thunder\'s Reach: weapon attacks deal bonus 1d6 lightning within range of 60 ft. Eye of the Tempest: immunity to effects of natural weather; advantage on CON saves.',
    // ── PLAGUEBEARER SUBCLASSES ───────────────────────────────────────────
    'Pestilent Sovereign':     '(Homebrew) Commands armies of disease. Plague Crown: create a contagion zone — creatures starting a turn inside make CON saves or contract a debilitating illness. Infectious Command: infected creatures become thralls that obey simple orders. Epidemic Surge: spread an active disease to all creatures within 30 ft.',
    'Rot Disciple':            '(Homebrew) Personal corruption and decay. Necrotic Flesh: natural armor 12 + CON mod; immune to disease. Wasting Touch: melee attack deals 2d8 necrotic and reduces target\'s max HP until their next long rest. Corpse Bloom: when a creature dies within 30 ft, gain temp HP = your CON mod.',
    'Fever Dancer':            '(Homebrew) Uses sickness as fuel for ecstatic movement. Fevered Grace: when you\'re below half HP, +10 ft speed and advantage on DEX saves. Delirium Strike: on hit, target makes CON save or has disadvantage on its next attack. Euphoric Plague: charmed and poisoned condition simultaneously; target attacks at random.',
    'Miasma Broker':           '(Homebrew) Trades in vapors and gases. Toxic Haze: create a 20-ft radius cloud of poison gas as an action (CON save or poisoned). Barter of Blight: offer enemies a "deal" — take poison damage willingly to gain a benefit, or refuse and save. Choking Mist: creatures in your haze have their movement speed halved.',
    // ── BLOOD HUNTER SUBCLASSES ───────────────────────────────────────────
    'Order of the Ghostslayer':'(Critical Role — Matt Mercer) Rite of the Dawn: Crimson Rite deals radiant damage and suppresses undead regeneration. Ethereal Step: enter the Border Ethereal briefly as a bonus action. Vengeful Spirit: when you die, your spirit remains for 1 minute to continue fighting.',
    'Order of the Profane Soul':'(Critical Role) Pact Magic: gain warlock spell slots and cantrips (2 patrons available). Mystical Nitro: add your Hemocraft die to spell damage. Runic Ward: reduce damage with blood rune reaction.',
    'Order of the Mutant':     '(Critical Role) Mutagencraft: brew mutagens each long rest — Potency (+STR), Swiftness (+DEX), Toughness (+CON), Sagacity (+INT), Perception (+WIS), Unbreakable (+resistance). Mutagens have a Mutagen Flaw (disadvantage on related saves while active).',
    'Order of the Lycan':      '(Critical Role) Hybrid Transformation: partially transform into a bestial hybrid. Feral Might: +1d6 to STR-based attacks while transformed. Bloodlust: when you drop to 0 HP while transformed, make a WIS save or attack the nearest creature.',
    // ── PSION SUBCLASSES ─────────────────────────────────────────────────
    'Order of the Awakened':   '(UA Psionics) Expanded Disciplines: primarily telepathy and divination. Psionic Investigation: advantage on Insight and Investigation. Unopened Mind: immunity to being read by Detect Thoughts or mind-reading magic.',
    'Order of the Immortal':   '(UA Psionics) Psi-enhanced body. Psychic Surge: when hit, can spend a psionic die to reduce damage. Surge of Health: once per rest, regain 2× your CON modifier in HP as a reaction. Living Aura: creatures within 10 ft have disadvantage on saves vs your disciplines.',
    'Order of the Nomad':      '(UA Psionics) Teleportation and spatial manipulation. Psionic Wayfarer: teleport up to 30 ft as bonus action (psionic die cost). Step Through: pass through solid objects for one move per turn. Planar Anchor: prevent one creature from teleporting (WIS save).',
    'Order of the Soul Knife': '(UA Psionics) Blade of psychic force. Psychic Blades: create two finesse, thrown (60 ft) psychic blades from nothing. Homing Strikes: add a psionic die to a missed attack roll. Rend Mind: on sneak attack, force a WIS save or stun.',
    'Order of the Wu Jen':     '(UA Psionics) Elemental psionic caster. Elemental Attunement: choose an element — acid, cold, fire, lightning, or thunder — and your disciplines deal that damage type. Wild Talent Surge: when you roll maximum on a psionic die, gain an extra use of your action.'
};

const selectedClass = CLASS_DATA.find(
    characterClass => characterClass.ClassName === classSelect.value
);

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
        `<option value="">Select a Subclass</option>`;

    subclassDescription.textContent = "";

    const selectedClass = CLASS_DATA.find(
        characterClass =>
            characterClass.ClassName === classSelect.value
    );

    if (!selectedClass) return;


    // Create subclass options
    selectedClass.subs.forEach(subclass => {

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
            Speed : "",
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