//ignored: false
MoreJSEvents.villagerTrades((event) => {
    const simpleTrades = 
    
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 3)], Item.of('minecraft:amethyst_shard', 7));
    event.addTrade("farmer", 2, [Item.of('minecraft:emerald', 2)], Item.of('minecraft:ink_sac', 16));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:blue_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:green_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:purple_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:red_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_elemental:yellow_archwood_sapling', 5));
    event.addTrade(
        "spacecatcustomprofessions:agronomancer", 1,
        [Item.of('minecraft:emerald', 3)],
        Item.of('mysticalagriculture:inferium_essence', 5)
    );
    const agronomancerTrades = [
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:air_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:earth_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:fire_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:water_essence', count: 7 }
        },
        {
            level: 3,
            inputs: [
                { item: 'mysticalagriculture:inferium_essence', count: 3 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:ice_essence', count: 7 }
        },
        { 
            level: 3, 
            inputs: [
                { item: 'mysticalagriculture:stone_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:deepslate_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:earth_essence', count: 5 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:nature_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:deepslate_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:nether_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:nature_essence', count: 5 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:coral_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:nature_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:honey_essence', count: 7 } 
        },
        { 
            level: 3, 
            inputs: [
                { item: 'mysticalagriculture:stone_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:limestone_essence', count: 7 } 
        },
        { 
            level: 5, 
            inputs: [
                { item: 'mysticalagriculture:nether_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:end_essence', count: 7 } 
        },
        { 
            level: 5, 
            inputs: [
                { item: 'mysticalagriculture:nether_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:blaze_essence', count: 7 } 
        }
    ];

    agronomancerTrades.forEach((trade) => {
        event.addTrade(
            "spacecatcustomprofessions:agronomancer",
            trade.level,
            [
                Item.of(trade.inputs[0].item, trade.inputs[0].count),
                Item.of(trade.inputs[1].item, trade.inputs[1].count)
            ],
            Item.of(trade.output.item, trade.output.count)
        );
    });

    const farmerTrades1 = [
        'pamhc2crops:raspberryitem', 'pamhc2crops:rhubarbitem', 'pamhc2crops:rutabagaitem', 'pamhc2crops:scallionitem', 'pamhc2crops:sesameseedsitem',
        'pamhc2crops:spiceleafitem', 'pamhc2crops:strawberryitem', 'pamhc2crops:sweetpotatoitem', 'pamhc2crops:taroitem', 'pamhc2crops:agaveitem',
        'pamhc2crops:arrowrootitem', 'pamhc2crops:blackberryitem', 'pamhc2crops:blueberryitem', 'pamhc2crops:cactusfruititem', 'pamhc2crops:candleberryitem',
        'pamhc2crops:cantaloupeitem', 'pamhc2crops:cassavaitem', 'pamhc2crops:coffeebeanitem', 'pamhc2crops:cranberryitem', 'pamhc2crops:elderberryitem',
        'pamhc2crops:garlicitem', 'pamhc2crops:gingeritem', 'pamhc2crops:grapeitem', 'pamhc2crops:greengrapeitem', 'pamhc2crops:huckleberryitem',
        'pamhc2crops:jicamaitem', 'pamhc2crops:juniperberryitem', 'pamhc2crops:kiwiitem', 'pamhc2crops:kohlrabiitem', 'pamhc2crops:leekitem',
        'pamhc2crops:mulberryitem', 'pamhc2crops:mustardseedsitem', 'pamhc2crops:parsnipitem', 'pamhc2crops:peanutitem', 'pamhc2crops:pineappleitem',
        'pamhc2crops:radishitem', 'pamhc2crops:tealeafitem', 'pamhc2crops:turnipitem', 'pamhc2crops:waterchestnutitem', 'pamhc2crops:whitemushroomitem',
        'pamhc2crops:alfalfaitem', 'pamhc2crops:aloeitem', 'pamhc2crops:barrelcactusitem', 'pamhc2crops:canolaitem', 'pamhc2crops:cattailitem',
        'pamhc2crops:cloudberryitem', 'pamhc2crops:lotusitem', 'pamhc2crops:nettlesitem', 'pamhc2crops:truffleitem', 'pamhc2crops:wolfberryitem',
        'pamhc2crops:guaranaitem', 'pamhc2crops:papyrusitem', 'pamhc2crops:sunchokeitem'
    ];

    farmerTrades1.forEach(trade => {
        event.addTrade("farmer", 1, `26x ${trade}`, 'minecraft:emerald');
    })

    const farmerTrades2 = [
        'pamhc2crops:artichokeitem', 'pamhc2crops:asparagusitem', 'pamhc2crops:bellpepperitem', 'pamhc2crops:broccoliitem', 'pamhc2crops:brusselsproutitem',
        'pamhc2crops:caulifloweritem', 'pamhc2crops:celeryitem', 'pamhc2crops:chilipepperitem', 'pamhc2crops:cucumberitem', 'pamhc2crops:eggplantitem',
        'pamhc2crops:kaleitem', 'pamhc2crops:lettuceitem', 'pamhc2crops:okraitem', 'pamhc2crops:peasitem', 'pamhc2crops:spinachitem',
        'pamhc2crops:tomatilloitem', 'pamhc2crops:wintersquashitem', 'pamhc2crops:zucchiniitem', 'pamhc2crops:chiaitem', 'pamhc2crops:nopalesitem',
        'pamhc2crops:bokchoyitem', 'pamhc2crops:calabashitem'
    ];

    farmerTrades2.forEach(trade => {
        event.addTrade("farmer", 1, `22x ${trade}`, 'minecraft:emerald');
    });

    const farmerTrades3 = [
        'pamhc2crops:amaranthitem', 'pamhc2crops:barleyitem', 'pamhc2crops:beanitem', 'pamhc2crops:chickpeaitem', 'pamhc2crops:cornitem',
        'pamhc2crops:cottonitem', 'pamhc2crops:juteitem', 'pamhc2crops:kenafitem', 'pamhc2crops:lentilitem', 'pamhc2crops:milletitem',
        'pamhc2crops:oatsitem', 'pamhc2crops:quinoaitem', 'pamhc2crops:ryeitem', 'pamhc2crops:sisalitem', 'pamhc2crops:soybeanitem',
        'pamhc2crops:sorghumitem', 'pamhc2crops:yuccaitem'
    ];

    farmerTrades3.forEach(trade => {
        event.addTrade("farmer", 1, `20x ${trade}`, 'minecraft:emerald');
    });

    const apiaristTrades = [
        // Ashy Mining Bee
        {
            level: 1,
            input1: Item.of('productivebees:gravel_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_ashy_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:sand_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_ashy_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:coarse_dirt_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_ashy_mining_bee')
        },
        // Chocolate Mining Bee
        {
            level: 1,
            input1: Item.of('productivebees:gravel_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_chocolate_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:sand_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_chocolate_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:coarse_dirt_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_chocolate_mining_bee')
        },
        // Green Carpenter Bee
        {
            level: 1,
            input1: Item.of('productivebees:dark_oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:mangrove_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:jungle_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:birch_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        // Yellow Carpenter Bee
        {
            level: 1,
            input1: Item.of('productivebees:dark_oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:birch_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:spruce_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        // Resin Bee
        {
            level: 1,
            input1: Item.of('productivebees:spruce_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_resin_bee')
        },
        // Blue Banded Bee
        {
            level: 1,
            input1: Item.of('productivebees:dark_oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_blue_banded_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:cherry_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_blue_banded_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:acacia_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_blue_banded_bee')
        },
        // Mason Bee
        {
            level: 2,
            input1: Item.of('productivebees:stone_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_mason_bee')
        },
        {
            level: 2,
            input1: Item.of('productivebees:sugar_cane_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_mason_bee')
        },
        // Digger Bee
        {
            level: 2,
            input1: Item.of('productivebees:stone_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_digger_bee')
        },
        {
            level: 2,
            input1: Item.of('productivebees:gravel_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_digger_bee')
        },
        // Leafcutter Bee
        {
            level: 1,
            input1: Item.of('productivebees:coarse_dirt_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_leafcutter_bee')
        },
        // Sweat Bee
        {
            level: 2,
            input1: Item.of('productivebees:snow_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_sweat_bee')
        },
        // Reed Bee
        {
            level: 2,
            input1: Item.of('productivebees:sugar_cane_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_reed_bee')
        },
        // Slimy Bee
        {
            level: 2,
            input1: Item.of('productivebees:slimy_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:slimy"}}')
        },
        // Glowing Bee
        {
            level: 3,
            input1: Item.of('productivebees:glowstone_nest'),
            input2: Item.of('minecraft:glowstone_dust'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:glowing"}}')
        },
        // Ghostly Bee
        {
            level: 3,
            input1: Item.of('productivebees:soul_sand_nest'),
            input2: Item.of('minecraft:ghast_tear'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ghostly"}}')
        },
        // Crystalline Bee
        {
            level: 3,
            input1: Item.of('productivebees:nether_quartz_nest'),
            input2: Item.of('minecraft:quartz'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:crystalline"}}')
        },
        // Gold Bee
        {
            level: 4,
            input1: Item.of('productivebees:nether_gold_nest'),
            input2: Item.of('minecraft:gold_ingot'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:gold"}}')
        },
        // Magmatic Bee
        {
            level: 5,
            input1: Item.of('productivebees:nether_brick_nest'),
            input2: Item.of('minecraft:magma_cream'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:magmatic"}}')
        },
        // Ender Bee
        {
            level: 5,
            input1: Item.of('productivebees:end_stone_nest'),
            input2: Item.of('minecraft:popped_chorus_fruit'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ender"}}')
        },
        // Draconic Bee
        {
            level: 5,
            input1: Item.of('productivebees:end_stone_nest'),
            input2: Item.of('minecraft:dragon_breath'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconic"}}')
        },
        // Neon Cuckoo Bee
        {
            level: 2,
            input1: Item.of('productivebees:spawn_egg_blue_banded_bee'),
            input2: Item.of('minecraft:emerald', 3),
            output: Item.of('productivebees:spawn_egg_neon_cuckoo_bee')
        },
        // Nomad Bee
        {
            level: 2,
            input1: Item.of('productivebees:spawn_egg_ashy_mining_bee'),
            input2: Item.of('minecraft:emerald', 3),
            output: Item.of('productivebees:spawn_egg_nomad_bee')
        },
        // Oily Bee
        {
            level: 5,
            input1: Item.of('minecraft:fishing_rod', '{Damage:0}'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:oily"}}')
        },
    ];

    apiaristTrades.forEach(trade => {
        event.addTrade("spacecatcustomprofessions:apiarist", trade.level, [trade.input1, trade.input2], trade.output);
    });
});

